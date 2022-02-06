const student = ["Iqbal", "Andi", "Budi", "Dodi"];

const newStudent = ["Mai", "Soraya", "Vanesa"];

const allStudent = student.concat(newStudent); // mengabungkan 2 list array menjadi 1 list array yang baru

console.log(allStudent);

const graduateStudent = [...student, ...newStudent]; // mengabungkan 2 buah array dengan metode Spread

console.log(graduateStudent);
