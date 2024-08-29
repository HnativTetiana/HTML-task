/* ----------------------------------------------------- Reviews ----------------------------------------------------- */

const reviews = [
    {
        imgSrc: "./imgs/man1.png",
        alt: "Male avatar",
        name: "David Clark",
        description: "Cardiotensive has significantly improved my blood pressure. I feel more energetic and healthier than ever!"
    },
    {
        imgSrc: "./imgs/woman1.png",
        alt: "Female avatar",
        name: "Anna Herman",
        description: "I was skeptical at first, but after a month of using Cardiotensive, my overall well-being has improved. Highly recommend it!"
    },
    {
        imgSrc: "./imgs/man2.png",
        alt: "Male avatar",
        name: "John Doe",
        description: "This supplement is amazing! Not only has it stabilized my blood pressure, but I also feel more active throughout the day."
    },
    {
        imgSrc: "./imgs/woman2.png",
        alt: "Female avatar",
        name: "Sara Smith",
        description: "Great product! Cardiotensive has helped me maintain my health, and I no longer worry about my heart condition."
    },
    {
        imgSrc: "./imgs/man3.png",
        alt: "Male avatar",
        name: "Vlad Kovalski",
        description: "I feel younger and more vibrant thanks to Cardiotensive. It's now a part of my daily routine!"
    },
    {
        imgSrc: "./imgs/woman3.png",
        alt: "Female avatar",
        name: "Maria Johnson",
        description: "Since I started taking Cardiotensive, my energy levels have skyrocketed. I highly recommend this to anyone looking to improve their health."
    }
];

const reviewsList = document.querySelector(".reviews-list");

// Creates reviews items with img, user name and review description
reviewsList && reviews.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <img src=${element.imgSrc} alt=${element.alt}>
        <h3>${element.name}</h3>
        <p>${element.description}</p>
    `;
    reviewsList.append(li);
})


/* ------------------------------------------------------ Menu ------------------------------------------------------ */

const navlist = document.querySelector('.nav-list');

// Function to hide and show the main navigation
function menu() {
    navlist.classList.toggle('toggle');
}

// Function to show main navigation when screen width > 768px
function returnMenu() {
    if (window.innerWidth > 768) {
        if (navlist) navlist.classList.remove('toggle');
    }
}

window.addEventListener('resize', returnMenu); // Executes when the screen width changes


/* ------------------------------------------------------ Form ------------------------------------------------------ */

// Function for removing spaces (I use it in form fields)
function spaces(inputElement) {
    if (inputElement.value.includes(" ")) {
        inputElement.value = inputElement.value.replace(/\s/g, "");
    }
}

// Function of saving the field name in the session and clearing the form fields
function handleSubmit(event) {
    const name = document.getElementById("name");
    name && sessionStorage.setItem("name", JSON.stringify(name.value));
    event.target.reset(); // Clears form fields
}

/* --------------------------------------------------- Thanks page --------------------------------------------------- */

const formName = sessionStorage.getItem("name") || JSON.stringify("");

const messageName = document.querySelector(".message-name");

if (messageName) messageName.textContent = JSON.parse(formName);