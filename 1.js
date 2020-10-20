var path = require('path');
var childa = require('child_process').spawn(path.join(__dirname, 'a'));
var childb = require('child_process').spawn(path.join(__dirname, 'b'));
//flag  轮到谁  0a,1b
//aName,bName   a队伍名，b队伍名
//aArray,bArray a布局，b布局
var flag = 0;
var aName, bName, aArray, bArray;


// while (1) {
//     childa.stdin.write('INFO 1.0\n');
//     childa.stdout.on('data', data => aName = data);
//     aName = aName.splice(' ')[0];
//     childa.stdin.write('START 0 1800 31\n');
//     childa.stdin.write('GO 0000 0 00\n');
//     childb.stdin.write('INFO 1.0\n');
//     childb.stdin.write('START 0 1800 31\n');
//     childb.stdin.write('GO 0000 0 00\n');
//     if (flag === 0) {
//         flag++;
//     } else {
//         flag--;
//     }
// }



childa.stdin.write('INFO 1.0\n');
// childa.stdout.on('data', data => aName = data);
// aName = aName.splice(' ')[0];
// console.log(aName);



async function getAName() {
    childa.stdout.on('data', await
        function(data) {
            aName = data.toString();
            console.log('stdout: ' + data);
        });
    // console.log(ap);
}

getAName();
console.log(aName);






// child.stdout.on('data', function(data) {
//     console.log('stdout: ' + data);
// });

// child.stderr.on('data', function(data) {
//     console.log('stderr: ' + data);
// });

// child.stdin.write('INFO 1.0\n'); // Attention!
// child.stdin.write('START 0 1800 31\n');
// child.stdin.write('GO 0000 0 00\n');
// child.stdin.write('RESULT 0 00\n');
// var exec = require('child_process').execFile;

// var fun = function() {
//     console.log("fun() start");
//     exec('a.exe', function(err, data) {
//         console.log(err)
//         console.log(data.toString());
//     });
// }
// fun();

// INFO 1.0										裁判告知选手协议版本，询问参赛选手信息
// NAME 参赛选手姓名						选手回复姓名
// START 1 1800 31							裁判告知选手行棋先后顺序，每局时限，必攻步数
// ARRAY abccddeeffggghhhiiijjkklj			选手回复布局序列
// GO 0000 0 00								裁判告知先行选手可行棋
// BESTMOVE G0F0						选手回复己方行棋着法
// RESULT 0 00								裁判告知选手行棋结果和对方军旗位置
// GO F4G4 1 00								裁判告知选手对方行棋着法、结果和军旗位置
// BESTMOVE F0E0						选手回复己方行棋着法
// RESULT 2 A1								裁判告知选手己方行棋结果和对方军旗位置
// GO E4F4 3 A1							裁判告知选手对方行棋着法、结果和军旗位置