
function getPokemonInfo(id) {
  $.ajax({
    url: "http://pokeapi.co/api/v2/pokemon/" + id + "/",
    method: "GET",
    success: showFeedback,
    error: function (err) {
      console.log(err);
    },
  });
}

$("#pokeButton").on('click', function(){
  var random =  Math.floor(Math.random()*150);
  getPokemonInfo(random);
});

function showFeedback (getResponse) {
  console.log('success');
  console.log(getResponse);
  const newPokemon = `
      <div class="col-sm-2">
        <div class="thumbnail">
          <h3>Name: ${getResponse.name}
          <p>Id: ${getResponse.id}</p>
          </h3>
          <img src=" ${getResponse.sprites.front_default}">
        </div>
      </div>
  `;


  $('#pokeInfo').append(newPokemon);
}
