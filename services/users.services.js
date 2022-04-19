const { faker } = require('@faker-js/faker');

class User {
    constructor() {
        this.users = [];
        this.generate();
    }
    generate () {
        const limit = 17;
        for (let i = 0; i < limit; i++) {
            this.users.push({
                id: faker.datatype.uuid(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                profilePic: faker.image.avatar(),
            })
        }
    }

    find() {
        return this.users;
    }
}

module.exports = User;