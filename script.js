const contextMenu = document.querySelector(".wrapper");

window.addEventListener("contextmenu", e => {
    e.preventDefault();
    let x = e.offsetX, y = e.offsetY,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    cmWidth = contextMenu.offsetWidth,
    cmHeight = contextMenu.offsetHeight;

    x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight - 5 : y;
    
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible";

    // Check if a text selection exists
    var selectedText = window.getSelection().toString().trim();
    if (selectedText !== "") {
        // Show the custom context menu at the mouse cursor
        var customContextMenu = document.getElementById("custom-context-menu");
        customContextMenu.style.left = e.pageX + "px";
        customContextMenu.style.top = e.pageY + "px";
        customContextMenu.style.display = "block";
    }

});

// Hide the custom context menu when clicking outside of it
document.addEventListener("click", function (e) {
    var customContextMenu = document.getElementById("custom-context-menu");
    if (!customContextMenu.contains(e.target)) {
        customContextMenu.style.display = "none";
    }
});


//Open main of cornell notes
document.addEventListener("DOMContentLoaded", function() {
    // Define an object that maps button IDs to HTML file URLs
    const buttonToUrlMap = {
        idtitle: ".//main//main.html",
        idcontent: ".//main//main.html",
        idkeyword: ".//main//main.html",
        idsummary: ".//main//main.html",
        idcornellnote: ".//main//main.html",
    };

    // Add click event listeners to each button
    for (const buttonId in buttonToUrlMap) {
        if (buttonToUrlMap.hasOwnProperty(buttonId)) {
            const button = document.getElementById(buttonId);
            button.addEventListener("click", function() {
                const url = buttonToUrlMap[buttonId];
                checkAndOpenNewTab(url);
            });
        }
    }

    // Function to check if a tab with the same URL is already open
    function checkAndOpenNewTab(url) {
        const existingTab = Array.from(window.top.frames).find(frame => frame.location.href === url);

        if (existingTab) {
            // If the tab is already open, focus on it
            existingTab.focus();
        } else {
            // If the tab is not open, open a new tab/window
            window.open(url, "_blank");
        }
    }
});

document.addEventListener("click", () => contextMenu.style.visibility = "hidden");