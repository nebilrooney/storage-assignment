document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const saveButton = document.getElementById("saveName");
    const clearButton = document.getElementById("clearName");
    const displayName = document.getElementById("displayName");

    // Load saved name from localStorage if it exists
    if (localStorage.getItem("username")) {
        displayName.textContent = "Saved Name: " + localStorage.getItem("username");
    }

    // Save name to localStorage
    saveButton.addEventListener("click", function () {
        const name = usernameInput.value.trim();
        if (name) {
            localStorage.setItem("username", name);
            displayName.textContent = "Saved Name: " + name;
        }
    });

    // Clear saved name from localStorage
    clearButton.addEventListener("click", function () {
        localStorage.removeItem("username");
        displayName.textContent = "";
        usernameInput.value = "";
    });
});
