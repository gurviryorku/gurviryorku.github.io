
// Create function to open Resume in new Window
function openResume() {
    window.open("GurvirBoparai-Resume.pdf");
}

// Create variable called resumeButton that gets element ID
let resumeButton = document.getElementById('resumebutton')
// Add event listener to button, when clicked - call on function openResume()
resumeButton.addEventListener('click', openResume);


