import React from 'react';
import './App.scss';
import { Navigation } from './components/navigation/navigation'
import { Logo } from './views/logo'

export class App extends React.Component {
  render() {
    return (
      <>
        <Navigation/>
        {/* <Logo />
        <h1>Bhanu</h1> */}
      </>
    )
  }
}
