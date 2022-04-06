const fs = require('fs');
let a = [];
let c;
getCurrentFilenames = async () => {
    console.log("Current filenames:");
    fs.readdirSync(__dirname).forEach(file => {
        file;
        a.push('/'+file+'/')
        //console.log(file);
    });
}
getCurrentFilenames()
//let b = a.toString().split("yearly_backup-")
//console.log(b[1]);
a=a.toString().split(',')
//console.log(a[6]);
c = a[7].split('backup-'&&'-00');
console.log(c);
// console.log(a);
//c = (''+a+"").split(',')
//console.log(c);
// for (let i = 0; a.length; i++) {

//     var dateType = /(\d{4})([\/-])(\d{1,2})\2(\d{1,2})/;
//     console.log(a[i]);
//     var isMatch = dateType.test(a);
//     if (isMatch) {
//         console.log(isMatch);
//     }
// }