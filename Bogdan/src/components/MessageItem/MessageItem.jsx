import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    item: {},
    message: {
      maxWidth: '75%',
      border: 0,
      borderRadius: 12,
      boxShadow: theme.shadows[5],
      color: 'white',
      padding: theme.spacing(1, 2),
      backgroundColor: theme.palette.info.main,
    },
    left: {
      justifyContent: 'flex-start',
    },
    right: {
      justifyContent: 'flex-end',
    },
  };
});

const MessageItem = ({ author, text }) => {
  const classes = useStyles();

  return (
    <ListItem
      color="primary"
      className={cx(classes.item, {
        [classes.left]: author !== 'Bot',
        [classes.right]: author === 'Bot',
      })}
    >
      <Typography
        component="p"
        variant="body1"
        color="textPrimary"
        className={classes.message}
      >
        {text}
        <Typography variant="caption" display="block">
          {author}
        </Typography>
      </Typography>
    </ListItem>
  );
};

MessageItem.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MessageItem; 