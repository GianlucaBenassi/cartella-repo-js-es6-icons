const cards = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


// load all cards in array
cards.forEach((card) => addCard(card));

// on change select filter
const cardFilter = document.getElementById('type-filter');

cardFilter.addEventListener('change', function(){

	// clear card container
	document.querySelector('main .container').innerHTML = '';

	// IF all add all cards ELSE create a filtered array and add cards
	if (this.value == 'all'){
		cards.forEach((card) => addCard(card));
	} else {
		const filterCard = cards.filter(card => card.type == this.value);
		filterCard.forEach((card) => addCard(card));
	}

});


// ***** functions *****

function addCard(card) {

	// get card container
	const cardContainer = document.querySelector('main .container');

	// create card
	const cardBox = document.createElement('div');
	cardBox.classList.add('card');
	cardBox.innerHTML = `
	<i class="${card.family} ${card.prefix + card.name}"></i>
    <h4>${card.name}</h4>
	`;
	// cardBox.style.color = card.color;
	
	//random card color
	cardBox.style.color = rndColor();

	// append new card to the container
	cardContainer.appendChild(cardBox);

}


// random color generator
function rndColor() {

	const valueString = '0123456789ABCDEF';
	let color = '#';

	for (let i = 0; i < 6; i++) {
		color += valueString[Math.floor(Math.random() * 16)];
	}

	return color;

}