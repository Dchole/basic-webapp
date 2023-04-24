const LOGO = document.querySelector(".logo");
const NAV_LINKS = document.querySelector("nav .links");
const SIDE_BAR = document.querySelector("#side-bar");

LOGO?.addEventListener("click", () => {
  if (SIDE_BAR?.classList.contains("open")) {
    SIDE_BAR?.setAttribute("aria-hidden", "true");
    SIDE_BAR?.classList.remove("open");
  } else {
    SIDE_BAR?.removeAttribute("aria-hidden");
    SIDE_BAR?.classList.add("open");
  }
});
