var value = 9;

for (x = 1; x <= value; x++) {
  for (y = 1; y <= value; y++) {
    if (value - y < x) {
      document.write("&nbsp*");
    } else {
      document.write("&nbsp -");
    }
  }
  document.write("<br>");
}
