//Flamingo Fun Fanny Pack
// Emerald Dream Shoulder Bag

// Peek-A-Boo Phone Holder Garter (lace)
// Gold Gang Fanny Pack
// Sleek & Sexy Snake Waist Bag
const INITIAL_STATE = {
  sections: [
    {
      title: 'Astral',
      imageUrl: 'https://i.imgur.com/0Uf9C1M.png',
      id: 1,
      linkUrl: 'shop/astral'
    },
    {
      title: 'Stellar',
      imageUrl: 'https://i.imgur.com/PvIb5Od.png',
      id: 2,
      linkUrl: 'shop/stellar'
    },
    {
      title: 'Halo',
      imageUrl: 'https://i.imgur.com/qIhTTMi.png',
      id: 3,
      linkUrl: 'shop/halo'
    },
    {
      title: 'Venus',
      imageUrl: 'https://i.imgur.com/H7F8ra3.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/venus'
    },
    {
      title: 'Starburst',
      imageUrl: 'https://i.imgur.com/QBSR542.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/starburst'
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
