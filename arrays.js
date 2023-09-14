/*
    In this file, we'll be making a new story
     about Doug, the Pokemon trainer.
*/

let backpack = [
    `poke ball` , `poke ball`, `potion`, `beef jerky`, `running shoes`
]

let pokemon = []

backpack.push(`oreos`)
backpack.push(`oreos`)

console.log(`after buying oreos, this is our backpack`)
console.log(backpack)

backpack.push(`pokedex`)
pokemon.push(`pikachu`)

console.log(`after meeting professor oak, our backpack and pokemon are:`)
console.log(backpack)
console.log(pokemon)

for (let i = 0; i < 4; i++) {
    pokemon.push(`pidgey`)
}

console.log(`after the pidgeys, our pokemon now are:`)
console.log(pokemon)

backpack.splice(3, 4)
console.log(`after the binge and the giveaway, backpack is now:`)
console.log(backpack)

let newPokemon = `Charizard`

pokemon.push(newPokemon)

console.log(`after catching charizard, our pokemon are now:`)
console.log(pokemon)

console.log(`here is my pikachu!`)
let cutestPokemon = pokemon[0]
console.log(cutestPokemon)

let clonedPidgeys = pokemon.slice(1, 5)
console.log(`here are your cloned pidgeys`)
console.log(clonedPidgeys)

console.log(`checking to make sure my pokemon are all still here:`)
console.log(pokemon)

backpack.unshift(`jynx statue`)
console.log(`backpack after adding the statue:`)
console.log(backpack)

let favPokemon = `Buttefree`
backpack.shift()
let lunch = pokemon.splice(3, 1, favPokemon) 

console.log(`Here is my backpack after catching Butterfree:`)
console.log(backpack)
console.log(`and here are my pokemon`)
console.log(pokemon)
console.log(`and here is my lunch`)
console.log(lunch)

for (let i =0; i < pokemon.length; i++) {
    if (pokemon[i] === `pidgey`) {
        pokemon[i] = `pidgeotto`
    }
}

console.log(`after the evolution event, my pokemon are now:`)
console.log(pokemon)
