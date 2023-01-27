const fs = require('fs');
const psth = require('path');

fs.readFile(psth.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

// fs.writeFile(psth.join(__dirname, 'files', 'replay.txt'), 'Penulisan ke 2', (err) => {
//     if (err) throw err;
//     console.log('percobaan penulisan selesai');
//     fs.appendFile(psth.join(__dirname, 'files', 'replay.txt'), 'terbaru upload', (err) => {
//         if (err) throw err;
//         console.log('Apeen append selesai');

//         fs.rename(psth.join(__dirname, 'files', 'replay.txt'), psth.join(__dirname, 'files', 'renameFileReplay.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename selesai');
//         })
//     })
// })


// fs.appendFile(psth.join(__dirname, 'files', 'test.txt'), 'Penulisan ke 3 test file', (err) => {
//     if (err) throw err;
//     console.log('percobaan append selesai');
// })
process.on('uncaughtException', err => {
    console.error(`Terjadi kesalahan error :${err}`)
    process.exit(1);
})





// console.log('hello world');
// // console.log(global);
// const {
//     add
// } = require('./math');
// console.log(add(3, 4));
// const os = required('os');
// const path = required('path');

// // console.log(`this print ${os.type()}`);
// // console.log(`this print ${os.vertion()}`);
// console.log(__dirname);
// console.log(__filename);
// console.log(path.dirname());