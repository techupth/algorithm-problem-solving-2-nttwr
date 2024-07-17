function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let result = -1;
  // for (let i = 0; i < books.length; i++) {
  //   if (books[i].title === searchTitle) {
  //     result = i;
  //   }
  // }
  // return result;
  let left = 0;
  let right = books.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (books[mid].title < searchTitle) {
      left = mid + 1;
    } else if (books[mid].title > searchTitle) {
      right = mid - 1;
    } else {
      result = mid;
      break;
    }
  }
  return result;
}

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

const searchBook1 = "Gone with the Wind";
const searchBook2 = "The Master Mind";

console.log(findBookIndex(books, searchBook1));
console.log(findBookIndex(books, searchBook2));
