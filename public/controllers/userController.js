const User = require('../models/User')
const config = require('../config/global')
const bcrypt = require('bcryptjs');


exports.crearUsuario = async (req, res) => {

    const { nombres, apellidos, email, password } = req.body;

    if (!nombres || !apellidos || !email || !password) {
        return res.redirect('/register.html?error=1');
    }

    try {
        const user = new User(
            {
                nombres,
                apellidos,
                email,
                password
            }
        )

        user.password = await user.encryptPassword(user.password)
        await user.save()

        res.redirect('/login.html');

        console.log('Usuario creado:', user)
    } catch (error) {
        console.log(error)
        if (error.name === 'ValidationError') {
            return res.redirect('/register.html?error=2');
        }
        res.redirect('/register.html?error=3');
    }
}

exports.logearUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        console.log('Usuario encontrado:', user)

        if (!user) {
            return res.redirect('/login.html?error=1');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.redirect('/login.html?error=2');
        }

        res.redirect('/index.html');

    } catch (error) {
        console.log(error);
        res.redirect('/login.html?error=3');
    }
}
