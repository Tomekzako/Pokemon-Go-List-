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

    console.log($card);

    let $img = $('<img>').addClass('mainImg');
    $('.newContainer__col7').append($img);

    function setImg(url) {
        $img.attr("src", url);
    }

    setImg("images/Bulbasaur.png");

    let $newH1 = $('<h1>');
    $('.newContainer__col12').append($newH1);



    let $return = $('<a href="#">').text("Back").addClass("btn btn-red");
    $('.newContainer__btn').append($return);


    $card.first().on('click', function () {
        $('.fullScreen').css('display', 'block');

    });

    $(".card:eq( 1 )").first().on('click', function () {
        $('.fullScreen').css('display', 'block');

    });

    $return.on('click', function () {
        $('.fullScreen').css('display', 'none');
        $('.newContainer__type a').removeAttr('class').empty();
        $('.newContainer__type--sec a').removeAttr('class').empty();
    })

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


        $card.first().on('click', function () {
            $('.fullScreen').css('display', 'block');
            $newH1.text(response.name);
            $('.newContainer__height').text(response.height);
            $('.newContainer__weight').text(response.weight);
            $('.newContainer__abilities').text(response.abilities[0].ability.name + ", " + response.abilities[1].ability.name);
            $('.speed').text(response.stats[0].base_stat);
            $('.special-defense').text(response.stats[1].base_stat);
            $('.special-attack').text(response.stats[2].base_stat);
            $('.defense').text(response.stats[3].base_stat);
            $('.attack').text(response.stats[4].base_stat);
            $('.stats__hp').text(response.stats[5].base_stat);
            $('.newContainer__type a').addClass("poisonBtn").text(response.types[0].type.name);
            $('.newContainer__type--sec a').addClass("grassBtn").text(response.types[1].type.name);
            setImg("images/Bulbasaur.png");
        });

    }).fail(function (error) {
        console.log(error);
    });



    /* Second pokemon */
    $.ajax({


        url: charmanderUrl
    }).done(function (ans) {
        console.log(ans);
        $charm.text(ans.name);
        $fire.text(ans.types[0].type.name);
        $charm__hp.text("HP: " + ans.stats[5].base_stat);
        $charm__weight.text("WEIGHT: " + ans.weight);
        $newH1.text(ans.name);

        $(".card:eq( 1 )").first().on('click', function () {
            $('.fullScreen').css('display', 'block');
            $newH1.text(ans.name);
            $('.height').text("HEIGHT: " + ans.height);
            $('.newContainer__weight').text("WEIGHT: " + ans.weight);
            $('.newContainer__abilities').text("ABILITIES: " + ans.abilities[0].ability.name + ", " + ans.abilities[1].ability.name);
            $('.speed').text(ans.stats[0].base_stat);
            $('.special-defense').text(ans.stats[1].base_stat);
            $('.special-attack').text(ans.stats[2].base_stat);
            $('.defense').text(ans.stats[3].base_stat);
            $('.attack').text(ans.stats[4].base_stat);
            $('.stats__hp').text(ans.stats[5].base_stat);
            $('.newContainer__type a').addClass("fireBtn").text(ans.types[0].type.name);
            setImg("images/charmander.png");
        });

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