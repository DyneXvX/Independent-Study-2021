"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
console.log('This is a very simple setup in Node that can be run via node.');
console.log('Hello World!');
console.log('However with the power of Node we are able to effect the file system.\n');
//creates a file in the the folder called helloWorld.txt and writes one line to that file.
fs_1.default.writeFile('helloWorld.txt', 'Hello World!', function (err) {
    if (err)
        return console.log(err);
    console.log('File was created.');
});
//# sourceMappingURL=index.js.map