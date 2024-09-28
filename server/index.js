const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

const users = [{ id: 1, username: 'Schekhovtsov', age: 27 }];

const app = express();
app.use(cors());

const createUser = (input) => {
    const id = Date.now();
    return {
        id,
        ...input,
    };
};

const root = {
    getAllUsers: () => {
        return users;
    },
    getUsers: ({ id }) => {
        return users.find((user) => user.id === id);
    },
    createUser: ({ input }) => {
        const user = createUser(input);
        users.push(user);
        return user;
    },
};

app.use(
    '/graphql',
    graphqlHTTP({
        graphiql: true,
        schema,
        rootValue: root,
    })
);

const port = 3010;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
