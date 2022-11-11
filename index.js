// File reading system module
const fs = require('fs');

// Takes 2 arguments, path and character encoding
// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado ${textIn}. \nCreated on ${Date.now()}`;

// //
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File Written!');

// Non-blocking code execution, asynchronous way
// In read file we don't have specify the character encoding
// Third argument is callback function that executes once file is read
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  if (err) return console.log('ERROR!');
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
      console.log(data3);

      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
        console.log('Your file has been written!');
      });
    });
  });
});
console.log('Will read file!');
