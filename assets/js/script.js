console.log('Hello world');

document.addEventListener("DOMContentLoaded", function() {
let buttons = document.getElementsByTagName("button");
for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "click") {
            alert("You clicked the sledgehammer!");
        } else {
            alert("You missed");
        }
    });
}
});

