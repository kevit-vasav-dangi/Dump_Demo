const fs = require('fs');
let a = [];
getCurrentFilenames = async () => {
    console.log("Current filenames:");
    fs.readdirSync(__dirname).forEach(file => {
        file;
        a.push(file)
        //console.log(file);
    });
}
getCurrentFilenames()
//let b = a.toString().split("yearly_backup-")
//console.log(b[1]);
console.log(a[10]);
// for (let i = 0; a.length; i++) {

//     var dateType = /(\d{4})([\/-])(\d{1,2})\2(\d{1,2})/;
//     console.log(a[i]);
//     var isMatch = dateType.test(a);
//     if (isMatch) {
//         console.log(isMatch);
//     }
// }