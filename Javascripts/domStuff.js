'use strict';

const domStuff = Object.create(null);
let $favesContainer = $("#fave-songs");

domStuff.listFaves = (user, faves) => {
  console.log("faves from listFaves", faves);
  $favesContainer.append(`<h2>${user}'s favorite songs are:</h2>`);
  faves.forEach( (song) => {
    $favesContainer.append(`<h4>"${song.title}" by ${song.artist}</h4>`);
  });
};

module.exports = domStuff;


