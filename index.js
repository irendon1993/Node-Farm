// File reading system module
const fs = require('fs');

// Blocking, synchronous way
// Takes 2 arguments, path and character encoding
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about the avocado ${textIn}. \nCreated on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File Written!");

//Non-blocking asynchronous way using callback with 2 data values the error(usually first) and the data variables
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
