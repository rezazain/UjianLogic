var value = 9;

for (x = 1; x <= value; x++) {
  for (y = 1; y <= value; y++) {
    if (x <= 5 && x + y > 5 && x - y > -1 + -4) {
      document.write("&nbsp" + "*");
    } else if (x > 5 && x - y < 5 && y - 9 + x <= 5) {
      document.write("&nbsp" + "*");
    } else {
      document.write(" &nbsp ");
    }
  }
  document.write("<br>");
}
