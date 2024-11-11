// const path = require('path')
// console.log(__dirname)
// console.log(__filename)

// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.resolve('/folder1', 'folder2', 'index.html'))
// console.log(path.resolve('/folder1', '`/folder2', 'index.html'))
// console.log(path.resolve('/folder1', '`/data.json', '../index.html'))
// console.log(path.resolve(__filename, './path.cjs'))
// console.log(path.parse(__dirname))
// console.log(path.format(path.parse(__filename)))

// console.log(path.join('/folder1', 'folder2', 'index.html'))
// console.log(path.join('/folder1', '//folder2', 'index.html'))
// console.log(path.join('/folder1', '//data.json', '../index.html'))
// console.log(path.join(__filename, './path.cjs'))

// ============================================================

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("click", (data) => {
  setTimeout(() => {
    console.log(data);
  }, 1000);
});

emitter.on("target", (data) => {
  setTimeout(() => {
    console.log(data);
  }, 1000);
});


emitter.emit("click", "event is triggered");
emitter.emit("target", "im targeted");

console.log("hello ayaad how are you");
