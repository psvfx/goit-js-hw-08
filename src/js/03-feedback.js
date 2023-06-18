// Add imports
import throttle from 'lodash.throttle';

// Getting form elements
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

// Add event handlers
form.addEventListener('submit', handleSubmit);

//Using lodash.throttle to limit repository updates
const throttledSaveFormState = throttle(saveFormState, 500);
emailInput.addEventListener('input', throttledSaveFormState);
messageInput.addEventListener('input', throttledSaveFormState);

// Function to save form state to local storage
const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

// Function of filling form fields from the saved state
const fillFormFields = () => {
  const savedFormState = localStorage.getItem('feedback-form-state');
  if (savedFormState) {
    const formState = JSON.parse(savedFormState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

// Filling out the form fields when loading the page
window.addEventListener('load', fillFormFields);

// Function to clear the storage and form fields
const clearFormState = () => {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};

// Function that is executed when the form is submitted
const handleSubmit = event => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formState);
  clearFormState();
};
