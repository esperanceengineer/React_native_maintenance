import firebase from '../api/firebase'
//ACTIONS TYPE
const ADD_ITEM = "ADD_ITEM";
const ITEMS = "ITEMS";


//ACTIONS CREATORS  
const addItem = (objet) => ({
    type: ADD_ITEM,
    text:objet
});

const remoteAddItem = (objet) => {
    return function(dispatch) {
        firebase.database().push(objet);
        //dispatch(addItem(objet));
    }
}

const items = (data) => ({
    type: ITEMS,
    data
});

const watchItems = () => {
    return function(dispatch) {
        firebase.database().on('value',function(snapshot) {
            let list = [];
            snapshot.forEach(function(data) {
                list.push(data.val())
            })
            dispatch(items(list))
        },function(err) {
            console.log('Error',err)
        })
    }
}
const NoWatchItems = () => {
    firebase.database().off();
}

export {
    ADD_ITEM,
    ITEMS,
    remoteAddItem,
    watchItems,
    NoWatchItems
}