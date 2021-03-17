const insertTrends = (trends) => {
    return dispatch => {
        dispatch({
            type: 'INSERT_TRENDS',
            trends
        });
    }
}

export const trendActions = {
    insertTrends
}