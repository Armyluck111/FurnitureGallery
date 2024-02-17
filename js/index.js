document
  .getElementById("STYLISH")
  .addEventListener("mousemove", (event) => {
    let XPos = +event.clientX / +window.innerWidth;
    let YPos = +event.clientY / +window.innerHeight;
    document.getElementById("__Chair").style.transform = `translate(${
      2 * -XPos
    }rem, ${7 - 2 * YPos}rem)`;
    document.getElementById("__Lamp").style.transform = `translate(${
      -9 + 3 * XPos
    }rem, ${1 + 2 * YPos}rem)`;
  });
