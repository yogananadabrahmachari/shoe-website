document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var pickupDate = document.getElementById("pickupDate").value;
    var returnDate = document.getElementById("returnDate").value;

    // Perform validation if needed

    // Dummy example: Display reservation details
    alert("Reservation Details:\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nPickup Date: " + pickupDate + "\nReturn Date: " + returnDate);
});
