import throttle from "lodash.throttle";

const formRef = document.querySelector(".feedback-form");
const emailRef = document.querySelector("input");
const messageRef = document.querySelector("textarea");
const buttonSubmit = document.querySelector("button");

const feedbackFormState = localStorage.getItem("feedback-form-state") ? JSON.parse(localStorage.getItem("feedback-form-state")): {}; 

formRef.addEventListener("input", throttle(onFormEvent, 500));
function onFormEvent (evt) {
  feedbackFormState[evt.target.name] = evt.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
}

window.addEventListener("load", checkForm );

function checkForm () {
  if (feedbackFormState != {}) {
    if (feedbackFormState.hasOwnProperty("email")) {
      emailRef.value = feedbackFormState.email;
    }
    if (feedbackFormState.hasOwnProperty("message")) {
      messageRef.value = feedbackFormState.message;
    };
  }
  }  
  
  buttonSubmit.addEventListener("click", onButtonClick);
  
  function onButtonClick (evt) {
    evt.preventDefault();
    console.log(feedbackFormState);
    formRef.reset();
    localStorage.removeItem("feedback-form-state");
  }

  