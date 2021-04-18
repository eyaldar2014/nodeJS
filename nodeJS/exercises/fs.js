const fs = require('fs')
const theFolder = './2.1';


// 1
// create text file
// fs.writeFileSync("notes2.txt", 'lalala')



// 2 & 3 :
// function callback(err) {
//   if (err) throw err;
//   console.log('success');
// }

// 2
// copy text file
// fs.copyFile("notes.txt", "copy.txt", callback)

// 3
// rename text file
// fs.rename('notes.txt', 'newNotes.txt', callback)



// 4
// list of all file names
// a :
// fs.readdir(theFolder, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });
// 
// b :
// fs.readdirSync(theFolder).forEach(file => {
//   console.log(file);
// });
// 
// c :;
// function callback2(err, files) {
//   if (err) { return console.log('Unable to scan directory: ' + err) }
//   files.forEach(function (file) { console.log(file) });
// };
// fs.readdir(theFolder, callback2)



// 5
// my own
// function callback3(err, file) {
//   if (err) throw err;
//   console.log(file) 
// }
// fs.readFile("copy.txt", 'utf8', callback3)