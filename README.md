# React Trunc

A React Component to truncate long pieces of text and add a "Read More" link at the end.

## Installation

1. `$ npm install --save react-trunc`

## Usage

```Javascript
import React, { Component } from 'react'
import LongText from 'react-trunc'

class Lorem extends Component{
  render(){
    return (
      <LongText short="Lorem ipsum dolor sit amet...">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </LongText>
    )
  }
}

export default Lorem
```

> The `short` attribute is used to render the short version of the text. When the "Read More" link is clicked, the entire length of the text is expanded.
