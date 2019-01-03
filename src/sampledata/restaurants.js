const restaurants = [
  {
    name: 'Chuys',
    image:
      'https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    tagline: 'Amazing New Mexican Cuisine',
    desc:
      'Tex what? While we refer to our food as "Tex-Mex", our menu is made up of a combination of flavors, with recipes and ingredients from across New Mexico, Mexican border towns, the Rio Grande Valley, deep South Texas, Austin and beyond',
    rating: 5,
    dishes: [
      {
        name: 'Tacos',
        desc: 'Yummy pork tacos',
        image:
          'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80'
      },
      {
        name: 'Salsa',
        desc: 'Freshly made, spicy salsa',
        image:
          'https://images.unsplash.com/photo-1514518189759-94d8ee01ecf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
      },
      {
        name: 'Margarita',
        desc: 'Top shelf, classic margarita',
        image:
          'https://images.unsplash.com/photo-1541976076758-347942db1975?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80'
      }
    ],
    id: 1
  },
  {
    name: 'Pinthouse Pizza',
    image:
      'https://images.unsplash.com/photo-1511516412963-801b050c92aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    tagline: 'Great pizza and cold beer',
    desc:
      'Pinthouse Pizza is a craft brewpub. Our goal: to serve award-winning beer and amazing pizza in a warm and inviting atmosphere.',
    rating: 5,
    dishes: [
      {
        name: 'Dish 1',
        description:
          'This is the first dish for the restaurant Pinthouse Pizza',
        rating: '5 Stars'
      },
      {
        name: 'Dish 2',
        description:
          'This is the second dish for the restaurant Pinthouse Pizza',
        rating: '3 Stars'
      },
      {
        name: 'Dish 3',
        description:
          'This is the third dish for the restaurant Pinthouse Pizza',
        rating: '4 Stars'
      }
    ],
    id: 2
  },
  {
    name: 'Blue Corn Harvest',
    image:
      'https://images.unsplash.com/photo-1464219222984-216ebffaaf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    tagline: 'Farm to Table Mexican Food',
    desc:
      'Moderately priced, casual restaurant serving authentic Southwestern cuisine with locations in Cedar Park and Georgetown, Texas.',
    rating: 5,
    dishes: [
      {
        name: 'Dish 1',
        description:
          'This is the first dish for the restaurant Blue Corn Harvest',
        rating: '5 Stars'
      },
      {
        name: 'Dish 2',
        description:
          'This is the second dish for the restaurant Blue Corn Harvest',
        rating: '3 Stars'
      },
      {
        name: 'Dish 3',
        description:
          'This is the third dish for the restaurant Blue Corn Harvest',
        rating: '4 Stars'
      }
    ],
    id: 3
  },
  {
    name: "Eddie V's",
    image:
      'https://images.unsplash.com/photo-1533745807-618e4bd071f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
    tagline: 'Quality Steak & Seafood',
    desc:
      "Eddie V's is a prime quality seafood restaurant providing you with the finest fresh seafood & prime steaks. Join us for an exceptional dining experience.",
    rating: 5,
    dishes: [
      {
        name: 'Dish 1',
        description: 'This is the first dish for the restaurant Eddie Vs',
        rating: '5 Stars'
      },
      {
        name: 'Dish 2',
        description: 'This is the second dish for the restaurant Eddie Vs',
        rating: '3 Stars'
      },
      {
        name: 'Dish 3',
        description: 'This is the third dish for the restaurant Eddie Vs',
        rating: '4 Stars'
      }
    ],
    id: 4
  },
  {
    name: 'Black Star Coop',
    image:
      'https://images.unsplash.com/photo-1529502669403-c073b74fcefb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    tagline: 'Locally Owned Pub & Brewery',
    desc:
      'We take pride in being a cooperative brew pub located in Austin, Texas. Serving refreshing housemade, local craft beers on a seasonal rotation.',
    rating: 5,
    dishes: [
      {
        name: 'Dish 1',
        description:
          'This is the first dish for the restaurant Black Star Coop',
        rating: '5 Stars'
      },
      {
        name: 'Dish 2',
        description:
          'This is the second dish for the restaurant Black Star Coop',
        rating: '3 Stars'
      },
      {
        name: 'Dish 3',
        description:
          'This is the third dish for the restaurant Black Star Coop',
        rating: '4 Stars'
      }
    ],
    id: 6
  },
  {
    name: "Chi'lantro BBQ",
    image:
      'http://www.chilantrobbq.com/wp-content/uploads/2016/11/copy-of-fullsizerender-10-1.jpg',
    tagline: 'Korean Mexican Fusion',
    desc:
      "Chi'Lantro BBQ is a Korean Mexican fusion mobile truck and catering service which opened in Austin, Texas in 2010. Since then, the former food truck operation has opened four restaurants in the Austin area",
    rating: 5,
    dishes: [
      {
        name: 'Dish 1',
        description: 'This is the first dish for the restaurant Chilantro BBQ',
        rating: '5 Stars'
      },
      {
        name: 'Dish 2',
        description: 'This is the second dish for the restaurant Chilantro BBQ',
        rating: '3 Stars'
      },
      {
        name: 'Dish 3',
        description: 'This is the third dish for the restaurant Chilantro BBQ',
        rating: '4 Stars'
      }
    ],
    id: 7
  }
];

export default restaurants;
