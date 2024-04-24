function pokeGen() {
    (async () => {
        let pokeA;
        let pokeB;
        var userDonAmt = document.getElementById("num_don_amt").value;
        var userIncPoke = document.getElementById("num_inc_poke").value;

        const getData = async (a) => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + a + "/");
            const data = await response.json();
            return data;
        };

        pokeA = await getData(userIncPoke);
        pokeB = await getData(userDonAmt - userIncPoke);

        document.getElementsByClassName('poke_one_info')[0].innerHTML = "#" + pokeA.id + " " + pokeA.name;
        document.getElementsByClassName('poke_one_sprite')[0].innerHTML = '<img src="' + pokeA.sprites.front_default + '" />';
        document.getElementsByClassName('poke_two_info')[0].innerHTML = "#" + pokeB.id + " " + pokeB.name;
        document.getElementsByClassName('poke_two_sprite')[0].innerHTML = '<img src="' + pokeB.sprites.front_default + '" />';
        document.getElementsByClassName('total_donation')[0].innerHTML = "Donation amount: $" + (pokeA.id + pokeB.id) + "!";
    })();
}