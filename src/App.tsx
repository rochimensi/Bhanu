import React from 'react';
import './App.scss';
import { Navigation } from './components/navigation/navigation'
import { Hero } from './views/hero'
import { Section } from './views/section';
import { Intro } from './views/intro';
import { Carousel } from './components/carousel';
import { Header } from './components/header';
import { Divider } from './views/divider';
import { LineLabel } from './views/line-label';

export class App extends React.Component {
  render() {
    return (
      <>
        <Navigation/>
        <Header />
        <Hero />
        <LineLabel text="Mar del Plata - AR" top="50%" width="300px"/>
        <LineLabel text="Turnos +54 223 6873919" top="54%" width="350px" />
        <Section>
          <Intro />
          <Carousel />
        </Section>
        <Divider />
        <Section className="section--about">
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
