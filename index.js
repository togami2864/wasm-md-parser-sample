const rust = import("./markdown_parser");

rust.then((module) => {
  const previewArea = document.getElementById("output");
  const input = document.getElementById("markdown");
  input.addEventListener("input", () => {
    text = input.value;
    previewArea.innerHTML = module.parse(text);
  });
});
