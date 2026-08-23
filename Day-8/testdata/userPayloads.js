module.exports = {
    validUser: {
        name: "Neeraja",
        username: "neeraja",
        email: "neeraja@test.com"
    },

    userWithoutName: {
        username: "neeraja",
        email: "neeraja@test.com"
    },

    userWithoutUsername: {
        name: "Neeraja",
        email: "neeraja@test.com"
    },

    userWithoutEmail: {
        name: "Neeraja",
        username: "neeraja"
    },

    emptyUser: {},

    invalidEmailUser: {
        name: "Neeraja",
        username: "neeraja",
        email: "invalid-email"
    },

    numericNameUser: {
        name: 12345,
        username: "neeraja",
        email: "neeraja@test.com"
    },

    numericEmailUser: {
        name: "Neeraja",
        username: "neeraja",
        email: 12345
    },

    nullValuesUser: {
        name: null,
        username: null,
        email: null
    },

    extraFieldsUser: {
        name: "Neeraja",
        username: "neeraja",
        email: "neeraja@test.com",
        age: 25,
        role: "admin"
    }
};