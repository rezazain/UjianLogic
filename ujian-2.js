var value = 9;

for (x = 1; x <= value; x++) {
  for (y = 1; y <= value; y++) {
    if (
      (x == 1) | (x == 5) | (x == value) ||
      (y == 1) | (y == 5) | (y == value)
    ) {
      document.write("&nbsp" + "*");
    } else document.write("&nbsp" + "- ");
  }
  document.write("<br>");
}
