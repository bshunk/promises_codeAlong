"use strict";

// Without Promises

const userFactory = Object.create(null);

userFactory.getUsers = (selectedUser) => {
  return new Promise ( (resolve, reject) => {
    $.ajax({
      url: "data/users.json"
    })
    .done( (data) => {
      let usersArr = data.users;
      let userData = usersArr.filter( (user) => {
        return user.name === selectedUser;
      })[0];
      resolve(userData);
    // SongFaves.FavesFactory.getFaves(userData);
    })
    .fail(reject);
  });
  window.SongFaves = window.SongFaves || {};
  window.SongFaves.UserFactory = userFactory;
};



module.exports = userFactory;