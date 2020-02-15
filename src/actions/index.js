import firebase from '../api/firebase'
//ACTIONS TYPE
const ADD_ITEM = "ADD_ITEM";
const ITEMS = "ITEMS";


//ACTIONS CREATORS  
const addItem = (objet) => ({
    type: ADD_ITEM,
    text:objet
});

const remoteAddItem = objet => dispatch => {
    let list = [];
    firebase.database().push(objet).then(() => {
        console.log('Data Added');
        firebase.database().once('value',snapshot => {
            snapshot.forEach(data => {
                list.push(data.val())
            })
            dispatch(items(list));
        })
    });
}

const items = (data) => ({
    type: ITEMS,
    data
});

const watchItems = () => async dispatch => {
    let list = [];
    firebase.database().on('value',snapshot => {
        snapshot.forEach(data => {
            list.push(data.val())
        })
        dispatch(items(list));
    })
}

export {
    ADD_ITEM,
    ITEMS,
    remoteAddItem
}