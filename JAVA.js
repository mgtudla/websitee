// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Add functionality to navigation links
    });
  });
  // Add event listener to scroll to the top of the next section when the user scrolls to the bottom of the current section
document.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section");
  const currentScrollPosition = window.scrollY;
  const sectionOffsets = [];

  sections.forEach((section, index) => {
    sectionOffsets.push(section.offsetTop);
  });

  for (let i = 0; i < sectionOffsets.length; i++) {
    if (currentScrollPosition >= sectionOffsets[i] && currentScrollPosition < sectionOffsets[i + 1]) {
      const nextSection = sections[i + 1];
      if (nextSection) {
        window.scrollTo(0, nextSection.offsetTop);
      }
      break;
    }
  }
});
// Get all the dropdown menus
const dropdowns = document.querySelectorAll('.dropdown');
const nextButton = document.querySelector('#next');

// Create an object to store the answers
const answers = {};

// Add an event listener to the next button
nextButton.addEventListener('click', () => {
  // Loop through each dropdown menu
  dropdowns.forEach((dropdown, index) => {
    // Get the selected value
    const selectedValue = dropdown.value;

    // Store the answer in the object
    answers[`q${index + 1}`] = selectedValue;
  });

  // Redirect to the next page with the answers as query parameters
  const nextPageUrl = 'nextpage.html';
  const queryString = Object.keys(answers).map(key => `${key}=${answers[key]}`).join('&');
  window.location.href = `${nextPageUrl}?${queryString}`;
});
nextpage.html?q1=YES&q2=MAYBE&q3=NO
const urlParams = new URLSearchParams(window.location.search);
const q1 = urlParams.get('q1');
const q2 = urlParams.get('q2');
const q3 = urlParams.get('q3');

console.log(q1, q2, q3); // Output: YES MAYBE NO