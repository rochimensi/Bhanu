import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

export default class ScrollContainer extends React.Component<
    {scrollAxis?: "vertical" | "horizontal" | undefined}, 
    {scrollContainer?: React.ReactNode}
> {
    static defaultProps = {
        scrollAxis: 'vertical',
    };

    scrollContainer: any
    
    constructor(props: any) {
        super(props);
        this.state = {
            scrollContainer: null,
        };
        this.scrollContainer = React.createRef();
    }

    componentDidMount() {
        this.setState({ scrollContainer: this.scrollContainer.current });
    }

    render() {
        return (
            <div className="scroll-container" ref={this.scrollContainer}>
                <ParallaxProvider
                    scrollContainer={this.state.scrollContainer}
                    scrollAxis={this.props.scrollAxis}
                >
                    {this.props.children}
                </ParallaxProvider>
            </div>
        );
    }
}