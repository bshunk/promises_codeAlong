"use strict";

{
  const favesFactory = Object.create(null);

// Fat arrow functions, or "=>", means "function" in an ANONYMOUS FUNCTION ONLY
  favesFactory.getFaves = (user) => {
    return new Promise( (resolve, reject) => {
      $.ajax({
        url: `data/songs-${user.id}.json`
      })
      .done( (data) => {
        resolve(data.songs);
        // SongFaves.DomStuff.listFaves(user, data.songs)
      });
    });
  };
  
  window.SongFaves = window.SongFaves || {};
  window.SongFaves.FavesFactory = favesFactory;
}

// // 1 argument = no parenthesis
// let myFunc = greeting => greeting;

// // more than 1 arguemtn = parenthesis
// let myFunc = (greeting, buckets) => greeting;


