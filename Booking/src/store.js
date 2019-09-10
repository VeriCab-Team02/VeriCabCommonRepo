import {createStore} from 'redux';
import reducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';


export const setDriverMode={
    type: 'DRIVERMODE',
    searchMode: 'SearchDriver',
    driverUrl: 'http://localhost:3000/test',
    isActive: false
   
    
}

export const setCarMode={
   type: 'CARMODE',
   searchMode: 'SearchCar',
   carUrl: 'http://localhost:3000/test',
   isActive: false

   
}

 

export const setDriverId = (Name) => {
    return{
        type: 'SETDRIVERID',
        driverId: Name,
        searchMode: 'SearchDriver',
        driverUrl: 'http://localhost:3000/test',
        isActive: false
    }
}

export const setCarId = (id) => {
    return{
        type: 'SETCARID',
        carId: id,
        searchMode: 'SearchCar',
        carUrl: 'http://localhost:3000/test',
        isActive: false
    }
}

export const setCarType = (type) => {
    return{
        type: 'SETCARTYPE',
        carType: type,
        searchMode: 'SearchCar',
        carUrl: 'http://localhost:3000/test'
    }
}

export const setCarModeActive={
    type: 'ACTIVE',
    isActive: true,
    searchMode: 'SearchDriver',
    driverUrl: 'http://localhost:3000/test'
 
    
 }
 export const setDriverModeActive={
    type: 'ACTIVE',
    isActive: true,
    searchMode: 'SearchCar',
    carUrl: 'http://localhost:3000/test'
 
    
 }




const store = createStore(reducer,composeWithDevTools());

export default store;