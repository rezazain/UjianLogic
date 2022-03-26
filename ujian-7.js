var value = 9;

for (x = 0; x < value; x++) {
  for (y = 0; y < value; y++) {
    if (x < y) {
      document.write("&nbspB");
    } else if (x == y) {
      document.write( x * 2 + 1 );
    } else {
      document.write(" A");
    }
  }
  document.write("<br>");
}
