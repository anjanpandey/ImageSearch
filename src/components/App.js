import React from 'react';
import Unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    // initialize a state called images that will
    // eventually contain array of images
    state = {images: [] };
    // asynchronous request 
    onSearchSubmit = async (term) => {
        // make request to unsplash for pictures
        // second argument as an object is to configure request
      const response = await Unsplash.get('https://api.unsplash.com/search/photos', {
            params: {query: term}      
        });
        // set the state of images - cause our component to rerender
        // bind the data
        this.setState({images: response.data.results}); 
    }
    render() {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}


export default App;