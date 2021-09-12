var addMessageButton = document.querySelector('.add-message');
var affirmationRadio = document.querySelector('#affirmation');
var clearMessageButton = document.querySelector('.clear-message');
var iDontLikeThisMessageButton = document.querySelector('.delete-button');
var mainPageHeader = document.querySelector('.header');
var mantraRadio = document.querySelector('#mantra');
var meditationImage = document.querySelector('.image');
var messageDisplay = document.querySelector('.message');
var messageSectionDisplay = document.querySelector('.message-container');
var receiveMessageButton = document.querySelector('.receive-button');
var submitAffirmationButton = document.querySelector('.submit-affirmation');
var submitMantraButton = document.querySelector('.submit-mantra');
var userMessageForm = document.querySelector('.user-form-container');
var userMessageInput = document.querySelector('#user-message');


var affirmations = [`I forgive myself and set myself free.`, `I believe I can be all that I want to be.`, `I am in the process of becoming the best version of myself.`, `I have the freedom & power to create the life I desire.`, `I choose to be kind to myself and love myself unconditionally.`, `My possibilities are endless.`, `I am worthy of my dreams.`, `I am enough.`, `I deserve to be healthy and feel good.`, `I am full of energy and vitality and my mind is calm and peaceful.`, `Every day I am getting healthier and stronger.`, `I honor my body by trusting the signals that it sends me.`, `I manifest perfect health by making smart choices.`];

var mantras = [`Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.`, `Don’t let yesterday take up too much of today.`, `Every day is a second chance.`, `Tell the truth and love everyone.`, `I am free from sadness.`, `I am enough.`, `In the beginning it is you, in the middle it is you and in the end it is you.`, `I love myself.`, `I am present now.`, `Inhale the future, exhale the past.`, `This too shall pass.`, `Yesterday is not today.`, `The only constant is change.`, `Onward and upward.`, `I am the sky, the rest is weather.`];

var arrayOfCurrentMessage;
var randomIndex;
var userMessage;

addMessageButton.addEventListener('click', displayUserMessageForm);
clearMessageButton.addEventListener('click', clearMessageDisplay);
iDontLikeThisMessageButton.addEventListener('click', deleteMessage);
receiveMessageButton.addEventListener('click', receiveRandomMessage);
submitAffirmationButton.addEventListener('click', submitUserAffirmation);
submitMantraButton.addEventListener('click', submitUserMantra);

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
    clearMessageButton.classList.add('hidden');
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
  clearMessageButton.classList.remove('hidden');
  addMessageButton.classList.remove('hidden');
  userMessageForm.classList.add('hidden');
  messageSectionDisplay.classList.remove('hidden');

}

function displayEmptyArrayError() {
  iDontLikeThisMessageButton.classList.add('hidden');
  messageDisplay.classList.add('italicized-red');
  messageDisplay.innerText = `Oh no! There are no more messages of this type.`;
}

function clearMessageDisplay() {
  meditationImage.classList.remove('hidden');
  messageDisplay.classList.add('hidden');
  iDontLikeThisMessageButton.classList.add('hidden');
  clearMessageButton.classList.add('hidden');
}

function displayUserMessageForm(event) {
  event.preventDefault();
  userMessageForm.classList.remove('hidden');
  mainPageHeader.classList.add('hidden');
  messageSectionDisplay.classList.add('hidden');
  userMessageInput.value = '';

}

function submitUserAffirmation(event) {
  event.preventDefault();
  validateUserInput();
  if(userMessage) {
    userMessage = userMessageInput.value;
    messageDisplay.innerText = userMessage;
    arrayOfCurrentMessage = affirmations;
    affirmations.push(userMessage);
    randomIndex = affirmations.length - 1;
    displayMessage();
  }
}

function submitUserMantra(event) {
  event.preventDefault();
  validateUserInput();
  if(userMessage) {
    userMessage = userMessageInput.value;
    messageDisplay.innerText = userMessage;
    arrayOfCurrentMessage = mantras;
    mantras.push(userMessage);
    randomIndex = mantras.length - 1;
    displayMessage();
  }
}

function validateUserInput() {
  userMessage = userMessageInput.value;
  if(!userMessage) {
    displayMessage();
    messageDisplay.innerText = `Oh no! Please input a valid message.`;
    messageDisplay.classList.add('italicized-red');
    iDontLikeThisMessageButton.classList.add('hidden');
    clearMessageButton.classList.add('hidden');
    return;
  }
}
