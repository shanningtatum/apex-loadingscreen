// Loader
const loader = document.querySelector(".loading-progress");
//   const loaderIndicator = document.querySelector(".loading-amount");

window.addEventListener("message", (e) => {
  if (e.data.eventName === "loadProgress") {
    const loaded = parseInt(e.data.loadFraction * 100);

    if (loaded > 8) {
      loader.style.width = `calc(${loaded}% - 10px)`;
      //   loaderIndicator.innerHTML = `${loaded}%`;
    }
  }
});
