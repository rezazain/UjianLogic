var value = 9;

for (x = 1; x <= value; x++) {
  for (y = 1; y <= value; y++) {
    if (x < y) {
      document.write("&nbsp -");
    } else if (x == y) {
      document.write(x * 2 + 1);
    } else {
      document.write("A");
    }
  }
  document.write("<br>");
}
