import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Home from '../Home';
import About from '../About';
import Chat from '../Chats';
import Layout from '../../components/Layout/Layout';
import EmptyPage from '../EmptyPage';
import { fetchChatsData } from '../../actions/chatsActions';

class RootRouter extends Component {
  componentDidMount() {
    const { fetchChatsData } = this.props;

   
    new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    }).then(res => {
      console.log(res);
    });

    
    fetchChatsData().then(i => {
      console.log(i);
    });
  }

  render() {
    const { open } = this.props;
    return (
      <Layout>
        <Backdrop open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/chats/:chatId" component={Chat} />
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = store => ({
  chats: store.chats,
  open: store.chats.isFetching,
});

const mapDispatchToProps = {
  fetchChatsData,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter);