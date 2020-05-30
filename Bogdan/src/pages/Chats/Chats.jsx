import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import FormMessage from '../../components/FormMessage';
import Messages from '../../components/Messages/Messages';
import { getChatMessages } from '../../selectors/chatsSelectors';
import { addMessage } from '../../actions/chatsActions';

const muiStyles = theme => {
  return {
    paper: {
      marginTop: theme.spacing(7),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
};

const Chats = () => {
  const params = useParams();
  const messages = useSelector(store => getChatMessages(store, params));
  const dispatch = useDispatch();

  const addNewMessage = data => {
    const { chatId } = params;
    dispatch(addMessage({ ...data, chatId }));
  };

  return (
    <Box p={3} mt={2} flexGrow={1}>
      <Messages messages={messages} />
      <FormMessage addNewMessage={addNewMessage} />
    </Box>
  );
};

Chats.defaultProps = {
  messages: [],
};

export default memo(withStyles(muiStyles)(Chats));