import fs from 'fs'

console.log('This is a very simple setup in Node that can be run via node.')

console.log('Hello World!');


console.log('However with the power of Node we are able to effect the file system.\n')
console.log('This is something not possible with standard JavaScript.')

//creates a file in the the file folder called helloWorld.txt and write one line to that file.
fs.writeFile('file\\helloWorld.txt', 'Hello World!', function(err){
    if (err) return console.log(err);
    console.log('File was created.');
});