var affirmationRadio = document.querySelector('#affirmation');
var mantraRadio = document.querySelector('#mantra');
var receiveMessageButton = document.querySelector('.receive-button');
var iDontLikeThisMessageButton = document.querySelector('.delete-button');
var meditationImage = document.querySelector('.image');
var messageDisplay = document.querySelector('.message');

var affirmations = [`I forgive myself and set myself free.`, `I believe I can be all that I want to be.`, `I am in the process of becoming the best version of myself.`, `I have the freedom & power to create the life I desire.`, `I choose to be kind to myself and love myself unconditionally.`, `My possibilities are endless.`, `I am worthy of my dreams.`, `I am enough.`, `I deserve to be healthy and feel good.`, `I am full of energy and vitality and my mind is calm and peaceful.`, `Every day I am getting healthier and stronger.`, `I honor my body by trusting the signals that it sends me.`, `I manifest perfect health by making smart choices.`];

var mantras = [`Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.`, `Don’t let yesterday take up too much of today.`, `Every day is a second chance.`, `Tell the truth and love everyone.`, `I am free from sadness.`, `I am enough.`, `In the beginning it is you, in the middle it is you and in the end it is you.`, `I love myself.`, `I am present now.`, `Inhale the future, exhale the past.`, `This too shall pass.`, `Yesterday is not today.`, `The only constant is change.`, `Onward and upward.`, `I am the sky, the rest is weather.`];

var randomIndex;
var arrayOfCurrentMessage;

receiveMessageButton.addEventListener('click', receiveRandomMessage);
iDontLikeThisMessageButton.addEventListener('click', deleteMessage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function receiveRandomMessage(event) {
  event.preventDefault();
  if (!affirmationRadio.checked && !mantraRadio.checked) {
    displayNoMessageTypeError();
    return;
  }

  if (affirmationRadio.checked) {
    arrayOfCurrentMessage = affirmations;
  } else if (mantraRadio.checked) {
    arrayOfCurrentMessage = mantras;
  }

  if (!arrayOfCurrentMessage.length) {
    displayEmptyArrayError();
    return;
  }

  randomIndex = getRandomIndex(arrayOfCurrentMessage);
  messageDisplay.innerText = arrayOfCurrentMessage[randomIndex];
  displayMessage();
}

function deleteMessage() {
  if (arrayOfCurrentMessage.length > 0) {
    arrayOfCurrentMessage.splice(randomIndex, 1);
    messageDisplay.classList.add('italicized-red');
    messageDisplay.innerText = `Message was deleted.`;
    iDontLikeThisMessageButton.classList.add('hidden');
  }
}

function displayNoMessageTypeError() {
  meditationImage.classList.add('hidden');
  messageDisplay.classList.remove('hidden');
  messageDisplay.classList.add('italicized-red');
  messageDisplay.innerText = `Please select a type of message.`;
}

function displayMessage() {
  meditationImage.classList.add('hidden');
  messageDisplay.classList.remove('italicized-red');
  messageDisplay.classList.remove('hidden');
  iDontLikeThisMessageButton.classList.remove('hidden');
}

function displayEmptyArrayError() {
  iDontLikeThisMessageButton.classList.add('hidden');
  messageDisplay.classList.add('italicized-red');
  messageDisplay.innerText = `Oh no! There are no more messages of this type.`;
}
