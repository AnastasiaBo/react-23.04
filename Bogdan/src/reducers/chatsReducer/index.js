import { handleActions } from 'redux-actions';
import {
  getChatsSuccess,
  addNewMessage,
  setUpdatChatsIds,
  deleteUpdatedId,
  sendRequest,
} from '../../actions/chatsActions';

const initialState = { isFetching: false, chatsByIds: {}, chatsIds: [], updatedChatsIds: [] };

const reducer = handleActions(
  {
    [sendRequest]: state => ({ ...state, isFetching: true }),
    [getChatsSuccess]: (state, action) => ({ ...state, ...action.payload, isFetching: false }),
    [addNewMessage]: (state, { payload }) => ({
      ...state,
      chatsByIds: {
        ...state.chatsByIds,
        [payload.chatId]: {
          ...state.chatsByIds[payload.chatId],
          messages: [...state.chatsByIds[payload.chatId].messages, payload.id],
        },
      },
    }),
    [setUpdatChatsIds]: (state, { payload }) => ({
      ...state,
      updatedChatsIds: [...state.updatedChatsIds, payload],
    }),
    [deleteUpdatedId]: (state, { payload }) => ({
      ...state,
      updatedChatsIds: state.updatedChatsIds.filter(i => i !== payload),
    }),
  },
  initialState,
);

export default reducer;