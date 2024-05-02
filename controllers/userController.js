const bcrypt = require('bcrypt');
const User = require('../models/User');
const OTP = require('../models/OTP');
const mailSender = require('../utils/mailSender');
const otpGenerator = require('otp-generator');
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            username,
            email,
            password: hashedPassword
        });
        res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Cannot Register:', error);
        res.status(500).json({ message: 'Failed to register user' });
    }
};
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Password doesn Match ' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error ', error);
        res.status(500).json({ message: 'Failed to login user' });
    }
};
exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const otp = otpGenerator.generate(6, { digits: true, upperCase: false, specialChars: false });
        await OTP.create({ email, otp });
        await mailSender(email, 'Password Reset OTP', `Your OTP is ${otp}`);
        res.status(200).json({ message: 'Password reset OTP sent successfully' });
    } catch (error) {
        console.error('Error sending password reset OTP:', error);
        res.status(500).json({ message: 'Failed to send password reset OTP' });
    }
};
