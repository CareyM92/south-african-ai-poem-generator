function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "From Gonubie’s breeze to Jozi’s beat,\nWe stitch our stories in sun and dust",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
