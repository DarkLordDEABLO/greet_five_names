const nameArr = [
    "james", "kyoka", "simp", "cooligan", "grant"
];
const nameArr2 = [
    "junko", "jimena", "gyatimus", "cheese-man", "tony the tiger"
];
// for (let i = 0; i < nameArr.length - 1; i++) {
//     console.log(`hello ${nameArr[i]}`);
// };
function greetNames(arr) {
    arr.forEach((name) => {
        console.log(`hello ${name}`);
    })
}
global.nameArr = nameArr;
global.nameArr2 = nameArr2;
global.greetNames = greetNames;
