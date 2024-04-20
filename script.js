// Function to update the number of unread notifications
function updateNotificationsNumber() {
    // Get all notification buttons
    let buttons = document.querySelectorAll(".notifications");
    let unreadCount = 0;

    buttons.forEach(button => {
        // Check if the button is unread (has not been clicked)
        if (!button.classList.contains("clicked")) {
            unreadCount++;
            
        }
    });

    // Update the content of the element with the id "notifications-number"
    document.getElementById("notifications-number").textContent = unreadCount.toString();
}

function markAsClicked(button) {
    button.classList.add("clicked");
    button.style.backgroundColor = "white";
    
    let dot = button.querySelector(".dot");
    if (dot) {
        dot.style.display = "none";
    }
}


function markAll(){
    buttons.forEach(button => {
        button.style.backgroundColor = "white";
        button.classList.add("clicked");
        let dot = button.querySelector(".dot");
        if (dot) {
            dot.style.display = "none";
        }
    });
    // Update the content of the element with the id "notifications-number" to 0
    document.getElementById("notifications-number").textContent = "0";
}

function displayMessage(){
    const message = document.querySelector(".message");
    message.style.display = "block";
}

// Add event listeners to notification buttons to mark them as clicked
let buttons = document.querySelectorAll(".notifications");
buttons.forEach(button => {
    button.addEventListener("click", function(){
        // Call the function to mark the button as clicked
        markAsClicked(button);
        // Call the function to update the number of unread notifications
        updateNotificationsNumber();
    });
});
