export const reducer = (state = {
    searchMode: 'SearchDriver',
    urlMode: 'URL',
    driverId: '',
    carId: '',
    carType: ''
} , action) => {
    switch (action.type) {
        case 'DRIVERMODE':
            return Object.assign({}, action);
        case 'CARMODE':
            return Object.assign({}, action);
        case 'SETDRIVER':
            return Object.assign({}, action);
        case 'SETCAR':
            return Object.assign({}, action);
        case 'SETCARTYPE':
            return Object.assign({}, action);
        default:
            return state
    }
}



export default reducer;