function display(prefix: string, text: string) {
  alert(prefix + " " + text);
}

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    display(input.value, "hello!");
  });
}

export default 1;
