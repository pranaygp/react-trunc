import React, { Component } from 'react'

class LongText extends Component {
    constructor(){
      super()
      this.state = {
        expanded: false
      }
    }

    truncatedText(){
      if(this.props.short && !this.state.expanded){
        return (
          <span>{this.props.short} <a onClick={() => this.setState({expanded: true}, state => console.log(this.state))}>Read More</a></span>
        )
      } else {
        return this.props.children
      }
    }

    render(){
        return (
          <p {...this.props}>
            {this.truncatedText()}
          </p>
        )
    }
}

export default LongText
