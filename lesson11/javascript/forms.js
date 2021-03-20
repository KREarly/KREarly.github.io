var input = document.getElementById('fullName');

input.oninvalid = function(event) {
    event.target.setCustomValidity('Full name should only include letters and spaces');
}