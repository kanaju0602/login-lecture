"use strict";

const { reduce } = require("async");

class UserStorage {
    static #users = {
        id: ["woorimIT", "나개발", "김팀장", "kana0602"],
        psword: ["1234", "1234", "123456", "ju0602"],
        name: ["우리밋", "나개발", "김팀장", "주우진"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;