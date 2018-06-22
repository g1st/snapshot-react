import React, { Component } from 'react';

import Button from '../../Button';
import { Wrapper, FormContainer, Row, Name, Email, Message } from './styled';

class Form extends Component {
  state = {
    message: '',
    name: '',
    email: '',
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  // don't rerender on width change
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.message !== this.state.message ||
      nextState.name !== this.state.name ||
      nextState.email !== this.state.email
    );
  }

  handleResize = e => {
    const windowWidth = e.target.innerWidth;

    this.setState(() => ({
      width: windowWidth
    }));
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Comment was sent: ${this.state.message}`);
  }

  render() {
    return (
      <Wrapper>
        <FormContainer onSubmit={e => this.handleSubmit(e)}>
          <Row>
            <Name
              required
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
            <Email
              required
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
          </Row>
          <Message
            name="message"
            value={this.state.message}
            placeholder="Message"
            rows="8"
            onChange={e => this.handleChange(e)}
            required
          />
          <Button
            type="submit"
            big={this.state.width < 768}
            title="Send message"
          />
        </FormContainer>
      </Wrapper>
    );
  }
}

export default Form;
