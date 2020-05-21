import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

class Chats extends Component {
    componentDidMount() { }

    /*     state = {
            chats: {
                1: {
                    title: 'chats_1',
                    messages: [
                        {
                            text: 'привет, я бот из 1 чата',
                            author: 'Bot',
                        },
                    ],
                },
                2: {
                    title: 'chats_1',
                    messages: [
                        {
                            text: 'привет, я бот из 2 чата',
                            author: 'Bot',
                        },
                    ],
                },
            },
            messages: [
                { text: 'привет, я Бот', author: 'Bot' },
                { text: 'привет, я Человек', author: 'User' },
            ],
        };
    
        timer;
    
        componentDidUpdate(prevProps, prevState) {
            const {
                match: { params },
            } = this.props;
            const { chatId } = params;
            const { chats } = this.state;
            const messages = chats[chatId].messages;
            clearTimeout(this.timer);
            if (prevState.chats[chatId].messages.length !== messages.length) {
                if (messages[messages.length - 1].author !== 'Bot') {
                    this.timer = setTimeout(() => {
                        this.setState(({ chats }) => ({
                            chats: {
                                ...chats,
                                [chatId]: {
                                    ...chats[chatId],
                                    messages: [
                                        ...chats[chatId].messages,
                                        { text: 'привет, я БОТ, ответ на сообщение', author: 'Bot' },
                                    ],
                                },
                            },
                        }));
                    }, 1000);
                }
            }
        }
    
        get messages() {
            const { chats } = this.state;
            const {
                match: { params },
            } = this.props;
            const { chatId } = params;
    
            return chats[chatId].messages;
        } */

    addNewMessage = data => {
        const {
            addMessage,
            match: { params },
        } = this.props;
        const { chatId } = params;
        addMessage({ ...data, chatId });
    };

    render() {
        const { messages } = this.props;
        return (
            <Box p={3} mt={2} flexGrow={1}>
                <Messages messages={messages} />
                <FormMessage addNewMessage={this.addNewMessage} />
            </Box>
        );
    }
}

const mapStateToProps = (store, ownProps) => ({
    messages: getChatMessages(store, ownProps),
});

const mapDispatchToProps = {
    addMessage,
};

Chats.defaultProps = {
    messages: [],
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(muiStyles),
)(Chats);