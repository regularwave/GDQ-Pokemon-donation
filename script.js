function pokeGen() {
    (async () => {
        let pokeA;
        let pokeB;
        let dexMin = 1;
        let dexMax = 905;
        var userDonAmt = document.getElementById("num_don_amt").value;
        var userIncPoke = document.getElementById("num_inc_poke").value;

        const getData = async (a) => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + a + "/");
            const data = await response.json();
            return data;
        };

        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
        }

        pokeA = await getData(userIncPoke);
        pokeB = await getData(userDonAmt - userIncPoke);
        // pokeA = await getData(getRandomIntInclusive(dexMin, dexMax));
        // pokeB = await getData(getRandomIntInclusive(dexMin, dexMax));
        // console.log(pokeA);
        // pokeB = await getData(905 - pokeA.id);

        document.getElementsByClassName('poke_one_info')[0].innerHTML = "#" + pokeA.id + " " + pokeA.name;
        document.getElementsByClassName('poke_one_sprite')[0].innerHTML = '<img src="' + pokeA.sprites.front_default + '" />';
        document.getElementsByClassName('poke_two_info')[0].innerHTML = "#" + pokeB.id + " " + pokeB.name;
        document.getElementsByClassName('poke_two_sprite')[0].innerHTML = '<img src="' + pokeB.sprites.front_default + '" />';
        document.getElementsByClassName('total_donation')[0].innerHTML = "Donation amount: $" + (pokeA.id + pokeB.id) + "!";
    })();
}