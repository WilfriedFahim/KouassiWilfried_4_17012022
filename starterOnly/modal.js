// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbg2 = document.querySelector(".bground2");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnClose = document.querySelector(".close");
const btnClose1 = document.querySelector(".close1");
const btnSubmit = document.querySelector(".btn-submit");
const modalCOnfirmation = document.querySelector(".contentConfirmation");
const btnConfirmation = document.querySelector(".btConfirm");
const iconToggle = document.querySelector(".icon");

iconToggle.addEventListener("click", function (editNav) {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
}

// close modal form
btnClose.addEventListener("click", function (closeModal) {
	modalbg.style.display = "none";
});

// Close modal page confirmation

btnClose1.addEventListener("click", function (closeModalConf) {
	modalbg2.style.display = "none";
	modalCOnfirmation.style.display = "none";
});
btnConfirmation.addEventListener("click", function (closeModalConf2) {
	modalbg2.style.display = "none";
	modalCOnfirmation.style.display = "none";
});

// DOM Elements
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let birthday = document.querySelector("#birthdate");
let quantity = document.querySelector("#quantity");
let locationCities = document.querySelector(".location");
let cgv = document.getElementById("checkbox1");

// Listen to each input to seek modification and triger the validation function
firstName.addEventListener("input", validateFirst);
lastName.addEventListener("input", validateLast);
email.addEventListener("input", validateEmail);
birthday.addEventListener("input", validateBirthday);
quantity.addEventListener("input", validateQuantity);
locationCities.addEventListener("change", validateLocationCity);
cgv.addEventListener("change", validateCgv);

// function which validate if the form is ok before submit
btnSubmit.addEventListener("click", function (confirmationModal) {
	let isValid = validate();
	if (
		isValid.a === false ||
		isValid.b === false ||
		isValid.c === false ||
		isValid.d === false ||
		isValid.e === false ||
		isValid.f === false ||
		isValid.g === false
	) {
		confirmationModal.preventDefault();
	} else {
		modalbg2.style.display = "block";
		modalCOnfirmation.style.display = "block";
	}
});

//function which return the boolean result of each validation function into a variable
function validate() {
	let a = validateFirst();
	let b = validateLast();
	let c = validateEmail();
	let d = validateBirthday();
	let e = validateQuantity();
	let f = validateLocationCity();
	let g = validateCgv();
	return { a, b, c, d, e, f, g };
}

// function which validate the input "Prénom"
function validateFirst() {
	if (firstName.value.length < 2 || firstName.value == "") {
		document.getElementById("errorFirst").innerHTML =
			"Veuillez entrer 2 caractères ou plus pour le champ du nom.";
		return false;
	} else {
		document.getElementById("errorFirst").style.display = "none";
		return true;
	}
}

// function which validate the input "Nom"
function validateLast() {
	if (lastName.value.length < 2 || lastName.value == "") {
		document.getElementById("errorLast").innerHTML =
			"Veuillez entrer 2 caractères ou plus pour le champ du nom.";
		return false;
	} else {
		document.getElementById("errorLast").style.display = "none";
		return true;
	}
}

// function which validate the input "E-email"
function validateEmail() {
	if (email.value == "") {
		document.getElementById("errorEmail").innerHTML =
			"Veuillez entrer votre adresse email !";
		return false;
	} else {
		document.getElementById("errorEmail").style.display = "none";
	}
	// use of regex to control the email input
	if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
		document.getElementById("errorEmail").innerHTML =
			"Veuillez entrer une adresse email valide !";
		return false;
	} else {
		document.getElementById("errorEmail").style.display = "none";
	}
	return true;
}

// function which validate the input "Date de naissance"
function validateBirthday() {
	let today = new Date();
	let dateLimit = today.getDate() + today.getMonth() + (today.getFullYear - 3);

	//add error message by getting a span ID of this specific input
	if (birthday.value == "" || birthday.value >= dateLimit.value) {
		document.getElementById("errorBirthday").innerHTML =
			"Vous devez entrer votre date de naissance.";
		return false;
	} else {
		document.getElementById("errorBirthday").style.display = "none";
		return true;
	}
}

// function which validate the input "à combien de tournoi..."
function validateQuantity() {
	//add error message by getting a span ID of this specific input
	if (!quantity.value.match(/^([0-9]){1,2}$/)) {
		document.getElementById("errorQuantity").innerHTML =
			"Veuillez entrer une valeur numérique !";
		return false;
	} else {
		document.getElementById("errorQuantity").style.display = "none";
		return true;
	}
}

// function which validate the checkbox "Quelles villes ?"
function validateLocationCity() {
	//add error message by getting a span ID of this specific input
	if (
		!(
			document.getElementById("location1").checked ||
			document.getElementById("location2").checked ||
			document.getElementById("location3").checked ||
			document.getElementById("location4").checked ||
			document.getElementById("location5").checked ||
			document.getElementById("location6").checked
		)
	) {
		document.getElementById("errorOptions").innerHTML =
			"Vous devez choisir une option.";
		return false;
	} else {
		document.getElementById("errorOptions").style.display = "none";
		return true;
	}
}

// function which validate the checkbox "J'ai lu et accepté ..."
function validateCgv() {
	//add error message by getting a span ID of this specific input
	if (!document.getElementById("checkbox1").checked) {
		document.getElementById("errorCgv").innerHTML =
			"Vous devez vérifier que vous acceptez les termes et conditions.";
		return false;
	} else {
		document.getElementById("errorCgv").style.display = "none";
		return true;
	}
}
