// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

/// Call welcomeMessage function to prompt user and display welcome message
welcomeMessage();

function welcomeMessage() {
  /// Prompt user for their name
  const userInput = prompt("Please enter your name:");

  /// Get the welcome-speech DOM element
  const welcomDOM = document.getElementById("welcome-speech");

  /// Check if userInput is null or empty
  if (userInput === null || userInput.trim() === "") {
    /// Render default welcome message
    welcomDOM.innerHTML = "Welcome To My Website, Guest!";
  } else {
    /// Render personalized welcome message
    welcomDOM.innerHTML = "Welcome To My Website, " + userInput + "!";
  }
}

/// Placeholder for form validation function
function validateForm() {}
