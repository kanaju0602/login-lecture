"use strict" //자바스크립트일경우 사용하는 것
const home = (req, res) => {
    res.render("home/index")
};

const login = (req, res) => {
    res.render("home/login")
};

module.exports = {
    home,
    login
}