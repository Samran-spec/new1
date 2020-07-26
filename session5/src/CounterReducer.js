const CountReducer = (state , action) => {

    switch(action){
        case 'INCREAMENT':
            return state+1;
    }
}
export default CountReducer;