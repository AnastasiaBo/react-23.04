import { handleAction } from 'redux-actions';

const initialStore = {
    name: 'Anastasia',
    lastName: 'Bogdan',
};

const reducer = handleAction('', store => store, initialStore);

export default reducer;

export const getProfileFromStore = store => store.profile;