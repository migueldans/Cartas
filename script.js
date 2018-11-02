///Crear un array de objetos de cartas, que tendrán como mínimo propiedades nombre, daño, url_imagen y descripción.
//Hacer un mínimo de 15 cartas y que al cargar la página se muestre los nombre de todos en la consola.

let cartas = [
    {
        nombre: "Aethershield Artificer",
        attack: 3,
        defense: 3,
        description: "+2/+2",
        image: "https://media.wizards.com/2018/m19/en_luYjR7VV2b.png"
    },
    {
        nombre: "Ajani's Pridemate",
        attack: 2,
        defense: 2,
        description: "+1/+1",
        image: "https://media.wizards.com/2018/m19/en_41PitPA4TV.png"
    },
    {
        nombre: "Angel of the Dawn",
        attack: 3,
        defense: 3,
        description: "+1/+1",
        image: "https://media.wizards.com/2018/m19/en_RF5bpwXRWj.png"
    },
    {
        nombre: "Cavalry Drillmaster",
        attack: 2,
        defense: 1,
        description: "+2/+0",
        image: "https://media.wizards.com/2018/m19/en_gK58Wbjr23.png"
    },
    {
        nombre: "Daybreak Chaplain",
        attack: 1,
        defense: 3,
        description: "lifelink",
        image: "https://media.wizards.com/2018/m19/en_M6wq00um9O.png"
    },
    {
        nombre: "Dwarven Priest",
        attack: 2,
        defense: 4,
        description: "Dwarf",
        image: "https://media.wizards.com/2018/m19/en_imBaJLzAeh.png"
    },
    {
        nombre: "Gallant Cavalry",
        attack: 2,
        defense: 2,
        description: "Gallant",
        image: "https://media.wizards.com/2018/m19/en_uF1CsFdE5b.png"
    },
    {
        nombre: "Herald of Faith",
        attack: 4,
        defense: 3,
        description: "Flying",
        image: "https://media.wizards.com/2018/m19/en_gpZ3fvsonk.png"
    },
    {
        nombre: "Knight of the Tusk",
        attack: 3,
        defense: 7,
        description: "Vigilance",
        image: "https://media.wizards.com/2018/m19/en_SuD6QTNEcD.png"
    },
    {
        nombre: "Lena, Selfless Champion",
        attack: 3,
        defense: 3,
        description: "Sacrifice",
        image: "https://media.wizards.com/2018/m19/en_qONqx8GFfV.png"
    },
    {
        nombre: "Leonin Vanguard",
        attack: 1,
        defense: 1,
        description: "+1/+1",
        image: "https://media.wizards.com/2018/m19/en_KllEcrcx31.png"
    },
    {
        nombre: "Leonin Warleader",
        attack: 4,
        defense: 4,
        description: "1/1",
        image: "https://media.wizards.com/2018/m19/en_l2ZBts4yYr.png"
    },
    {
        nombre: "Loxodon Line Breaker",
        attack: 3,
        defense: 2,
        description: "Loxodons",
        image: "https://media.wizards.com/2018/m19/en_SqkAacgbas.png"
    },
    {
        nombre: "Militia Bugler",
        attack: 2,
        defense: 3,
        description: "Vigilance",
        image: "https://media.wizards.com/2018/m19/en_KWBG6m6o0D.png"
    },
    {
        nombre: "Novice knight",
        attack: 2,
        defense: 3,
        description: "Defender",
        image: "https://media.wizards.com/2018/m19/en_ALFmqCFWac.png"
    }
];

////Con un FOREACH
//cartas.forEach(function (carta) {
//    console.log(carta.nombre);
//});

//Con un FOR
for (let i = 0; i < cartas.length; i++) {
    console.log(cartas[i].nombre);
}
