import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import GalleryList from './GalleryList';
import unsplash from '../apis/unsplash';

class App extends React.Component{

    state = {
        searchTerm: [],
        galleryList: [],
        errorLog: ''
    }

    getSearchTerm = async (searchTerm) => {
        if(searchTerm !== ''){
            const response = await unsplash.get('/search/photos?per_page=9', {
                params: { query: searchTerm }
            });
    
            this.setState({ 
                searchTerm: this.state.searchTerm.concat(searchTerm),
                galleryList: this.state.galleryList.concat(response.data.results),
                errorLog: ''
            });
        }else{
            this.setState({ errorLog: 'Error: must type in a keyword!' });
        }
    }

    randomiseImg = (e) => {
        e.preventDefault();
        var arrayList = [];

        if(this.state.searchTerm.length === 0){
            this.setState({ errorLog: 'Error: there are no images to randomise!' });
        }else{
            while(arrayList.length < this.state.galleryList.length){
                var randomNum = Math.floor(Math.random() * this.state.galleryList.length);
                if(arrayList.indexOf(randomNum) === -1){
                    arrayList.push(randomNum);
                }   
            }
            const output = arrayList.map(i => this.state.galleryList[i]);
            this.setState({ 
                galleryList: output,
                errorLog: ''
            });
        }
    }

    saveGallery = (e) => {
        e.preventDefault();

        localStorage.setItem('myGallery', JSON.stringify(this.state.galleryList));
        localStorage.setItem('history', JSON.stringify(this.state.searchTerm));
        
        window.location.reload(true); 
    }

    loadGallery = (e) => {
        e.preventDefault();

        this.setState({ 
            searchTerm: JSON.parse(localStorage.getItem('history')),
            galleryList: JSON.parse(localStorage.getItem('myGallery'))
        });   
    }

    render(){
        return(
            <div>
                <NavBar 
                    searchTerms={ this.state.searchTerm } 
                    randomiseImg={ this.randomiseImg } 
                    errorLog = { this.state.errorLog }
                    saveGallery = { this.saveGallery }
                    loadGallery = { this.loadGallery }></NavBar>
                <SearchBar getSearchTerm = { this.getSearchTerm }></SearchBar>
                <GalleryList sendGalleryList = { this.state.galleryList }></GalleryList>
            </div>
        );
    };
};

export default App;