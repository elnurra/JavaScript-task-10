export function accordionFunction() {
  $("#accordeon .acc-body").not($(this).next()).slideUp(1000);
  $(this).next().slideToggle(2000);
}
