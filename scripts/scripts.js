// Dark & Light Mode

var icon = document.getElementById("icon");

const darkMode = () => {
document.body.classList.toggle("dark-theme");
if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
    }else{
        icon.src = "images/moon.svg";
    }
}

icon.addEventListener('click', () => {
// Get the value of the "dark" item from the local storage on every click
setDarkMode = localStorage.getItem('dark');

if(setDarkMode !== "on") {
    darkMode();
    // Set the value of the itwm to "on" when dark mode is on
    setDarkMode = localStorage.setItem('dark', 'on');
} else {
    darkMode();
    // Set the value of the item to  "null" when dark mode if off
    setDarkMode = localStorage.setItem('dark', null);
}
});

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem('dark');

// Check dark mode is on or off on page reload
if(setDarkMode === 'on') {
darkMode();
}