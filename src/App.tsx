import React from 'react';
import './App.scss';
import { Navigation } from './components/navigation/navigation'
import { Header } from './components/header'
import { Hero } from './views/hero'

export class App extends React.Component {
  render() {
    return (
      <>
        <Navigation/>
        {/* <Header /> */}
        <Hero /> 
        {/* <div style={{backgroundColor: 'white'}}> */}
        <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
        {/* </div> */}
      </>
    )
  }
}
