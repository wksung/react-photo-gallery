import React from 'react';
import '../css/GalleryItem.css';

const GalleryItem = (props) => {
    return (
        <li className="gallery-item">
            <img className="w-100" src={ props.galleryItem.urls.regular } alt={ props.galleryItem.alt_description }></img>
        </li>
    );
};

export default GalleryItem;