export default function diamond(size) {
  let i = 0,
    j = 0,
    str = "";
  if (size <= 10 && size >= 2) {
    for (i = 1; i <= size; i++) {
      for (j = 1; j <= size - i; j++) {
        str = str.concat(" ");
      }
      for (j = 1; j <= i; j++) {
        str = str.concat("* ");
      }
      console.log(str);
      str = "";
    }
    for (i = 0; i <= size; i++) {
      for (j = 1; j <= i; j++) {
        str = str.concat(" ");
      }
      for (j = 1; j <= size - i; j++) {
        str = str.concat("* ");
      }
      console.log(str);
      str = "";
    }
  } else {
    console.log("Enter no. of lines between 2 and 10");
  }
}
