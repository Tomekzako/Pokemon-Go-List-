$(function () {

    var bulbasaurUrl = 'http://pokeapi.co/api/v2/pokemon/1/';
    var charmanderUrl = 'http://pokeapi.co/api/v2/pokemon/4/';
    let $section__h1 = $('.section__h1');
    let $col5 = $('.col5');

    let $bulb = $('.bulb');
    let $charm = $('.charm');


    let $grass = $('.grassBtn');
    let $poison = $('.poisonBtn');
    let $fire = $('.fireBtn');


    let $hp = $('.hp');
    let $charm__hp = $('.charm--hp');


    $.ajax({


        url: bulbasaurUrl
    }).done(function (response) {
        console.log(response);
        $bulb.text(response.name);
        $grass.text(response.types[1].type.name);
        $poison.text(response.types[0].type.name);
        $hp.text(response.stats[5].base_stat);
    }).fail(function (error) {
        console.log(error);
    });




    $.ajax({


        url: charmanderUrl
    }).done(function (response) {
        console.log(response);
        $charm.text(response.name);
        $fire.text(response.types[0].type.name);
        $charm__hp.text(response.stats[5].base_stat);
    }).fail(function (error) {
        console.log(error);
    });




});