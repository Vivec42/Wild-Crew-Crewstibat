const form = document.querySelector("#form");
const username = document.querySelector("#username");
const username2 = document.querySelector("#username2");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const text2 = document.querySelector("#text2");

form.addEventListener("click", (e) => {
  e.preventDefault();

  form_verify();
});

function setSucces(elem) {
  const formcontrol = elem.parentElement;
  // const small = formcontrol.querySelector("small");
  // console.log("hello 2: ", small.innerText, small.innerHTML);

  // small.innerText = "";
  // small.innerHTML = '<i class="fa fa-check-circle"></i>';

  formcontrol.className = "form-control succes";
}

function form_verify() {
  const uservalue = username.value.trim();
  const uservalue2 = username2.value.trim();
  const emailvalue = email.value.trim();
  const numbervalue = number.value.trim();
  const text2value = text2.value.trim();
  console.log(uservalue);
  console.log(uservalue2);
  console.log(emailvalue);
  console.log(numbervalue);
  console.log(text2value);

  if (uservalue === "") {
    let message = "Votre prénom ne peut être vide";
    setError(username, message);
  } else {
    console.log("hello");
    setSucces(username);
  }

  function setError(elem, message) {
    const formcontrol = elem.parentElement;
    const small = formcontrol.querySelector("small");
    small.innerHTML = "";

    //small.innerText = message;//

    formcontrol.className = "form-control error";
  }

  if (uservalue2 === "") {
    let message = "Votre Nom ne peut être vide";
    setError(username2, message);
  } else {
    setSucces2(username2);
  }

  function setError(elem, message) {
    const formcontrol = elem.parentElement;
    const small = formcontrol.querySelector("small");
    small.innerHTML = "";

    small.innerText = message;

    formcontrol.className = "form-control error";
  }

   function setSucces2(elem) {
    const formcontrol = elem.parentElement;
    // const small = formcontrol.querySelector("small");

    // small.innerText = "";
    // small.innerHTML = '<i class="fa fa-check-circle"></i>';

    formcontrol.className = "form-control succes";
  }

  if (emailvalue === "") {
    let message = "Votre email ne peut être vide";
    setError(email, message);
  } else if (email_verify(email)) {
    let message = "Email pas valide";
    setSucces3(email, message);
  }

  function setError(elem, message) {
    const formcontrol = elem.parentElement;
    const small = formcontrol.querySelector("small");
    small.innerHTML = "";

    small.innerText = message;

    formcontrol.className = "form-control error";
  }

  function setSucces3(elem) {
    const formcontrol = elem.parentElement;
    // const small = formcontrol.querySelector("small");

    // small.innerText = "";
    // small.innerHTML = '<i class="fa fa-check-circle"></i>';

    formcontrol.className = "form-control succes";
  }

  function email_verify(email) {
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
  }
  if (text2value === "") {
    let message = "Votre Message ne peut être vide";
    setError(text2, message);
  } else {
    setSucces4(text2);
  }

  function setError(elem, message) {
    const formcontrol = elem.parentElement;
    const small = formcontrol.querySelector("small");
    small.innerHTML = "";

    small.innerText = message;

    formcontrol.className = "form-control error";
  }

  function setSucces4(elem) {
    const formcontrol = elem.parentElement;
    // const small = formcontrol.querySelector("small");

    // small.innerText = "";
    // small.innerHTML = '<i class="fa fa-check-circle"></i>';

    formcontrol.className = "form-control succes";
  }

  if (numbervalue === "") {
    let message = "Votre Numero ne peut être vide";
    setError(number, message);
  } else {
    setSucces5(number);
  }

  function setError(elem, message) {
    const formcontrol = elem.parentElement;
    const small = formcontrol.querySelector("small");
    small.innerHTML = "";

    small.innerText = message;
 
    formcontrol.className = "form-control error";
  }

  function setSucces5(elem) {
    const formcontrol = elem.parentElement;
    // const small = formcontrol.querySelector("small");

    // small.innerText = "";
    // small.innerHTML = '<i class="fa fa-check-circle"></i>';

    formcontrol.className = "form-control succes";
  }
}
