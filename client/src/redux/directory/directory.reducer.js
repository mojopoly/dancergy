//Flamingo Fun Fanny Pack
// Emerald Dream Shoulder Bag

// Peek-A-Boo Phone Holder Garter (lace)
// Gold Gang Fanny Pack
// Sleek & Sexy Snake Waist Bag
const INITIAL_STATE = {
  sections: [
    {
      title: 'Flamingo Fun',
      imageUrl: 'https://i.imgur.com/0Uf9C1M.png',
      id: 1,
      linkUrl: 'shop/flamingo-fun'
    },
    {
      title: 'Emerald Dream',
      imageUrl: 'https://i.imgur.com/PvIb5Od.png',
      id: 2,
      linkUrl: 'shop/emerald-dream-shoulder-bag'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
