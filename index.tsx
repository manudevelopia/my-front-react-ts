import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import { Container, Content, Section } from 'rbx';
import 'rbx/index.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <Section>
        <Container>
          <Header></Header>
        </Container>
      </Section>
    );
  }
}

render(<App />, document.getElementById('root'));
