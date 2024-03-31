// app.js
const form = document.getElementById('enrollment-form');
const displayDiv = document.getElementById('display-data');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const skills = [];
    const skillCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    skillCheckboxes.forEach((checkbox) => {
        skills.push(checkbox.value);
    });

    displayDiv.innerHTML = `
        <h2>Data:</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Gender: ${gender}</p>
        <p>Skills: ${skills.join(', ')}</p>
    `;
});