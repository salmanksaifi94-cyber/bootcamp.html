// fill in javascript code here--
document.querySelector("#myform").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.querySelector("#name").value
    let id = document.querySelector("#docID").value
    let specialization = document.querySelector("#dept").value
    let experience = document.querySelector("#exp").value
    let email = document.querySelector("#email").value
    let mobile = document.querySelector("#mbl").value

    let role = experience > 5 ? "senior" : "junior";

    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${name}</td>
        <td>${id}</td>
        <td>${specialization}</td>
        <td>${experience}</td>
        <td>${email}</td>
        <td>${mobile}</td>
        <td>${role}</td>
        <td><button>Delete</button></td>
    `
    row.lastElementChild.addEventListener("click", function () {
        row.remove();
    })
    document.querySelector("#tbody").append(row);
    document.querySelector("#myform").reset();
})