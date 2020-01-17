import ShopActionTypes from './shop.types'

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDTE_COLLECTIONS,
  payload: collectionsMap
})