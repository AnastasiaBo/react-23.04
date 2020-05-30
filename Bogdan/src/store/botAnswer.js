import { setUpdatChatsIds, addNewMessage, deleteUpdatedId } from '../actions/chatsActions';

const botAnswer = store => next => action => {
  if (action.type === addNewMessage.toString()) {
    const { author, chatId } = action.payload;
    if (author === 'Bot') {
      store.dispatch(setUpdatChatsIds(+chatId));

      setTimeout(() => {
        store.dispatch(deleteUpdatedId(+chatId));
      }, 2000);
    }
  }
  return next(action);
};

export default botAnswer;