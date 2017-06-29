{
  const favesFactory = Object.create(null);

  favesFactory.getFaves = function(user) {
    return new Promise( function(resolve, reject) {
      $.ajax({
        url: `data/songs-${user.id}.json`
      })
      .done( function(data) {
        resolve(data.songs)
        // SongFaves.DomStuff.listFaves(user, data.songs)
      });
    });
  }
  
  window.SongFaves = window.SongFaves || {}
  window.SongFaves.FavesFactory = favesFactory;
}