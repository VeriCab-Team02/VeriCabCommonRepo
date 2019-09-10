export const reducer = (state = {
    searchMode: 'SearchDriver',
    driverId: '',
    carId: '',
    carType: '',
    carUrl: 'http://localhost:3000/test',
    driverUrl: 'http://localhost:3000/test/',
    isActive: false
} , action) => {
    switch (action.type) {
        case 'DRIVERMODE':
            return Object.assign({}, action);
        case 'CARMODE':
            return Object.assign({}, action);
        case 'SETDRIVERID':
            return Object.assign({}, action);
        case 'SETCARID':
            return Object.assign({}, action);
        case 'SETCARTYPE':
            return Object.assign({}, action);
        case 'SETACTIVE':
            return Object.assign({}, action);
        default:
            return state
    }
}



export default reducer;