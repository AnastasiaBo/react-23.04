import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import FormMessage from './components/FormMessage';

const story = storiesOf('Components', module);
const theme = createMuiTheme({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
});

const BaseDecorator = storyFn => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {storyFn()}
    </ThemeProvider>
  </BrowserRouter>
);

story.addDecorator(withInfo);
story.addDecorator(withKnobs);
story.addDecorator(BaseDecorator);

story
  .add('Header', () => {
    return (
      <div>
        <Header chatName={text('ChatName', 'Чат из сторибука')} />
      </div>
    );
  })
  .add('FormMessage', () => <FormMessage addNewMessage={action('Add new message')} />);