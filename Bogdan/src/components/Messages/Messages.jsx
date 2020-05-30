import React from 'react';
import PropTypes from 'prop-types';
import { Container, List } from '@material-ui/core';
import MessageItem from '../MessageItem/MessageItem';

const listStyles = {
  border: '1px solid #333',
  borderRadius: 3,
  minHeight: 300,
};

const Messages = ({ messages }) => {
  return (
    <Container maxWidth="sm" style={listStyles}>
      <List>
        {messages.map(({ text, author }, index) => (
          <MessageItem key={index} text={text} author={author} />
        ))}
      </List>
    </Container>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};

export default Messages;