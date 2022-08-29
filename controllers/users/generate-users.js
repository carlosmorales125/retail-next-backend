const { faker } = require('@faker-js/faker');

module.exports = function() {
    const users = [];

    for(let i = 0; i < 50; i++) {
        const user = {
            name: faker.name.fullName(),
        };
        users.push(user);
    }

    return users;
};
