// Імпортуємо lodash.throttle
import throttle from 'lodash.throttle';

// Отримуємо елементи форми
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('.feedback-form');

// Функція для збереження стану форми у локальне сховище
const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

// Функція для заповнення полів форми зі збереженого стану
const fillFormFields = () => {
  const savedFormState = localStorage.getItem('feedback-form-state');
  if (savedFormState) {
    const formState = JSON.parse(savedFormState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

// Функція для очищення сховища та полів форми
const clearFormState = () => {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};

// Функція, яка виконується при сабміті форми
const handleSubmit = event => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formState);
  clearFormState();
};

// Додаємо обробники подій
form.addEventListener('submit', handleSubmit);

// Використовуємо lodash.throttle для обмеження оновлення сховища
const throttledSaveFormState = throttle(saveFormState, 500);
emailInput.addEventListener('input', throttledSaveFormState);
messageInput.addEventListener('input', throttledSaveFormState);

// Заповнюємо поля форми при завантаженні сторінки
window.addEventListener('load', fillFormFields);
