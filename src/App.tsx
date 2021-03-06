import React from 'react';
import './App.scss';
import { Navigation } from './components/navigation/navigation'
import { Hero } from './views/hero'
import { Section } from './views/section';
import { Intro } from './views/intro';
import { Header } from './components/header';
import { Divider } from './views/divider';
import { LineLabel } from './views/line-label';
import { Services } from './views/services';

export class App extends React.Component {

  render() {
    return (
      <>
        <Navigation/>
        <Header />
        <Hero />
        {/* <LineLabel text="Mar del Plata - AR" top="87%" width="200px"/>
        <LineLabel text="Turnos +54 223 6873919" top="90%" width="250px" /> */}
        <Section>
          <Intro />
        </Section>
        <Divider />
        <Section className="section--about">
          <Services />
          <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
          <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
        </Section>
        <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
        <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
        <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
        <p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
      </>
    )
  }
}
