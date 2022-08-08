const darkModeToggle = document.querySelector('#darkMode');
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () =>{
    document.body.style.backgroundColor = "#333";
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.style.backgroundColor ="#F2F2F2";
    localStorage.setItem("darkMode", null);
};

if(darkMode === "enabled"){
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== 'enabled'){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
});