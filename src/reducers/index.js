import {ADD_ITEM,ITEMS} from '../actions'

const reducer = (state = [],action ) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                action.objet
            ];
        case ITEMS:
            return state;
        default:
            return state;
    }
}

export default reducer;