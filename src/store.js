import {createStore} from 'redux';
import reducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';


export const setDriverMode={
    type: 'DRIVERMODE',
    searchMode: 'SearchDriver',
    urlMode: 'driverUrl'
    
}

export const setCarMode={
   type: 'CARMODE',
   searchMode: 'SearchCar',
   urlMode: 'CarUrl'
   
}

export const setDriver = (id) => {
    return{
        type: 'SETDRIVER',
        driverId: id
    }
}

export const setCar = (id) => {
    return{
        type: 'SETCAR',
        carId: id
    }
}

export const setCarType = (type) => {
    return{
        type: 'SETCARTYPE',
        carType: type
    }
}




const store = createStore(reducer,composeWithDevTools());

export default store;