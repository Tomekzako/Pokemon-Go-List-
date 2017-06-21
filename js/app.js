$(function () {

    var bulbasaurUrl = 'https://pokeapi.co/api/v2/pokemon/1/';
    var charmanderUrl = 'https://pokeapi.co/api/v2/pokemon/4/';
    var squirtleUrl = 'https://pokeapi.co/api/v2/pokemon/7/';
    var caterpieUrl = 'https://pokeapi.co/api/v2/pokemon/10/';
    var weedleUrl = 'https://pokeapi.co/api/v2/pokemon/13/';
    var pidgeyUrl = 'https://pokeapi.co/api/v2/pokemon/16/';
    var rattataUrl = 'https://pokeapi.co/api/v2/pokemon/19/';
    var fearowUrl = 'https://pokeapi.co/api/v2/pokemon/22/';
    var pikachuUrl = 'https://pokeapi.co/api/v2/pokemon/25/';
    var sandslashUrl = 'https://pokeapi.co/api/v2/pokemon/28/';


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
    let $rattata = $('.rattata');
    let $fearow = $('.fearow');
    let $pikachu = $('.pikachu');
    let $sandslash = $('.sandslash');

    /* Pokemons TYPE */
    let $grass = $('.grassBtn');
    let $poison = $('.poisonBtn');
    let $fire = $('.fireBtn');
    let $water = $('.waterBtn');
    let $bug = $('.bugBtn');
    let $normal = $('.normalBtn');
    let $flying = $('.flyingBtn');
    let $electric = $('.electricBtn');
    let $ground = $('.groundBtn');

    /* Pokemons HP */
    let $bulb__hp = $('.bulb--hp');
    let $charm__hp = $('.charm--hp');
    let $squirtle__hp = $('.squirtle--hp');
    let $caterpie__hp = $('.caterpie--hp');
    let $weedle__hp = $('.weedle--hp');
    let $pidgey__hp = $('.pidgey--hp');
    let $rattata__hp = $('.rattata--hp');
    let $fearow__hp = $('.fearow--hp');
    let $pikachu__hp = $('.pikachu--hp');
    let $sandslash__hp = $('.sandslash--hp');

    /* Pokemons WEIGHT */
    let $bulb__weight = $('.bulb--weight');
    let $charm__weight = $('.charm--weight');
    let $squirtle__weight = $('.squirtle--weight');
    let $caterpie__weight = $('.caterpie--weight');
    let $weedle__weight = $('.weedle--weight');
    let $pidgey__weight = $('.pidgey--weight');
    let $rattata__weight = $('.rattata--weight');
    let $fearow__weight = $('.fearow--weight');
    let $pikachu__weight = $('.pikachu--weight');
    let $sandslash__weight = $('.sandslash--weight');

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
    });

    $('.fullScreen').on('click', function () {
        $('.fullScreen').css('display', 'none');
        $('.newContainer__type a').removeAttr('class').empty();
        $('.newContainer__type--sec a').removeAttr('class').empty();
    });



    /* First pokemon */
    $.ajax({


        url: bulbasaurUrl
    }).done(function (response) {

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

        $charm.text(ans.name);
        $fire.text(ans.types[0].type.name);
        $charm__hp.text("HP: " + ans.stats[5].base_stat);
        $charm__weight.text("WEIGHT: " + ans.weight);

        $(".card:eq( 1 )").on('click', function () {
            $('.fullScreen').css('display', 'block');
            $newH1.text(ans.name);
            $('.newContainer__height').text(ans.height);
            $('.newContainer__weight').text(ans.weight);
            $('.newContainer__abilities').text(ans.abilities[0].ability.name + ", " + ans.abilities[1].ability.name);
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
    }).done(function (ans) {
        $squirtle.text(ans.name);
        $water.text(ans.types[0].type.name);
        $squirtle__hp.text("HP: " + ans.stats[5].base_stat);
        $squirtle__weight.text("WEIGHT: " + ans.weight);

        $(".card:eq( 2 )").on('click', function () {
            $('.fullScreen').css('display', 'block');
            $newH1.text(ans.name);
            $('.newContainer__height').text(ans.height);
            $('.newContainer__weight').text(ans.weight);
            $('.newContainer__abilities').text(ans.abilities[0].ability.name + ", " + ans.abilities[1].ability.name);
            $('.speed').text(ans.stats[0].base_stat);
            $('.special-defense').text(ans.stats[1].base_stat);
            $('.special-attack').text(ans.stats[2].base_stat);
            $('.defense').text(ans.stats[3].base_stat);
            $('.attack').text(ans.stats[4].base_stat);
            $('.stats__hp').text(ans.stats[5].base_stat);
            $('.newContainer__type a').addClass("waterBtn").text(ans.types[0].type.name);
            setImg("images/Squirtle.png");
        });
    }).fail(function (error) {
        console.log(error);
    });


    /* Fourth pokemon */
    $.ajax({


        url: caterpieUrl
    }).done(function (response) {
        $caterpie.text(response.name);
        $bug.text(response.types[0].type.name);
        $caterpie__hp.text("HP: " + response.stats[5].base_stat);
        $caterpie__weight.text("WEIGHT: " + response.weight);

        $(".card:eq( 3 )").on('click', function () {
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
            $('.newContainer__type a').addClass("bugBtn").text(response.types[0].type.name);
            setImg("images/caterpie.png");
        });
    }).fail(function (error) {
        console.log(error);
    });


    /* Fifth pokemon */
    $.ajax({


        url: weedleUrl
    }).done(function (response) {

        $weedle.text(response.name);
        $poison.text(response.types[0].type.name);
        $bug.text(response.types[1].type.name);
        $weedle__hp.text("HP: " + response.stats[5].base_stat);
        $weedle__weight.text("WEIGHT: " + response.weight);

        $(".card:eq( 4 )").on('click', function () {
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
            $('.newContainer__type a').addClass("bugBtn").text(response.types[1].type.name);
            $('.newContainer__type--sec a').addClass("poisonBtn").text(response.types[0].type.name);
            setImg("images/Weedle.png");
        });
    }).fail(function (error) {
        console.log(error);
    });

    /* Sixth pokemon */
    $.ajax({


        url: pidgeyUrl
    }).done(function (response) {

        $pidgey.text(response.name);
        $normal.text(response.types[0].type.name);
        $flying.text(response.types[1].type.name);
        $pidgey__hp.text("HP: " + response.stats[5].base_stat);
        $pidgey__weight.text("WEIGHT: " + response.weight);

        $(".card:eq( 5 )").on('click', function () {
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
            $('.newContainer__type a').addClass("flyingBtn").text(response.types[0].type.name);
            $('.newContainer__type--sec a').addClass("normalBtn").text(response.types[1].type.name);
            setImg("images/pidgey.png");
        });

    }).fail(function (error) {
        console.log(error);
    });

    /* Seventh pokemon */
    $.ajax({


        url: rattataUrl
    }).done(function (response) {

        $rattata.text(response.name);
        $normal.text(response.types[0].type.name);
        $rattata__hp.text("HP: " + response.stats[5].base_stat);
        $rattata__weight.text("WEIGHT: " + response.weight);

        $(".card:eq( 6 )").on('click', function () {
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
            $('.newContainer__type a').addClass("normalBtn").text(response.types[0].type.name);
            setImg("images/Rattata.png");
        });

    }).fail(function (error) {
        console.log(error);
    });

    /* Eighth pokemon */
    $.ajax({


        url: fearowUrl
    }).done(function (response) {

        $fearow.text(response.name);
        $normal.text(response.types[1].type.name);
        $flying.text(response.types[0].type.name);
        $fearow__hp.text("HP: " + response.stats[5].base_stat);
        $fearow__weight.text("WEIGHT: " + response.weight);

        $(".card:eq( 7 )").on('click', function () {
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
            $('.newContainer__type a').addClass("flyingBtn").text(response.types[0].type.name);
            $('.newContainer__type--sec a').addClass("normalBtn").text(response.types[1].type.name);
            setImg("images/Fearow.png");
        });

    }).fail(function (error) {
        console.log(error);
    });


    /* Ninth pokemon */
    $.ajax({


        url: pikachuUrl
    }).done(function (response) {

        $pikachu.text(response.name);
        $electric.text(response.types[0].type.name);
        $pikachu__hp.text("HP: " + response.stats[5].base_stat);
        $pikachu__weight.text("WEIGHT: " + response.weight);

        $(".card:eq( 8 )").on('click', function () {
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
            $('.newContainer__type a').addClass("electricBtn").text(response.types[0].type.name);
            setImg("images/Pikachu.png");
        });

    }).fail(function (error) {
        console.log(error);
    });

    /* Tenth pokemon */
    $.ajax({


        url: sandslashUrl
    }).done(function (response) {

        $sandslash.text(response.name);
        $ground.text(response.types[0].type.name);
        $sandslash__hp.text("HP: " + response.stats[5].base_stat);
        $sandslash__weight.text("WEIGHT: " + response.weight);

        $(".card:eq( 9 )").on('click', function () {
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
            $('.newContainer__type a').addClass("groundBtn").text(response.types[0].type.name);
            setImg("images/Sandslash.png");
        });

    }).fail(function (error) {
        console.log(error);
    });




});