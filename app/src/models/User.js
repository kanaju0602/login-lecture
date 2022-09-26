"use strict";

const UserStorage = require("./UserStorage")

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const { id, psword } = await UserStorage.getUserInfo(client.id); //await은 항상 promises를 반환한 것만 사용할 수 있다. async와 함께

        if (id) {
            if (id === client.id && psword === client.psword) {
                return { success: true };
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."}
    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;