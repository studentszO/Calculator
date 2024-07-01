const buttons = document.querySelector(".calculator");
let clickedValue = buttons.addEventListener("click", (event) => {
    let target = event.target;
    return clickedValue = target.textContent;
});

buttons.addEventListener("click", () => {
    console.log(clickedValue)
})