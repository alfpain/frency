angular.module('starter.services', [])


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'La Torre',
    face: 'http://upload.wikimedia.org/wikipedia/commons/thumb/8/84/EAN13.svg/220px-EAN13.svg.png',
    producto: "https://quesaber.files.wordpress.com/2013/11/pollo.jpg",
    oferta: "2x1",
      
      terminos: "Terminos y condiciones"
  }, {
    id: 1,
    name: 'La Torre',
      oferta: "-20%",
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'La Torre',

    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  ,
oferta: "Segundo Plato 1/2"
  
  },
    {
    id: 3,
    name: 'La Torre',
       oferta: "gratis en compra de",
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 4,
    name: 'La Torre',
   oferta: "-10%",
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
      /*
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
      */
      
  };
})


.factory('LaTorre', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cupones = [{
    id: "supermercado",
    name: 'Supermercado',
      terminos: "Terminos y condiciones"
  }, {
    id: "restaurantes",
    name: 'Resturantes',
      oferta: "-20%",
  },{
    id: "moda",
    name: 'Moda',

    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  
  },
    {
    id: "entretenimiento",
    name: 'Entretenimiento',
  }, {
    id: "electronicos",
    name: 'Electronicos',
   oferta: "-10%",
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }
, {
    id: "otros",
    name: 'Otros',
   oferta: "-10%",
  } ];

  return {
    all: function() {
      return cupones;
    },
      /*
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
      */
      
  };
});







