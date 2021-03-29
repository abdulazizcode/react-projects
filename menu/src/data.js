const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: "https://www.pngitem.com/pimgs/m/214-2142506_transparent-plate-of-food-png-health-bowl-png.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: "https://media3.s-nbcnews.com/j/streams/2014/October/141002/2D274906915359-today-plates-14101-tease.fit-760w.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFtgQnuyoRicePmSx0FOwwoTP-_j4yUjtG6d4th2GYmfFBtGXSjSBY4fDqaaSH0mWfphI&usqp=CAU",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu7mQb1ypYch3ma3R0BEI4axrmO5lFAtvjKaaxT22GixTOtYAGRyPiK1kbSOHMAHkZx4k&usqp=CAU",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: "https://i.pinimg.com/originals/e1/e0/8a/e1e08af3f720d22b690c2323c50e702d.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img:"data:image/jpeg;base64,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",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: "https://www.clipartkey.com/mpngs/m/12-120880_transparent-healthy-food-clipart-food-on-plate-png.png",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: 'https://i.pinimg.com/originals/3a/d5/30/3ad530542f627baf5228e306a14ac40a.jpg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: 'https://www.pngkit.com/png/full/74-746977_fully-cooked-meal-with-healthy-salmon-salmon.png',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
export default menu;