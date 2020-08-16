type IPattern = (size: number) => void;

let myPattern: IPattern;
myPattern = (size) => {
  console.log(size);
};

myPattern(5);
