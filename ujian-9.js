var value = 9;

for (x = 1; x <= value; x++) {
  for (y = 1; y <= value; y++) {
    if (x >= 2 && y >= value - x + 1 && y <= x) {
      document.write(" * ");
    } else if (x <= 5 && x + y > 5 && y <= x + 4) {
      document.write(" * ");
    } else document.write(" &nbsp ");
  }
  document.write("<br>");
}
