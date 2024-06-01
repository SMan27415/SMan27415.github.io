alert("Welcome to the Horizon Expeditions Corporation/Ltd. - Newsletter Signup");
function submitForm(form) {
    form.addEventListener('submit', (event) => { event.preventDefault(); });
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    if (firstName == "" || lastName == "") {
        alert("Error: " + (firstName == "" ? "First name" : "") + (firstName == "" && lastName == "" ? " and " : "") + (lastName == "" ? "Last name" : "") + " is empty! Form not submitted.");
    } else {
        alert("Form has been submitted successfully!");
        form.submit();
    }
}