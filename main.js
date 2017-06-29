
$("select").change( function() {
  console.log($(this).val());
  let selectedUser = $(this).val();
//Without promises, we kick off the chain of events, but have to navigate from file to file to see what happens next
//With Promises, all the execution of functions in the order we want/need is contained here in one place, making it easier to understand the sequence of events
  SongFaves.UserFactory.getUsers(selectedUser)
  .then( function(dataFromGetUsers) {
  	return SongFaves.FavesFactory.getFaves(dataFromGetUsers);
	})
	.then( function(dataFromGetFaves) {
		// do something with the data
		SongFaves.DomStuff.listFaves(selectedUser, dataFromGetFaves)
	})
	.catch( function(err) {
		console.log("Oops, there was an error:", err.statusText);
	});
});
