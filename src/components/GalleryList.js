import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryList = (props) => {

    const galleryDOM = props.sendGalleryList.map((gallery, index) => {
        return (
            <GalleryItem key={ gallery.id } galleryItem={ gallery } index={ index }></GalleryItem>
        );
    });
    
    return(
        <div className="container my-3">
            <div className="row">
                <div className="col-12">
                    <ul className="gallery-item">
                        { galleryDOM }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GalleryList;