import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
    render() {       
    // react needs key to prevent rerendering of a component that's
    // already in DOM and no changes or identical / performance
    // assign key to the root element
    const images = this.props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });
    
    return (
            <div className="image-list">{images}</div>
       );
    }
}

export default ImageList;