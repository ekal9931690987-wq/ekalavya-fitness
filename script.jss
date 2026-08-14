

function showForm() {
    
    const form = document.getElementById("join-form");
    form.style.display = "block";

    form.scrollIntoView({
        behavior: "smooth"
    });
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! We will contact you soon.");

    event.target.reset();
}