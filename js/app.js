$(function () {

    var bulbasaurUrl = 'http://pokeapi.co/api/v2/pokemon/1/';
    var charmanderUrl = 'http://pokeapi.co/api/v2/pokemon/4/';
    var squirtleUrl = 'http://pokeapi.co/api/v2/pokemon/7/';
    var caterpieUrl = 'http://pokeapi.co/api/v2/pokemon/10/';
    var weedleUrl = 'http://pokeapi.co/api/v2/pokemon/13/';


    let $section__h1 = $('.section__h1');
    let $col5 = $('.col5');

    let $bulb = $('.bulb');
    let $charm = $('.charm');
    let $squirtle = $('.squirtle');
    let $caterpie = $('.caterpie');
    let $weedle = $('.weedle');


    let $grass = $('.grassBtn');
    let $poison = $('.poisonBtn');
    let $fire = $('.fireBtn');
    let $water = $('.waterBtn');
    let $bug = $('.bugBtn');


    let $bulb__hp = $('.bulb--hp');
    let $charm__hp = $('.charm--hp');
    let $squirtle__hp = $('.squirtle--hp');
    let $caterpie__hp = $('.caterpie--hp');
    let $weedle__hp = $('.weedle--hp');

    let $bulb__weight = $('.bulb--weight');
    let $charm__weight = $('.charm--weight');
    let $squirtle__weight = $('.squirtle--weight');
    let $caterpie__weight = $('.caterpie--weight');
    let $weedle__weight = $('.weedle--weight');


    $.ajax({


        url: bulbasaurUrl
    }).done(function (response) {
        console.log(response);
        $bulb.text(response.name);
        $grass.text(response.types[1].type.name);
        $poison.text(response.types[0].type.name);
        $bulb__hp.text("HP: " + response.stats[5].base_stat);
        $bulb__weight.text("WEIGHT: " + response.weight);
    }).fail(function (error) {
        console.log(error);
    });




    $.ajax({


        url: charmanderUrl
    }).done(function (response) {
        console.log(response);
        $charm.text(response.name);
        $fire.text(response.types[0].type.name);
        $charm__hp.text("HP: " + response.stats[5].base_stat);
        $charm__weight.text("WEIGHT: " + response.weight);
    }).fail(function (error) {
        console.log(error);
    });



    $.ajax({


        url: squirtleUrl
    }).done(function (response) {
        console.log(response);
        $squirtle.text(response.name);
        $water.text(response.types[0].type.name);
        $squirtle__hp.text("HP: " + response.stats[5].base_stat);
        $squirtle__weight.text("WEIGHT: " + response.weight);
    }).fail(function (error) {
        console.log(error);
    });


    $.ajax({


        url: caterpieUrl
    }).done(function (response) {
        console.log(response);
        $caterpie.text(response.name);
        $bug.text(response.types[0].type.name);
        $caterpie__hp.text("HP: " + response.stats[5].base_stat);
        $caterpie__weight.text("WEIGHT: " + response.weight);
    }).fail(function (error) {
        console.log(error);
    });


    $.ajax({


        url: weedleUrl
    }).done(function (response) {
        console.log(response);
        $weedle.text(response.name);
        $poison.text(response.types[0].type.name);
        $bug.text(response.types[1].type.name);
        $weedle__hp.text("HP: " + response.stats[5].base_stat);
        $weedle__weight.text("WEIGHT: " + response.weight);
    }).fail(function (error) {
        console.log(error);
    });




});