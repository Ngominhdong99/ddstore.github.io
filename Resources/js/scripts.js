$(document).ready(
    function(){

        // sticky nav
        $('about-section').waypoint(
            function(direction){
                    if(direction == 'down'){
                        $('nav').addClass('sticky');
                    }else{
                        $('nav').removeClass('sticky');
                    }
                }, {
                    offset: '600px'
                }
        )

        // scroll
      
    }
);

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'PHP',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 3,
        name: 'Java',
        coin: 250
    }
];

// for(var i = 0; i < courses.length; i++){
//     console.log(courses[i])
// };

// var isFree = courses.find(function(course, index){
//     return course.name === 'Java';
// });

// console.log(isFree);

//bai 1
// function getRequestBodyFromValues(formValues) {

//     var obj={};
//     formValues.forEach(function (item)
//     {
//         obj[item.field]=item.value;
//     })
//     return obj;
// }
// //bai 2
// function checkPositiveNumbers(numbers) {

//     return numbers.every(function (item){
//         return item>0;
//     })
    
// }
// //bai 3
// function hasFreeCourses(courses) {

//     return courses.some(function (item){
//         return item.vnd===0;
//     })

// }
// //bai 4
// function findAMonsterByAttack(monsters) {
    
//     var a= monsters.find(function (item){
//         return item.attack==150;
//     })
//     if(a)
//     return a;
//     return null;
// }
// //bai 5
// function findStringsInArrayByKeyword(keyword, strings) {

   
//    var mang=strings.filter(function(item,index){
//         return item.search(keyword)!=-1; 
//     })
//     if(!mang)
//     return [];
//     return mang;

// }
// //bai 6
// function findEqualValues(array1,array2)
// {
//     var mang=array1.filter(function(item){
//         return item==array2.find(function(item1){
//             return item1==item;
//         })
//     })
//    if(mang)
//     return mang;
//     return [];
// }

// Array.prototype.forEach2 = function (callback){
//     for(var index in this) {
//         if(this.hasOwnProperty(index)){
//             callback(this[index], index, this)
//         }
//     }
// }

// var courses = [
//     'Javascript',
//     'PHP',
//     'Dart'
// ];

// var result = courses.forEach2(function (course, index, array){
//     console.log(course, index, array)
// })
// Array.prototype.filter2 = function(callback){
//    var output = [];
   
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index], index, this);
//             if(result) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }

// var courses = [
//     {
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         name: 'Javascript',
//         coin: 0
//     },
//     {
//         name: 'Javascript',
//         coin: 250
//     }
// ];

// var filterCourses = courses.filter2(function (course, index){
//     return course.coin > 0;
// });

// console.log(filterCourses);



const sum = (a, b) => a + b;

console.log(2, 2);