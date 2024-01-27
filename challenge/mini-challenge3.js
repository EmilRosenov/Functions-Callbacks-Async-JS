const handleClick = (event) => {
  console.log(event.clientX, event.clientY);
};

window.addEventListener("click", handleClick);
