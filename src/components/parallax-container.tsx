import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

export interface Props {
    children?: any
    scrollAxis?: any
    className?: any
}

const ParallaxContainer = ({ children, scrollAxis, className }: Props) => (
    <ParallaxProvider scrollAxis={scrollAxis}>
        <div className={scrollAxis}>
            <div className={className}>{children}</div>
        </div>
    </ParallaxProvider>
);

export default ParallaxContainer;