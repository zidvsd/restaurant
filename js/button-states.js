export const heartFill = () => {
  const heartBtns = document.querySelectorAll(".heart-fill");

  heartBtns.forEach((heartBtn) => {
    heartBtn.addEventListener("click", (event) => {
      console.log("Heart button clicked!"); // Debugging log
      const heartSvgPath = heartBtn.querySelector("svg path");

      if (heartSvgPath) {
        const currentFill = heartSvgPath.getAttribute("fill");

        if (currentFill === "none") {
          heartSvgPath.setAttribute("fill", "white"); // Set to white instantly
        } else {
          heartSvgPath.setAttribute("fill", "none"); // Toggle back to none
        }
      }
    });
  });
};
