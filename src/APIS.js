export async function fetchPokemonData(callback) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')

        const data = await res.json();
        callback(data);
        console.log('\n\n fetchPokemonData success: ', data);
    } catch (error) {
        console.log('\n\n fetchPokemonData error: ', error);
        callback(null);
    }
}

export async function fetchSinglePokemonData(url, callback) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    try {
        const res = await fetch(url)

        const data = await res.json();
        callback(data);
        console.log('\n\n fetchSinglePokemonData success: ', data);
    } catch (error) {
        console.log('\n\n fetchSinglePokemonData error: ', error);
        callback(null);
    }
}