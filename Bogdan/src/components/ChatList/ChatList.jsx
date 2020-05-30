import React, { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link, useHistory } from 'react-router-dom';
import { getAllChats, getChatUpdatedIds } from '../../selectors/chatsSelectors';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },

  logo: {
    marginRight: 'auto',
    marginLeft: theme.spacing(1),
  },

  paper: {
    color: theme.palette.text.primary,
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  itemRoot: {
    position: 'relative',
    whiteSpace: 'pre-line',
  },

  link: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: theme.zIndex.appBar,
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(3, 2),
  },

  toolbarClose: {
    justifyContent: 'flex-start',
  },

  footerList: {
    marginTop: 'auto',
    marginBottom: theme.spacing(5),
  },

  active: {
    color: 'red',
  },
}));

const ChatList = props => {
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    history.push('/chat/1');
  };

  return (
    <Drawer
      variant="permanent"
      className={cx(classes.drawer, classes.drawerOpen)}
      classes={{
        paper: cx(classes.paper, classes.drawerOpen),
      }}
    >
      <Link to="/" key="home-page">
        <ListItem
          classes={{
            root: classes.itemRoot,
          }}
          button
        >
          <ListItemIcon>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
      </Link>
      <List disablePadding>
        {props.chats.map(({ id, title, to }) => (
          <Link to={to} key={title}>
            <ListItem
              classes={{
                root: classes.itemRoot,
              }}
              className={cx({ [classes.active]: props.chatUpdatedIds.includes(id) })}
              button
            >
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText>{title}</ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
      <List className={classes.footerList} disablePadding>
        {['Настройки', 'Помощь'].map((text, index) => (
          <ListItem
            classes={{
              root: classes.itemRoot,
            }}
            button
            key={text}
          >
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItem>
        ))}
        <Link to="/about" key="about-page">
          <ListItem
            classes={{
              root: classes.itemRoot,
            }}
            button
          >
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText>About</ListItemText>
          </ListItem>
        </Link>
        <ListItem
          key="logout-btn"
          classes={{
            root: classes.itemRoot,
          }}
          button
          onClick={logout}
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText>Выйти</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

const mapStateToProps = store => ({
  chats: getAllChats(store),
  chatUpdatedIds: getChatUpdatedIds(store),
});

export default compose(connect(mapStateToProps), memo)(ChatList);