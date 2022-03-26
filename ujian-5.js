var value = 9;

for (x = 1; x <= value; x++) {
  for (y = 1; y <= value; y++) {
    if (x == y) {
      document.write(x * 2 - 1);
    } else if (value - y + 1 == x) {
      document.write(y * 2 - 2);
    } else {
      document.write(" - ");
    }
  }
  document.write("<br>");
}
