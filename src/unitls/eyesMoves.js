const pupils = document.querySelectorAll(".eye .pupil");
window.addEventListener("mousemove", (e) => {
  if (window.innerWidth < 768) {
    return;
  }
  pupils.forEach((pupil) => {
    const rect = pupil.getBoundingClientRect();
    const x = (e.pageX - rect.left) / 30 + "px";
    const y = (e.pageY - rect.top) / 30 + "px";
    pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
  });
});