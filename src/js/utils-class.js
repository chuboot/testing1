export function addClass(el, classes) {
  el.classList && el.classList.add(...classes.split(" "));
}

export function removeClass(el, classes) {
  el.classList && el.classList.remove(...classes.split(" "));
}
