const jwt = require('jsonwebtoken');

const { SECRET_KEY } = require('./../config');
const User = require('./../models/user');

exports.register = async (req, res, next) => {
    const { firstName, lastName, mobilnr, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user)
        return res.status(403).json({ error: { message: 'Email already in use!' } });
    const newUser = new User({ firstName, lastName, mobilnr, email, password });
    try {
        await newUser.save();
        const token = getSignedToken(newUser);
        res.status(200).json({ token });
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
        return res.status(403).json({ error: { message: 'Invalid email/password' } });
    const isValid = await user.isPasswordValid(password);
    if (!isValid)
        return res.status(403).json({ error: { message: 'Invalid email/password' } });
    const token = getSignedToken(user);
    res.status(200).json({ token });
};

getSignedToken = user => {
    return jwt.sign({
        id: user._id,
        email: user.email,
        mobilnr:user.mobilnr,
        firstName: user.firstName,
        lastName: user.lastName
    }, SECRET_KEY, { expiresIn: '1h' });
};
