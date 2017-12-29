import React, { Component, PropTypes } from 'react'
import Message from 'components/Message/Message.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const messageArrOne = [
  { msg: 'Higher Quality Connections.' },
  { msg: 'Find the people who are in your network who you\'re suppoosed to meet.' },
  {
    decision: {
      one: 'so this is just Linkedin?',
      two: 'hey let\'s get started'
    }
  }
]

const messageArrTwo = [
  { msg: 'Not quite! But you could think of it as' },
  { msg: 'a wrapper around Linkedin to help you find interesting people.' },
  {
    decision: {
      one: 'I\'ll check it out next time.',
      two: 'Sounds fun! let\'s do it'
    }
  }
]

const messageArrThree = [
  { msg: 'Not quite! But you could think of it as' },
  { msg: 'a wrapper around Linkedin to help you find interesting people.' },
  {
    decision: {
      one: 'I\'ll check it out next time.',
      two: 'Sounds fun! let\'s do it'
    }
  }
]

const SlideIn = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="slide"
  >
    {children}
  </CSSTransition>
);


class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.renderMessage = this.renderMessage.bind(this);
    this.state = { activeMessage: messageArrOne}
  }

  renderMessage(messageArr) {
    return messageArr.map((message) => {
      return (
        <Message
          messageContent={message.msg}
        />
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderMessage(this.state.activeMessage)}
      </div>
    )
  }
}

export default LandingPage
