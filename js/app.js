$(function () {

    var bulbasaurUrl = 'http://pokeapi.co/api/v2/pokemon/1/';
    var charmanderUrl = 'http://pokeapi.co/api/v2/pokemon/4/';
    var squirtleUrl = 'http://pokeapi.co/api/v2/pokemon/7/';
    var caterpieUrl = 'http://pokeapi.co/api/v2/pokemon/10/';
    var weedleUrl = 'http://pokeapi.co/api/v2/pokemon/13/';
    var pidgeyUrl = 'http://pokeapi.co/api/v2/pokemon/16/';


    let $section__h1 = $('.section__h1');
    let $col5 = $('.col5');
    let $card = $('.card');

    /* Pokemons NAME */
    let $bulb = $('.bulb');
    let $charm = $('.charm');
    let $squirtle = $('.squirtle');
    let $caterpie = $('.caterpie');
    let $weedle = $('.weedle');
    let $pidgey = $('.pidgey');

    /* Pokemons TYPE */
    let $grass = $('.grassBtn');
    let $poison = $('.poisonBtn');
    let $fire = $('.fireBtn');
    let $water = $('.waterBtn');
    let $bug = $('.bugBtn');
    let $normal = $('.normalBtn');
    let $flying = $('.flyingBtn');

    /* Pokemons HP */
    let $bulb__hp = $('.bulb--hp');
    let $charm__hp = $('.charm--hp');
    let $squirtle__hp = $('.squirtle--hp');
    let $caterpie__hp = $('.caterpie--hp');
    let $weedle__hp = $('.weedle--hp');
    let $pidgey__hp = $('.pidgey--hp');

    /* Pokemons WEIGHT */
    let $bulb__weight = $('.bulb--weight');
    let $charm__weight = $('.charm--weight');
    let $squirtle__weight = $('.squirtle--weight');
    let $caterpie__weight = $('.caterpie--weight');
    let $weedle__weight = $('.weedle--weight');
    let $pidgey__weight = $('.pidgey--weight');



    /* First pokemon */
    $.ajax({


        url: bulbasaurUrl
    }).done(function (response) {
        console.log(response);
        $bulb.text(response.name);
        $grass.text(response.types[1].type.name);
        $poison.text(response.types[0].type.name);
        $bulb__hp.text("HP: " + response.stats[5].base_stat);
        $bulb__weight.text("WEIGHT: " + response.weight);

        function createDiv(data) {
            let $newDiv = $('<div>').addClass('fullScreen');
            let $return = $('<a href="#">').text("Back").addClass("btn btn-red");
            let $newContainer = $('<div>').addClass('newContainer');
            let $row = $('<div>').addClass('row');
            let $col12 = $('<div>').addClass('col-12');
            let $col7 = $('<div>').addClass('col-7');
            let $img = $('<img src="images/Bulbasaur.png">').addClass('mainImg');
            let $col5 = $('<div>').addClass('col-5');
            let $newH1 = $('<h1>').text(response.name);
            $('body').append($newDiv);
            $newDiv.append($newContainer);
            $newDiv.append($return);
            $newContainer.append($row);
            $row.append($col12);
            $col12.append($newH1);
            $row.append($col7);
            $col7.append($img);
            $row.append($col5);


            $return.on('click', function () {
                $newDiv.remove();
            })
        }

        $card.on('click', function () {
            createDiv();
        })

    }).fail(function (error) {
        console.log(error);
    });



    /* Second pokemon */
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


    /* Third pokemon */
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


    /* Fourth pokemon */
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


    /* Fifth pokemon */
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

    /* Sixth pokemon */
    $.ajax({


        url: pidgeyUrl
    }).done(function (response) {
        console.log(response);
        $pidgey.text(response.name);
        $normal.text(response.types[0].type.name);
        $flying.text(response.types[1].type.name);
        $pidgey__hp.text("HP: " + response.stats[5].base_stat);
        $pidgey__weight.text("WEIGHT: " + response.weight);
    }).fail(function (error) {
        console.log(error);
    });




});