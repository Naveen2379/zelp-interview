import {createStore} from 'redux';

const initialState = {
    amount: 0,
    selectedCountry: 'India'
}

export const convertCurrency = ({amount, selectedCountry}) => {
    console.log(amount, selectedCountry);
    return {
        type: 'CONVERT_CURRENCY',
        payload: {
            amount: amount,
            selectedCountry: selectedCountry
        }
    }
}

const convertCurrencyReducer = (state=initialState, action) => {
    console.log(state);

    const calculateCurrency = (amount, country) => {
        console.log('calculate currency function');
        console.log(amount);
        console.log(country);
        if(country === 'USA') {
            console.log('country USA');
            return amount*10;
        }
        else if(country === 'India' ) {
            console.log('country India');
            return amount*1;
        }
        else {
            console.log('country Russia');
            return amount*5;
        }
    }
    switch (action.type) {
        case 'CONVERT_CURRENCY': {
            console.log(action.type);
            console.log(action.payload);
            console.log('convert_currency');
            const { amount, selectedCountry} = action.payload;
            console.log(selectedCountry);
            return {
                ...state,
                amount: calculateCurrency(amount, selectedCountry),
                selectedCountry: selectedCountry
            }
        }
        default: {
            console.log('default case');
            return state;
        }
    }

}
export const store = createStore(convertCurrencyReducer);