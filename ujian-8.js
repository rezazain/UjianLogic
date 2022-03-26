var value = 9;

for (var x = 0; x < value; x++) {
  for (var y = 0; y < value; y++) {
    if (x == y) {
      document.write(x * 2 + 1);
    } else if (value - y - 1 == x) {
      document.write(y * 2);
    } else {
      if (value - y - 1 <= x || y >= x) {
        document.write(" ");
      } else {
        document.write("A");
      }

      if (x >= y || value - x - 1 >= y) {
        document.write(" ");
      } else {
        document.write("B");
      }

      if (x < y || x < value - y - 1) {
        document.write(" ");
      } else {
        document.write("-");
      }

      if (x > y || x > value - y - 1) {
        document.write("");
      } else {
        document.write("-");
      }
    }
  }
  document.write("<br>");
}
