import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Header from '../Header/Header';
import ChatList from '../ChatList/ChatList';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      marginTop: theme.spacing(8),
    },
  }));

const Layout =({ children }) => {
    const classes = useStyles();
    return (
        <>
        <Header />
        <main className={classes.root}>
            <ChatList ownProps='мой проп'/>
            { children }
            </main>
            </>
    )
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Layout;