const defaultState = [
    {
        id: 1,
        name: "Football"
    },
    {
        id: 2,
        name: "Computers"
    },
    {
        id: 3,
        name: "Politics"
    },
    {
        id: 4,
        name: "Music"
    },
    {
        id: 5,
        name: "Science"
    }, 
]

export const trend = (state = defaultState, action) => {
    switch (action.type) {
        case 'INSERT_TRENDS':
            return action.trends;
    
        default:
            return state;
    }
}