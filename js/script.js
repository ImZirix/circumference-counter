const PI = 3.14159;
let circumference;
let radius;
let btn = document.getElementById("submitBtn");

btn.onclick = function() {
    radius = document.getElementById("myInput").value;
    radius = Number(radius)
    circumference = 2 * PI * radius;
    document.getElementById("h3").textContent = circumference;
}