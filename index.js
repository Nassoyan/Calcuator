const input = document.querySelector(".input-numbers");
const buttons = document.querySelectorAll(".buttons-row");

const equalSign = "=";
const allClear = "AC";
input.focus();

const equal = buttons.forEach((e) => {
  e.addEventListener("click", action);
});

document.body.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    input.value = eval(input.value);
  }
  console.log(e.key);
});

function action(number) {
  number = number.target.innerHTML;
  switch (number) {
    case allClear:
      input.value = "";
      break;

    case "N":
      input.value = "Nasoyan";
      break;

    case equalSign:
      if (input.value.includes("%")) {
        const x = input.value.split("%");
        input.value = (x[0] * x[1]) / 100;
      }
      const result = eval(input.value);
      input.value = result === Infinity ? "Error!" : result;
      break;

    default:
      input.value += number;
      break;
  }
}
