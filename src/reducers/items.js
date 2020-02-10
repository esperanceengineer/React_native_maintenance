import {ADD_ITEM,ITEMS} from '../actions';

const items = (state = [],action ) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state,action.text];
        case ITEMS:
            return state;
        default:
            return state;
    }
}

export default items;