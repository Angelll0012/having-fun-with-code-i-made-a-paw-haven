
// find the animal cards and their controls
const animalCards = document.querySelectorAll(".animal-card");
const filterButtons = document.querySelectorAll(".buttons button");
const adoptButtons = document.querySelectorAll(".adopt-button");

// find the adoption form and the elements used to show its state
const selectedAnimal = document.getElementById("selected-animal");
const adoptionForm = document.getElementById("adoption-form");
const formMessage = document.getElementById("form-message");

// show only animals that match the selected filter
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // read the animal type assigned to the clicked filter
    const type = button.dataset.type;

    animalCards.forEach(card => {
      // clear the display override for matches and hide the rest
      card.style.display =
        type === "all" || card.dataset.type === type
          ? ""
          : "none";
    });
  });
});

// select an animal and move to the adoption form
adoptButtons.forEach(button => {
  button.addEventListener("click", () => {
    // save the chosen animal so the form can use it
    selectedAnimal.value = button.dataset.name;

    // guide the visitor to the adoption form
    document.getElementById("adoption").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// validate the selection and confirm the adoption interest
adoptionForm.addEventListener("submit", event => {
  // keep the browser from reloading the page after submission
  event.preventDefault();

  // stop submission if an animal has not been selected
  if (!selectedAnimal.value.trim()) {
    formMessage.textContent = "Please select an animal first.";
    return;
  }

  // collect the adopter name and selected animal
  const name = document.getElementById("adopter-name").value.trim();
  const animal = selectedAnimal.value;

  // show a confirmation using the submitted details
  formMessage.textContent =
    `Thank you, ${name}! You have expressed interest in adopting ${animal}.`;

  // clear the form after showing the confirmation
  adoptionForm.reset();
});
