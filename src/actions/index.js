//ACTIONS TYPE
const ADD_ITEM = "ADD_ITEM";
const ITEMS = "ITEMS";


//ACTIONS CREATORS  
const addItem = (objet) => ({
    type: ADD_ITEM,
    objet
});

const items = () => ({
    type: ITEMS
});

export {
    ADD_ITEM,
    ITEMS,
    addItem,
    items
}