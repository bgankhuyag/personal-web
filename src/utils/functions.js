export const showOnScroll = (elem) => {
  window.addEventListener("scroll", () => {
    if (document.getElementById(elem).getBoundingClientRect().top <= (window.innerHeight * 4/5) &&
        document.getElementById(elem).getBoundingClientRect().top > -window.innerHeight) {
      document.getElementById(elem).classList.add('appear');
    }
  });
}
