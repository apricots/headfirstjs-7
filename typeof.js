var test1 = "abdefgh";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = { "abcdefgh" : 123};
var test8 = ['abcdefgh', 123];
function test9() {return 'abdef'};
var test10 = null;


console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);

if (99 == "99") {
  console.log("A number equal a string!");
} else {
  console.log("No way a number equals a string!");
}