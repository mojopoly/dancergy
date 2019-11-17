import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => {
  //console.log(match);
  return(
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items.map((item, ...otherSectionProps) => 
          <CollectionItem key={item.id} item={item} {...otherSectionProps} />)
      }
    </div>
  </div>
)}

export default CollectionPreview;