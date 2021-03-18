const defaultState = [
    {
        id: 1,
        name: "Pepe",
        username: "user1",
        password: "1234"
    },
    {
        id: 2,
        name: "Jose",
        username: "user2",
        password: "1234"

    },
    {
        id: 3,
        name: "Luis",
        username: "user3",
        password: "1234"
    },
    {
        id: 4,
        name: "Alba",
        username: "user4",
        password: "1234"
    },
    {
        id: 5,
        name: "Lucía",
        username: "user5",
        password: "1234"
    },
    {
        id: 6,
        name: "Eva",
        username: "user6",
        password: "1234"
    },
    {
        id: 7,
        name: "Juan",
        username: "juan",
        password: "1234"
    }
];

export const user = (state = defaultState, action) => {
    switch (action.type) {
        case 'INSERT_USERS':
            return action.users

        default:
            return state;
    }
}