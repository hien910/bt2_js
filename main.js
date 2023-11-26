const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ];
   
//    1. Viết function tính thứ hạng trung bình của cả lớp
function hangTB(arr){
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
         sum = sum + arr[i].grade;
    }
    return  sum/(arr.length)
}
console.log("thứ hạng trung bình của cả lớp: ", hangTB(grades));

//    2. Viết function tính thứ hạng trung bình của nam trong lớp
function hangTB_Nam(arr){
    let sum =0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].sex == 'M'){
            sum = sum + arr[i].grade;
            count++;
        }
    }
    return  sum/count;
}
console.log("thứ hạng trung bình của nam trong lớp: ", hangTB_Nam(grades));
//    3. Viết function tính thứ hạng trung bình của Nữ trong lớp
function hangTB_Nu(arr){
    let sum =0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].sex == 'F'){
            sum = sum + arr[i].grade;
            count++;
        }
    }
    return  sum/count;
}
console.log("thứ hạng trung bình của Nữ trong lớp: ", hangTB_Nu(grades));

//    4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
function maxHang_Nam(arr){
    let max = 100;
    for (let i = 0; i < arr.length; i++) {
        if(max > arr[i].grade && arr[i].sex== 'M'){
            max = arr[i].grade;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].sex== 'M' && arr[i].grade == max){
             return arr[i];
        }
    }
}
console.log("học viên Nam có thứ hạng cao nhất trong lớp: ", maxHang_Nam(grades));

//    5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
function maxHang_Nu(arr){
    let max = 100;
    for (let i = 0; i < arr.length; i++) {
        if(max > arr[i].grade && arr[i].sex== 'F'){
            max = arr[i].grade;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].sex== 'F' && arr[i].grade == max){
             return arr[i];
        }
    }
    return  max;
}
console.log("học viên Nữ có thứ hạng cao nhất trong lớp: ", maxHang_Nu(grades));

//    6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
function minHang_Nam(arr){
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        if(min < arr[i].grade && arr[i].sex== 'M'){
            min = arr[i].grade;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].sex== 'M' && arr[i].grade == min){
             return arr[i];
        }
    }
    return  min;
}
console.log("học viên Nam có thứ hạng thấp nhất trong lớp:", minHang_Nam(grades));

//    7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
function minHang_Nu(arr){
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        if(min < arr[i].grade && arr[i].sex== 'F'){
            min = arr[i].grade;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].sex== 'F' && arr[i].grade == min){
             return arr[i];
        }
    }
    return  min;
}
console.log("học viên Nữ có thứ hạng thấp nhất trong lớp: " , minHang_Nu(grades));

//    8. Viết function thứ hạng cao nhất của cả lớp
function maxGrade(arr){
    let max = 100;
    let n =0;
    
    for (let i = 0; i < arr.length; i++) {
        if(max > arr[i].grade ){
            max = arr[i].grade;
            n= i;
        }
    }
    console.log("thứ hạng cao nhất của cả lớp là: ",arr[n])
}
maxGrade(grades);


//    9. Viết function thứ hạng thấp nhất của cả lớp
function minGrade(arr){
    let min = 0;
    let n=0;
    for (let i = 0; i < arr.length; i++) {
        if(min < arr[i].grade){
            min = arr[i].grade;
            n=i;
        }
    }
    console.log("thứ hạng thấp nhất của cả lớp là: ",arr[n]);
}
minGrade(grades);


//    10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
function listFemale(arr){
    console.log("danh sách tất cả học viên Nữ trong lớp: ")
    for (let i = 0; i< arr.length; i++) {
        if (arr[i].sex == 'F'){
            console.log(arr[i]);
        }
    }
}
listFemale(grades);


//    11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function sortByName(arr){
    let newGrades = [];
    newGrades = arr.sort(function(a, b){
        return a.name.localeCompare(b.name);
    });
    return newGrades;
}
console.log("sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái", sortByName(grades));

//    12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
function sortByGrade(arr){
    let newGrades = [];
    newGrades = arr.sort(function(a, b){
        return a.grade - (b.grade);
    });
    return newGrades;
}
console.log( "sắp xếp thứ hạng học viên theo chiều giảm dần: " , sortByGrade(grades));

//    13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
function findName_J(arr){
    const filteredStudents = grades.filter(grades => {
        return grades.sex == 'F' && grades.name.startsWith('J');
    });
    return filteredStudents;
    // return arr.find(item => item.sex === 'F' && item.name.startsWith('J') );
}
console.log("học viên Nữ có tên bắt đầu bằng “J”" ,findName_J(grades));

//    14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
function top_5_Grade(arr){
    let newGrades = [];
    newGrades = arr.sort(function(a, b){
        return a.grade - (b.grade);
    });
    return newGrades.slice(0,5);
}
console.log("top 5 người có thứ hạng cao nhất trong lớp", top_5_Grade(grades));
