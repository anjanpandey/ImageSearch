import React from 'react';
// the class component that expects props from its parents
class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        // initialize the state
        this.state = {spans:0};
    }

    componentDidMount() {
        // load the individual image
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
       const height= this.imageRef.current.clientHeight;
       const spans = Math.ceil(height/10 + 1);
       this.setState({spans});
    };

    render() {
        // the following params are going to come from image
        // names should be the exact same
        const {description, urls } = this.props.image;
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img alt={description} 
                     src={urls.regular}
                     ref={this.imageRef} 
                />
            </div>
        );
    }
}

export default ImageCard;