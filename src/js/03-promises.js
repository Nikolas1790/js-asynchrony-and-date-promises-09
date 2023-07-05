import Notiflix from "notiflix";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};



refs.form.addEventListener('submit', onPushSubmit);


function onPushSubmit(e) {
  e.preventDefault();
  let {
    elements: { delay, step, amount },
  } = e.currentTarget;
  
  delay = Number(delay.value);
  step = Number(step.value);
  amount = Number(amount.value);
  
  for (i = 1; i <= amount; i += 1){
    createPromise({ i, delay })
    .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  }
};


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
       reject({ position, delay });  
    }
  })  
}
