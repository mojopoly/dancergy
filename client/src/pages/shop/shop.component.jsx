import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { Route } from 'react-router-dom';
import './shop.styles.scss';

const ShopPage = ({ match }) => {
  //console.log(match);
  return (
    <div className="shop-page">
      <Route  path={`${match.path}`} component={CollectionsOverview} />
      <Route  path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}; 

export default ShopPage;
