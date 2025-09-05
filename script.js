document.addEventListener("mousemove", function(e) {
  const trail = document.querySelector(".trail");
  const dot = document.createElement("span");
  dot.style.left = e.pageX + "px";
  dot.style.top = e.pageY + "px";

  trail.appendChild(dot);

  // Remove the dot after animation
  setTimeout(() => {
    dot.remove();
  }, 1000);
});
