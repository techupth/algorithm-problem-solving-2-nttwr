function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let result = -1;
  let left = 0;
  let right = students.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (students[mid] < searchStudent) {
      left = mid + 1;
    } else if (students[mid] > searchStudent) {
      right = mid - 1;
    } else {
      result = mid;
      break;
    }
  }
  return result;
}

// ตอบคำถามตรงนี้จ้า
// ตอบ Big O มีค่าเท่ากับ log N เพราะใช้ bimary search
const students1 = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
const searchStudent1 = "John";

const students2 = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
const searchStudent2 = "Andrew";

console.log(findStudentIndex(students1, searchStudent1));
console.log(findStudentIndex(students2, searchStudent2));
