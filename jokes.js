const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');
const jokeText = document.querySelector('.jokeText');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
  loader.classList.remove('hidden');
  jokeText.classList.add('hidden');
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  loader.classList.add('hidden');
  jokeText.classList.remove('hidden');
  return data.joke;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if(item === not) {
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const joke = await fetchJoke();
  console.log(joke);
  jokeHolder.textContent = joke;
  jokeText.textContent = randomItemFromArray(buttonText, jokeText.textContent);

}

jokeButton.addEventListener('click', handleClick);

fetchJoke();
randomItemFromArray(buttonText);