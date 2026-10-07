// // // // let i=10;
// // // // while(i<15){
// // // // i++
// // // // }console.log(i)


// // // // let n=21;
// // // // while(n<=24){
 
// // // //     console.log(n)
// // // //      n++;
// // // // }

// // // // let n=50;
// // // // while(n>1){
// // // //     if(n%5===0){
   
// // // //     }
// // // // n++;
// // // // } console.log(n)

// // // // let n=1;
// // // // let count=0;
// // // // while(n<=50){
// // // //     if(n%3===0){
// // // //         count++;
// // // //     }
// // // // n++;
// // // // }console.log(count)

// // // //USING WHILE LOOP PRINT REVERSE


// // // // let n=443876;
// // // // let rev=0;
// // // // while(n>0){
// // // //     let digit=n%10;
// // // //     rev=rev*10+digit;
// // // //     n=Math.floor(n/10)
// // // // }
// // // // console.log(rev)


// // // // let n=1221;
// // // // let rev=0;
// // // // let pelindram=n;
// // // // while(n>0){
// // // //     let digit=n%10;
// // // //     rev=rev*10+digit;
// // // //     n=Math.floor(n/10)
// // // // }
// // // // console.log(rev===pelindram)

// // // // let n=23456;
// // // // let count=0;
// // // // while(n>0){
// // // //     count++;
// // // //     n=Math.floor(n/10)
// // // // }
// // // // console.log(count)



// // // // let arr= [2,200,5,70,80,1008];
// // // // let min= arr[0];
// // // // for(let i=1; i<arr.length; i++){
// // // //     if(arr[i]<min){
// // // //         min=arr[i]
// // // //     }
// // // // }
// // // // console.log(min)
// // // // let num=-1764;
// // // // let count=0;
// // // // while(num<0 || num>0){
// // // //     let digits=num%10;
// // // //     count++
// // // //     num=Math.floor(num/10)
// // // // }
// // // // console.log(count)


// // // //FREQUENCE OF A NUMBER
// // // // let n=14743444;
// // // //  let digits=4;
// // // //  let count=0;
// // // //  while(n>0){
// // // //     let last=n%10;
// // // //     n=Math.floor(n/10)
// // // //     if(digits===last){
// // // //      count++;
// // // //     }
// // // //  }
// // // //  console.log(count)

// // // //REVER NUMBER 
// // // // let n=34567;
// // // // let rev=0;
// // // // while(n>0){
// // // //     let digits=n%10;
// // // //     rev=rev*10+digits;
// // // //     n=Math.floor(n/10)
    
// // // // }
// // // // console.log(`the reverce number is ${rev}`);


// // // // write a program that takes a number of days as input and converts it into years, months, and remaining days. Assume:

// // // // 1 year = 365 days
// // // // 1 month = 30 days

// // // // let total=400;
// // // // let year=Math.floor(total/365)
// // // // let remainder=total%365;
// // // // let month=Math.floor(remainder/30);
// // // // let day=remainder%30;
// // // // console.log(` ${day} day,${month} month ,${year} year`)
// // // // let day=276;
// // // // let month=9;
// // // // let year=2024;

// // // // let leapyear=((year%400===0)|| (year%4===0 && year%100))

// // // // let valid=true;
// // // // if(month===1 || month===3 || month===5 || month===7 ||month===10 ||month===12 ){
// // // //     valid=day>=1 && days<=31;
// // // // }else if(month===2 || month===4 || month===6 || month===9|| month===11){
// // // //     valid=day>=1 && day<=30;
// // // // }
// // // //    else if(leapyear){
// // // //         valid=
// // // //     (day>=1 && day<=28)
// // // //     }else{
// // // //         valid=(day>=1 && day<=29)
// // // //     }


// // // // if(valid){
// // // //     console.log("valid")
// // // // }else{
// // // //      console.log(" not valid")
// // // // }

// // // // let n=8;
// // // // let  prim=0;
// // // // for(let i=2;i<=n;i++){
// // // // let count=0
// // // // let num=i;
// // // //    for(let j=2;j<num;j++){
// // // //    if(num%j===0){
// // // //     count++
// // // //    }
// // // // }
// // // // }
// // // //     if(count===0){
// // // //         console.log(num)
// // // //      }
// // // // 

// // // // PRINT THE PRIME NUMBERS 

// // // // let n=7;
// // // //   for(let i=n+1 ; i>=n;i++){
// // // //     let count=0;
// // // //      let num=i;
// // // //      for(let j=1;j<num;j++){
// // // //       if(num%j===0){
// // // //         break
// // // //       }
// // // //     }
// // // //     if(count===2){
// // // //       console.log(num)
// // // //       break
    
// // // //     }
// // // //     i++
// // // //      }
 

// // // // function name(i){ 
// // // //    if(i%2===0){
// // // //       console.log("even")
// // // //     }else{
// // // //         console.log("odd")
// // // //     }  
// // // // }
// // // //  name(11)



// // // // let n=9;
// // // // for(let i=n+1 ; i>=n;i++){
// // // //    let prime=true;
// // // //    let num=i;
// // // //      for(let j=1;j<num;j++){
// // // //       if(num%j===0){
// // // //         prime=false;
// // // //         break
// // // //       }
// // // //     }
// // // //     if(prime){
// // // //       console.log(num)
// // // //       break
    
// // // //     }
// // // //     num++
// // // //      }


// // // //FIND THE NEXT FIRST PRIME NUMBER


// // // // let n = 9;

// // // // for (let i = n + 1; ; i++) {
// // // //   let prime = true;

// // // //   for (let j = 2; j < Math.floor(n); j++) {
// // // //     if (i % j === 0) {
// // // //       prime = false;
// // // //       break;
// // // //     }
// // // //   }

// // // //   if (prime) {
// // // //     console.log(i);
// // // //     break;
// // // //   }
// // // // }



// // // // function add(n){

// // // // let prime=true
// // // // if(n<=1){
// // // //     prime=false
// // // // }else{
// // // //     for(let i=2; i<Math.floor(n);i++){
// // // //         if(n%i===0){
// // // //             return false
// // // //         }
// // // //     }
// // // // }
// // // // if(prime){
// // // //     return (`${n} is prime`)
// // // // }else{
// // // // return (`${n} is not  prime`)}

// // // // }

// // // // console.log(add(7));


// // // // let num = 21;
// // // // let sum = 0;

// // // // for (let i = 1; i < num; i++) {
// // // //     if (num % i === 0) {
// // // //         sum += i;
// // // //     }
// // // // }

// // // // if (sum === num) {
// // // //     console.log(num + " is a Perfect Number");
// // // // } else {
// // // //     console.log(num + " is Not a Perfect Number");
// // // // }


// // // // //var hoisted
// // // // //console.log(a);
 

// // // //      // hoisted




// // // // greet();

// // // // function greet() {
// // // //     console.log("Hello");
// // // // }


// // // // function isPrime(n){
    
    
// // // //     for(let i=n+1; ; i++){
// // // //         let prime=true
// // // //         for(let j=2;j<i; j++){
// // // //             if(i%j===0){
// // // //              prime=false;
// // // //             break
// // // //             }
// // // //         }
// // // //         if(prime){
// // // //         return (i);
    
// // // //         }
        
// // // //     }
    
// // // // }
// // // // console.log(isPrime(6));
// // // // console.log(isPrime(3));
// // // // console.log(isPrime(10));


// // // //GREATER COMMON DIVISION 


// // // // function add(a, b){
// // // //   while(b !== 0){
// // // //     let temp = b;
// // // //     b= a % b;
// // // //     a= temp

// // // //   }
// // // //   return a
// // // // }
// // // // console.log(add(20,30))

// // // // function gcd(a, b) {
// // // //     while (b !== 0) {
// // // //         let temp = b;
// // // //         b = a % b;
// // // //         a = temp;
// // // //     }

// // // //     return a;
// // // // }

// // // // console.log(gcd(12, 18));
// // // // let marks=[9,9,7,6]
// // // // let sum=0;

// // // // for(let i=0; i<marks.length;i++){
// // // //   sum+=marks[i]
// // // // }

// // // //let ave=sum/marks.length
// // // //console.log(sum)

// // // // let arr=[9 ,7,4,90];

// // // // let max=arr[0]
// // // // for(let i=0;i<arr.length;i++){
// // // //   if(arr[i]>max){
// // // //     max=arr[i]
// // // //     console.log(arr[i])
// // // //   }
// // // // }
// // // //console.log(max)

// // // // let arr=[5,6,9,3,2]
// // // // let sum=0;
// // // // for(let i=0;i<=arr.length;i++){ 
// // // //     sum+=i
  
// // // // }
// // // // console.log(sum)

// // // // let arr=[2,4,6,7]
// // // // function ArrayProblem(arr, k) {
// // // //   let count = 0;
 
// // // //   for (let i = 0; i < arr.length - 1; i++) {
// // // //     if (arr[i] + arr[i + 1] === k) {
// // // //       count++;
// // // //     }
// // // //   }

// // // //   console.log(count);

// // // // }


// // // // function ArrayProblem(arr) {
// // // //   let count = 0;

// // // //   for (let i = 0; i < arr.length - 1; i++) {
// // // //     if ((arr[i] + arr[i + 1])%2===0) {
// // // //       count++;
// // // //     }
// // // //   }
// // // //    return count;
// // // // }

// // // // console.log(ArrayProblem([2, 7, 1, 5, 4]));






// // // // function countEvenPairs(arr) {
// // // //     let count = 0;

// // // //     for (let i = 0; i < arr.length - 1; i++) {
// // // //         if ((arr[i] + arr[i + 1]) % 2 === 0) {
// // // //             count++;
// // // //         }
// // // //     }

// // // //     return count;
// // // // }

// // // // console.log(countEvenPairs([2, 7, 1, 5, 4]));

// // // // function max(array){
// // // //   let max=array[0]+array[1]
 
// // // //   for(let i=0;i<array.length-1;i++){
// // // //      let max=array[i]+array[i+1]
// // // //     if(max[i]>max){
// // // //       max=array[i]+array[i+1]
// // // //     }
// // // //   }
// // // //   return max
// // // // }

// // // // console.log(max([2, 7, 1, 5, 4]))



// // // // function arrayOperations(arr, n) {
// // // //   let sum=0;
// // // //   for(let i=0;i<arr.length;i++){
// // // //     let max=arr[0]
// // // //     sum++;
// // // //     if(arr[i]>sum){
// // // //       max=arr[i]
// // // //     }
// // // //   }
  
// // // //   let ave=sum/arr.length
  
// // // //   console.log(arrayOperations(ave, max , sum))
// // // //   // Write your code here
// // // // }

// // // // FIND SUM OF ARRAY


// // // // let sum=0;
// // // // function add(arr){
// // // //   for(let i=0;i<arr.length;i++){
// // // //     sum+=arr[i];
// // // //   }
// // // //   return sum;
// // // // }
// // // // console.log(add([6,4,3,9]))


// // // //FIND THE LARGEST NUMBER IN ARRAY  

// // // // function add(arr){
// // // //   let max=arr[0]
// // // //   for(let i=0;i<arr.length;i++){
// // // //     if(arr[i]>max){
// // // //       max=arr[i]
// // // //     }
    
// // // //   }
// // // //   return max
// // // // }
// // // // console.log(add([4,9,100,60]))

// // // //COUNT HOW MANY NUMBER ARE EVEN IN ARRAY

// // // // function even(arr){
// // // //   let count=0;
// // // //   for(let i=0;i<arr.length;i++){
// // // //     if(arr[i]%2===0){
// // // //       count++;
// // // //     }
// // // //   }
// // // //   return count;
// // // // }
// // // // console.log(even([4,7,9,8,8,8,8]))

// // // // Check if a given number exists in the array

// // // // function exits(arr,n){
// // // //   for(let i=0;i<arr.length;i++){
// // // //     if(arr[i]===n){
// // // //       return true;
// // // //     }
// // // //   }
// // // //   return false
// // // // }
// // // //  console.log(exits([3,5,6,7,7],6))

// // // //Find the sum of every consecutive pair.

// // // // function add(arr){
  
// // // //   for(let i=0;i<arr.length-1;i++){
// // // //    console.log(arr[i]+arr[i+1])
// // // //   }
// // // // }
// // // // console.log(add([3,5,7]))

// // // //Find the maximum sum of consecutive pairs.

// // // //  function add(arr){
// // // //   let maxSum=arr[0]+arr[1]
// // // //   for(let i=0;i<arr.length-1;i++){
// // // //     let sum=arr[i]+arr[i+1]
// // // //     if(sum<maxSum){
// // // //       maxSum=sum
// // // //     }
// // // //   }
// // // //   return maxSum
// // // //  }
// // // // console.log(add([1, 5, 3, 8, 2])); // 11

// // // //Count how many times a number appears.


// // // // function add(arr, n){
// // // //   let count=0;
// // // //   while(n>0){
// // // //     let digits=n%10
// // // //     if(digits===n){
// // // //       count++
// // // //     }
// // // //     n=Math.floor(n/10)
// // // //   }
// // // //   return count
// // // // }
// // // // console.log(add([2,4,6,7,7,7,],7))

// // // // let rag=["apple","mango","banan","grapes","pineaple","kiwi"]
// // // // rag.splice(2,1);
// // // // console.log(rag)

// // // //implement the includes array method
// // // //let arr1=[10,20,30,40,50]

// // // // function add(arr,element){
// // // //   for(let i=0;i<arr.length;i++){
// // // //   if(arr[i]===element){
// // // //     return true
// // // //   }
// // // //   }
// // // //   return false
// // // // }
// // // // console.log(add([10,20,30,40,50],90))
// // // // console.log(add([10,20,30,40,50],60))



// // // // let arr1=[10,20,30,40,50]
// // // // let result=arr1.reverse()
// // // // console.log(result)


// // // //REVERSE COUNT METHOD


// // // // function myReverse(arr){
// // // //   let rev=[]
// // // //   for(let i=arr.length-1;i>=0;i--){
// // // //     rev.push(arr[i]);
// // // //   }
// // // // return rev;
// // // // }
// // // // console.log(myReverse([7,9,0,7,9,6]))

// // // // REVERSE swipe method;


// // // // function swipe(arr){
// // // //   let left=0;
// // // //   let right=arr.length-1;
// // // //   let rev=arr.slice()
// // // //   while(right>left){
// // // //     let temp=rev[left]
// // // //     rev[left]=rev[right]
// // // //     rev[right]=temp;
// // // //     right--;left++;
// // // //   }
// // // //   return rev
// // // // }
// // // // console.log(swipe([6,8,9,7,6,5,4]))

// // // // function maxCountfrequancy(arr){
// // // //   let maxCount=0;
// // // //   let result=arr[0];
// // // //   for(let i=0;i<arr.length;i++){
// // // //     let count=0;
// // // //   for(let j=0;j<arr.length;j++){
// // // //     if(arr[i]===arr[j]){
// // // //       count++;
// // // //     }
// // // //   }
// // // //   if(count>maxCount){
// // // //     maxCount=count
// // // //     result=arr[i]
// // // //   }
// // // //   }
// // // //   return `${result} is maxcount ${maxCount} `;
// // // // }
// // // // console.log(maxCountfrequancy([9,3,4,4,4,9,5]))


// // // // combination of Element -medium
// // // // generate all the 2 size combination of arr=[1,2,3,4,5,6,7]


// // // // function combination(arr,r){
// // // // for(let i=0;i<arr.length;i++){
// // // //   for(let j=i+1;j<arr.length;j++){
// // // //     console.log(arr[i],arr[j])
// // // //   }
   
// // // // }
// // // // }
// // // // console.log(combination([1,2,3,4,5,6,7],2))

// // // // let arr = [1, 2, 3, 4,5,6,7];

// // // // for (let i = 0; i < arr.length; i++) {
// // // //     for (let j = i + 1; j < arr.length; j++) {
// // // //        console.log(arr[i], arr[j]);
// // // //     }
// // // // }

// // // // function add(key, k){
// // // //  for(let i=0;i<key.length;i++){
// // // //   let last=-1;
// // // //   if(key[i]===k){
// // // //     console.log(i)
// // // //     last =i
// // // //   }
// // // //  }
 
// // // // }
// // // //console.log(add([1,2,3,4,5,6,7],5))
// // // //console.log(add(last))


// // // // let str="hello"
// // // // console.log(str[6])
// // // //  str[0]="H"
// // // //  console.log(str[0])
// // //  //string method
// // //  //indexOf
// // // //  let str=" I love javascript"
// // // //  console.log(str.lastIndexOf("a"))
// // // //  console.log(str.includes("janu"))
// // // //  let name="Akshay"
// // // //   console.log(name.startsWith("Ak"))
// // // //   let site="http\\google.com"
// // // //   if(site.startsWith("http")){
// // // //     console.log("site is secute")
// // // //   }else{
// // // //  console.log("wrong site")
// // // //   }
// // // // let nname='latha'
// // // // if(nname.endsWith("ha")){
// // // //      console.log("right")
// // // // }else{
// // // //      console.log("wrong")
// // // // }


// // // //let str="hello world"
// // //  //console.log(str.slice(6))
// // //   //console.log(str.length)
// // // //   const arr=["h","e","l","l","o"]
// // // //    console.log(str.slice(5))

// // // //    let email="lathasingh@gmail.com"
// // // //    if(!email.includes("@")){
// // // //     console.log("involid email")
// // // //    }else{
// // // //     let idx=email.indexOf("@")
// // // //     let username=email.slice(0,idx)
// // // //      console.log("userna:",username)
// // // //      let domin=email.slice(idx+1)
// // // //       console.log(domin)
// // // //    }

// // // // let str="abc"
// // // // console.log(str.charCodeAt(2))
// // // // let ch="A"
// // // // let ascii=ch.charCodeAt(0)
// // // // if(ascii>=65 && ascii<=91 ){
// // // //      console.log("capit letter")
// // // // }else if(ascii>=97 && ascii<=122){
// // // //      console.log("small letter")
// // // // }else{
// // // //     console.log("special charactor") 
// // // // }

// // // // let str="i love javascript"
// // // // let result=str.replaceAll(" ","-")
// // // // console.log(result)


// // // // let str = " df gh j";

// // // // for (let i = 0; i < str.length; i++) {
// // // //     //console.log(str[i], "=", str.charCodeAt(i));
// // // // }


// // // // let arr=[20,40,50,80,122 ,9,6];

// // // // for (let i = 0; i < arr.length; i++) {
// // // //     console.log(arr[i], "=", String.fromCharCode(arr[i]));
// // // // }

// // // // let password="Latha@232"
// // // // let upper=false;
// // // // let lower=false;
// // // //  let digits=false
// // // // let special=false;
// // // // for(let i=0;i<password.length;i++){
// // // //     let ch=password[i]
// // // //     if(ch>="a" && ch<="z"){
// // // //         lower=true
// // // //     }else if(ch>="A" && ch<="Z"){
// // // //         upper=true
// // // //     }else if(ch>="0" && ch<="9"){
// // // //         digits=true
// // // //     }else{
// // // //         special=true
 
// // // // }
// // // //    }
// // // // if (password.length >= 8 &&
// // // //     upper &&
// // // //     lower &&
// // // //     digits &&
// // // //     special){
// // // //     console.log("valid")
// // // // }else{
// // // //     console.log("not valid")
// // // // }
// // // // //console.log(password)

// // // // const movie= {
// // // //     name: "pushpa",
// // // //     gengre: "action",
// // // //     releaseDate:2-5-1998,

// // // // };
// // // // console.log(movie)
// // // // movie.director="latha"
// // // // console.log(movie)
// // // // delete movie.name;
// // // // console.log(movie)

// // // //COUNT THE KEY VALUE PAIR IF THE OBJECT

// // // // 1. Print each student’s name and city.
// // // // 2. Calculate total marks for each student.
// // // // 3. Print average marks.
// // // // 4. Find topper.
// // // // 5. Print students whose JS marks are greater than 80.

// // // //remov duplical of string


// // // // function remove(str){
// // // //   let word=str.split(" ")
// // // //   let result=[];
// // // //   for(let i=0;i<word.length;i++){
// // // //     if(!result.includes(word[i])){
// // // //       result.push(word[i])
// // // //     }
// // // //   }
// // // //   return result.join("");
// // // // }
// // // // let str="the dog the cat"
// // // // console.log(remove(str))

// // // //5
// // // //2 4 6 8 10
// // // //6 8 12 16 18




// // // // let n=5;
// // // // for(let i=1;i<=n;i++){
// // // // let row=""
// // // //   for(let j=1;j<=n-i;j++){ 
// // // //     row+=" "
// // // //   }
// // // //   for(let k=1;k<(2*i-1);k++){
// // // //     row+=" *"
// // // //   }
// // // //   console.log(row)
// // // // }

// // // // for(let i = n - 1; i >= 1; i--){
// // // // let row=""
// // // //   for(let j=1;j<=n-i;j++){ 
// // // //     row+=" "
// // // //   }
// // // //   for(let k=1;k<=(2*i-1);k++){
// // // //     row+=" *"
// // // //   }
// // // //   console.log(row)
// // // // }
// // // //dimond print

// // // // let n = 5;

// // // // for (let i = 1; i <= n; i++) {
// // // //     let row = "";

// // // //     for (let j = 1; j <= n - i; j++) {
// // // //         row += "  ";
// // // //     }

// // // //     for (let k = 1; k <= (2 * i - 1); k++) {
// // // //         row += " *";
// // // //     }

// // // //     console.log(row);
// // // // }

// // // // for (let i = n - 1; i >= 1; i--) {
// // // //     let row = "";

// // // //     for (let j = 1; j <= n - i; j++) {
// // // //         row += "  ";
// // // //     }

// // // //     for (let k = 1; k <= (2 * i - 1); k++) {
// // // //         row += " *";
// // // //     }

// // // //     console.log(row);
// // // // }


// // // // let arr = ["apple", "kiwi", "banana", "fig", "orange"];

// // // // arr.sort((a, b) => a.length - b.length);

// // // // console.log(arr);


// // // //let str = "banana";

// // // // b - 1
// // // // a - 3
// // // // n - 2

// // // // {b : 1, a : 3, n: 2}

// // // function getFrequencies(collection) {
// // //   const freq = {};
// // //   for (let ele of collection) {
// // //     if (freq[ele] === undefined) {
// // //       freq[ele] = 1;
// // //     } else {
// // //       freq[ele] = freq[ele] + 1;
// // //     }
// // //   }
// // //   return freq;
// // // }

// // //  console.log(getFrequencies([10, 10, 20, 30, 10, "banana", "banana"]));
 

// // // // const freq = { b: 1, a: 3, n: 2 };
// // // // let max = -Infinity;
// // // // let ans = "";
// // // // for (let key in freq) {
// // // //   console.log(key, freq[key]);
// // // //   if (max < freq[key]) {
// // // //     max = freq[key];
// // // //     ans = key;
// // // //   }
// // // // }

// // // // Sum of array
// // // // Count even numbers in array
// // // // Frequency counter
// // // // First non repeating character
// // // // Most repeating character
// // // // Check palindrom string
// // // // Count words in a sentence
// // // // Find second maximum
// // // //let deepCopy1 = JSON.parse(JSON.stringify(nestedArr));
// // // //let deepcopy=JSON.parse(JSON.stringify(arr))


// // // function countFreq(collection){
// // //   let freq={}
// // //   for(let key of collection){
// // //     if(freq[key]===undefined){
// // //       freq[key]=1
// // //     }else{
// // //       freq[key]+=1
// // //     }
// // //   }
// // //   return freq
// // // }
// // // console.log(countFreq("lathaaa"))



// // // var lengthofLongestString=function(arr){
// // //  let set=new Set()
// // //  let left=0
// // //  let maxlength=0
// // //  for(let right=0;right<arr.length;right++){
// // //   let ch=arr[right]
// // //   if(set.has(ch)){
// // //     while(set.has(ch)){
// // //       set.delete(arr[left])
// // //       left++
// // //     }
// // //   }
// // //   set.add(ch)
// // //   maxlength=Math.max(maxlength ,right-left+1)
// // //  }
// // //   return maxlength
// // // }
// // // console.log(lengthofLongestString("abcd"))
// // // //s=[1,1,0,1,0]


// // // function occurence(obj1,obj2){
// // // let result={}
// // // for(let key in obj1){
// // //   if(obj2[key]!==undefined){
// // //     result[key]=obj1[key]*obj2[key]

// // //   }else{
// // //     result[key]=obj1[key]
// // //   }
// // // }
// // // for(let key in obj2){
// // // if(result[key]===undefined){
// // //   result[key]=obj2
// // // }
// // // }
// // // return result
// // // }

// // // let obj1={a:2,b:4,c:5,d:6}
// // // let obj2={b:4,a:6,c:7,d:8}
// // // console.log(occurence(obj1,obj2))


// // // function finf(arr){
// // //   let seen={}
// // //   let deplical={}
// // //   let result=[]
// // //   for(let i=0;i<arr.length;i++){
// // //     if(seen[arr[i]]===undefined){
// // //       seen[arr[i]]=true
// // //     }else if(duplical[arr[i]]===undefined){
// // //       duplical[arr[i]]=true
// // //       result.push[arr[i]]
// // //     }
// // //   }
// // //   return result
// // // }
// // // console.log(finf[2,3,4,4,4,5,5,6])

// // // function add(a,b){
// // //   console.log(a+b)
// // // }
// // // let result=add(30,10)
// // // console.log(result)

// // // if(true){
// // //   a= 10
// // // }
// // // console.log(a)
// // /*  
// //     Var                     let                     const 
// //   function scope             block                  block
// //   reassign and re declare  can't be redeclear       nothin cann
// // */


// // // 1
// // // 21
// // // 321
// // // 4321
// // // 54321
// // // let n=5
// // //  for(let i=1;i<=n;i++){
// // //     let row=""
// // //     for(let j=1;j<=n-i;j++){
// // //       row+=" "  
// // //     }
// // //     for(let k=1;k<=2*i-1;k++){
// // //       row+="*"
// // //     }
// // //     console.log(row)
// // //   }
// //   //Write your code here
// // // let dup=[]
// // // let arr=[2,3,4,4,4,5]
// // // let count=0
// // // for(let i=0;i<arr.length;i++){
// // //   dup.push(arr[i])
// // //   if(!dup===arr[i]){
// // //  count++
// // //   }
// // // }
// // // console.log(dup)

// // // let fre={}
// // // let arr=[2,3,4,4,4,5]
// // // let result=[]
// // // for(let key=0;key<arr.length;key++){
// // //   if(fre[arr[key]]===undefined){
// // //      fre[arr[key]]= true
// // //     result.push(arr[key])
// // //   }
 
// // // }
// // //  console.log(result)
// // //  let str="i love javascript"
// // //  //let words=str.split(" ")
// // //  let str2=""
// // //  for(let i=0;i<words.length;i++){
// // //   if(words[i].length===str2.length){
// // //     str2=words[i]
// // //   }
// // //  }
// // //  console.log(str2)

// // // let str="i love javascript"
// // // let long=""
// // // let current=""
// // // for(let i=0;i<=str.length;i++){
// // //  if(i===str.length || str[i]=== " "){
// // // if(current.length >long.length ){
// // // long=current

// // // }

// // // current=" "
// // //  }else{
// // //   current+=str[i]
// // // }

// // // }
// // // console.log(long)

// // // let str="lathasinghaaaa"
// // // let vowels=0
// // // let consonent=0
// // // for(let ch of str.toLowerCase()){
// // //   if(ch>="a" &&ch<="z"){
// // //     if(!"aeuio".includes(ch)){
// // //       vowels++
// // //     }
// // //     else{
// // //       consonent++
// // //     }
// // //   }
// // // }
// // // console.log(`vowels:${vowels},consonent:${consonent}`)

// // // function add(str){
// // // let freq={}
// // // for(let key of str){
// // //   if(freq[key]===undefined){
// // //     freq[key]=1
// // //   }else{
// // //     freq[key]+=1
// // //   }
// // // }

// // // for(let key of str){
// // //   if(freq[key]===1){
// // //     return key
// // //   }
// // // }
// // // return null
// // // }
// // // console.log(add("javascriptuuuu"))


// // // function sprialMat(mat){
// // //     let n = mat.length; 
// // //     let m =mat[0].length  
// // //     let left = 0,right = n-1;
// // //     let top = 0,bottom = m-1
// // //     let res = []
// // //     while(left <= right && top <= bottom){
// // //         for(let i=left;i<=right;i++){
// // //             res.push(mat[top][i])
// // //         }
// // //         top++
        
// // //         for(let i=top;i<=bottom;i++){
// // //             res.push(mat[i][right])
// // //         }
// // //         right--
        
// // //         if(top < bottom){
// // //           for(let i=right;i>=left;i--){
// // //               res.push(mat[bottom][i])
// // //           }
// // //           bottom--
// // //         }
// // //         if(left < right){
// // //             for(let i=bottom;i>=top;i--){
// // //                 res.push(mat[i][left])
// // //             }
// // //             left++
// // //         }
        
// // //     }
// // //     return res
// // // }

// // // const mat =
// // // [
// // // [1 ,2 ,3],
// // // [4, 5, 6],
// // // [ 7,8, 9]
// // // ]

// // // let arr=[1,3,2,4]

// // // let count=0
// // // for(let start=0;start<arr.length;start++){
// // //   for(let end=start+1;end<arr.length;end++){
// // //    // sub.push(end)
// // //     count++
    
// // //   }
 
// // // } console.log(count)

// // // let str="BANANA"
// // //let str=s.split("")

// // // for(let i=0;i<arr.length;i++){
// // //   for(let j=i+1;j<arr.length;j++){
// // //    let sub=str.slice(i,j)
// // //    if(sub.length===3){
// // //     console.log(sub)
// // //    }
// // //   }
// // // }






// // // let n=mat.length;
// // //  let sum=0
// // //  let max=0
// // //  let smax=0
  

// // // for(row=0;row<n;row++){
  
// // //   for(col=0;col<m;col++){
// // //     sum+= (mat[row][col])
// // //     if(smax<mat[row][col]){
// // //       if(max<mat[row][col]){
// // //         smax = max
// // //         max = mat[row][col]
// // //       }else{
// // //         smax=mat[row][col]
// // //       }
// // //     }
    
// // //     sum +=(mat[col][row])
    
// // //     arr.push(mat[col][row])
// // //   }
 
  
// // // }


// // //   console.log(arr[row][col])

// //   // let mat=[[1,2,3],
// //   //         [ 4,8,9],
// //   //         [7,8,9]
// //   // ]
// //   // let max=-Infinity
// //   // let smax=-Infinity
// //   // for(let i=0;i<mat.length;i++){
// //   //   for(let j=0;j<mat[0].length;j++){
// //   // if(mat[i][j]>smax){
// //   //   if(mat[i][j]>max){
// //   //     smax=max
// //   //     max=mat[i][j]
// //   //   }else{
// //   //     smax=mat[i][j]
// //   //   }
// //   // }
// //   //   }
   
// //   // }
// //   //  console.log(smax)
// //   //   console.log(max)

// //   //   let obj1={
// //   //     name:"latha",
// //   //     age:26,
// //   //     batch:"obh12",
// //   //     class:3
// //   //   }
    
// //   //   let obj2={
// //   //     name:"latha1",
// //   //     age:216,
// //   //     batch:"obh123"
// //   //   }
// //   //   let result={
// //   //     ...obj1,...obj2
// //   //   }
// //   //   console.log(result)

// // // for(let i=0;i<arr.length;i++){
// // //  let sum = 0
// // //   for(let j=0;j<arr.length;j++){
// // //     if(j!==i){
// // //       sum +=arr[j]
// // //     }
// // //   }
// // //   arr2.push(sum)
// // // }
// // // console.log(arr2)

// // // let length=arr.length
// // // for(let i=0;i<length;i++){
// // //   arr.pop()
// // // }console.log(arr)
// // // Q1 - Sum of all the other array elements than itself.
// // //let arr= [1,2,3,4]
// // // Output- [2+3+4, 1+3+4, 1+2+4, 1+2+3] => [9, 8, 7, 6] 
// // // let result=[]
// // // for(let i=0;i<arr.length;i++){
// // //   let sum=0;
// // //   for(let j=0;j<arr.length;j++){

// // //     if(j!==i){
// // //     sum+=arr[j]
// // //     }
// // //   }
// // //   result.push(sum)
// // // }
// // // console.log(result)

// // // let arr=[[1,2,3],
// // //          [5,6,7],
// // //          [6,28,98]]
// // //         let result=[]
// // // for(let i=0;i<arr.length-1;i++){
// // //   for(let j=0;j<arr.length-1;j++){
// // //     console.log(arr[i][j],arr[i][j+1])
// // //     console.log(arr[i+1][j],arr[i+1][j+1])
// // //   }
// // // }

// // // let arr=[[1,2,3],
// // //          [5,6,7],
// // //          [6,28,98]]
// // //         let result=[]
// // //         let sum=0
// // // for(let i=0;i<arr.length-1;i++){
// // //   for(let j=0;j<arr.length-1;j++){
// // //     sum+=arr[i][j]
    
// //     // console.log(arr[i][j],arr[i][j+1])
// //     // console.log(arr[i+1][j],arr[i+1][j+1])
// // //   }
// // // } console.log(sum)
// // //let colSum = [];

// // // function pairoftwo(arr,k){
// // //   let sum =0
// // //   let result=[]
// // //   for(let i=0;i<arr.length;i++){
// // //     for(let j=0;j<arr.length;j++){
// // //       sum+=arr[i]+arr[j]
// // //       if(arr[i][j]===k){
// // //         result.push(sum)
// // //       }
// // //     }
// // //     return result
// // // }
// // // }
// // // let arr=[1,2,3,4,5]
// // // console.log(pairoftwo(arr,2))



// // /*  

// // 1
// // 0 1
// // 1 0 1
// // 0 1 0 1
// // 1 0 1 0 1

// // */


// // // let n=5
// // // for(let i=0;i<n;i++){
// // //   let row=""
// // //   for(let j=0;j<=i;j++){
// // // if((j+i)%2==0){
// // //   row += "1 "
// // // }else{
// // //   row += "0 "
// // // }
// // //   }
// // //   console.log(row)
// // // }


// // // let arr=[
// // // [1, 4, 2],
// // // [10, 20, 30],
// // // [5, 6, 9]]
// // // function maxlength(arr){
// // //   let diff=[]
// // //     let max=-Infinity
// // //     let min=Infinity
// // //   for(let i=0;i<arr.length;i++){
  
// // //     for(let j=0;j<arr.length;j++){
// // //       if(arr[i][j]>max){
// // //         max=arr[i][j]
// // //       }
// // //       if(arr[i][j]<min){
// // //         min=arr[i][j] 
// // //       }
// // //     }
   
// // //   }
// // //    console.log(max)
// // //    console.log(min)
// // //     diff.push(max-min)
// // //   return diff
// // // }
// // // console.log(maxlength(arr))



// // //  let arr=[[1,2,3],[2,3,4]]
// // // // sunofrow(arr)
// // // function sumofarray(arr){
// // //   let result=[]
// // //   for(let i=0;i<arr.length;i++){
// // //     let sum=0
// // //     for(let j=0;j<arr[0].length;j++){
// // //       sum+=arr[i][j]
// // //     }
// // //     let row=[]
// // //     for(let j=0;j<arr[0].length;j++){
// // //       row.push(sum)
// // //     }
// // //      result.push(row)
// // //   }
 
// // //   return result
// // // }
// // // console.log(sumofarray(arr))



// // // function subArray(arr){
// // //   let max=-Infinity
// // //     for(let j=0;j<arr.length;j++){
// // //       for(let k=j+1;k<arr.length;k++){
// // //        let pro=arr[j]*arr[k]
// // //        if(pro>max){
// // //         max=pro
// // //        }
// // //       }
// // //     }
// // //     return max
// // //   }
// // //   //return count
// // // let arr=[1,2,-3,4]
// // // console.log(subArray(arr))

// // // function longestlengthOfString(str){
// // //   let left=0
// // //   let maxlength=0
// // //   let set=new Set()
// // //  for(let i=0;i<str.length;i++){
// // //   let ch=str[i]
// // //   while(set.has(ch)){
// // //     if(set.has(ch)){
// // //       set.delete(str[left])
// // //       left++
// // //     }
    
// // //   }
// // //   set.add(ch)
// // //     maxlength=Math.max(maxlength,i-left+1)
// // //  }
// // // return maxlength
// // // }
// // // let str="abcae"
// // // console.log(longestlengthOfString(str))


// // // function reverseVowel(str){
// // //   for(let i=0;i<str.length;i++){
// // //     for(let j=0;j<str.length;j++){
      
// // //       if("aeuoi".includes(arr[i][j])){

// // //       }
// // //     }
// // //   }
// // // }


// // // function binarySearch(arr,target){
// // //   let left=0;right=arr.length-1
// // //   let result=-1
// // //   while(left<=right){
// // //     let mid=Math.floor((left+right)/2)
// // //     if(arr[mid]===target){
// // //       result=mid
// // //       right=mid-1
// // //     }else if(arr[mid]<target){
// // //       left=mid+1
// // //     }else{
// // //       right=mid-1
// // //     }
// // //   }
// // //  return result
// // // }
// // // let arr=[1,1,4,5,6,7]

// // // console.log(binarySearch(arr,1))

// // // let arr=[2, 4, 6, 8, 10], target = 6
// // // //Output: false
// // // function existsOrNot(arr,target){
// // //  let left=0;right=arr.length-1
// // //  let result=-1
// // //  while(left<=right){
// // //   let mid=Math.floor((left+right)/2)
// // //   if(arr[mid]>target){
// // //    result=mid
// // //    right=mid-1
// // //   }else{
// // //     left=mid+1
// // //   }
// // //  }
// // //  return result
// // // }
// // // console.log(existsOrNot(arr,target))
// // // function rotateArray(arr,target){
// // // let left=0;right=arr.length-1
// // // let result=-1
// // // while(left<=rigth){
// // //   let mid=Math.floor((left+right)/2)
// // //   if(arr[mid]===target){
// // //     return mid
// // //   }
// // //   if(target<arr[mid] && arr[mid])
// // // }
// // // }
// // // let arr=[4,5,6,7,0,1,2]
// // // console.log(rotateArray(arr,0))

// // // pannada
// // // mairu purdingi

// // // const arr=[1,1,2,3,3,4,5]

// // // let uniq=new Set()
// // // let duplicate=new Set()
// // // for(let i=0;i<arr.length;i++){
// // //   if(uniq.has(arr[i])){
// // //     duplicate.add(arr[i])
    
// // //   }else{
// // //     uniq.add(arr[i])
// // //   }
  
// // // }
// // // console.log(uniq)
// // // console.log(duplicate)


// // // //FIND THE FIRST REPETED ELEMENT in set
// // // const arr2=[1,1,2,3,3,4,5]
// // // const set1=new Set()
// // // for(let key of arr2){
// // //   if(set1.has(key)){
// // //     console.log(key)
// // //     break
// // //   }else{
// // //     set1.add(key)
// // //   }
// // // }
// // //INTERSECTIONOF 2 ARRAY


// // // const arr3=[1,2,3,4,5]
// // // const arr4=[0,2,3,4,5,6,8]
// // // const set3=new Set(arr3)
// // // for(let key of arr4){
// // // if(set3.has(key)){
// // //   console.log(key)
// // // }
// // // }





// //let arr=[1,1,2,2,3,4,5,6]
// // let uniq=new Set()
// // let duplical=new Set()
// // for(let key of arr){
// //   if(uniq.has(arr[key])){
// //     duplical.add(arr[key])
// //   }else{
// //     uniq.add(arr[key])
// //   }
// // }



// // // let map=new Map()
// // // for(let key of arr){
// // //   if(map.has(key)){
// // //     map.set(key,map.get(key)+1)
// // //   }else{
// // //     map.set(key,1)
// // //   }
// // // }
// // // console.log(map)


// // // let arr = [4, 5, 1, 2, 1,4,4, 4, 5, 6]
// // // function mostFreq(arr){
// // // let map=new Map()
// // // for(let key of arr){
// // //   if(map.has(key)){
// // //     map.set(key,map.get(key)+1)
// // //   }else{
// // //     map.set(key,1)
// // //   }
// // // }

// // // let max=0
// // // for(let key of arr){
// // //   if(map.get(key)>max){
// // //     max=map.get(key)
// // //     max=key
// // //   }
// // // }
// // // return max
// // // }
// // // console.log(mostFreq(arr))


// // // function twoSum(arr, target) {
// // //     let map = new Map();

// // //     for (let i = 0; i < arr.length; i++) {
// // //         let current = arr[i];
// // //         let need = target - current;

// // //         if (map.has(need)) {
// // //             return [map.get(need), i];
// // //         }

// // //         map.set(current, i);
// // //     }

// // //     return [];
// // // }

// // // let arr = [5, 8, 10, 2];

// // // console.log(twoSum(arr, 12));


// // // function maxlength(str){
// // //   let map=new Map()
// // //   for(let key of str){
// // //     if(map.has(key)){
// // //       map.set(key,map.get(key)+1)
// // //     }else{
// // //       map.set(key,1)
// // //     }
// // //   }
// // //   let max=-Infinity
// // //   let charcode=""
// // //   for(let [key,value]  of map){
// // //   if(value>max){
// // //     max=map.get(key)
// // //     charcode=key
// // //   }
// // //   }
// // //   return charcode
// // // }
// // // let str="abbsscccsssssss"
// // // console.log(maxlength(str))

// // //FIND THE PANAGRAM

// // // function isPanagram(str){
// // //   let  set=new Set(str.toLowerCase())
// // //   for(let i=97;i<123;i++){
// // //     if(!set.has(String.fromCharCode(i))){
// // //     return false
// // //     }
// // //   }
// // //   return true
// // // }
// // // let str="The quick brown  ther the fox jumps over the lazy dog"
// // // console.log(isPanagram(str))

// // // Input:
// // // [1,2,3,4]
// // // [3,4,5,6]

// // // Output:
// // // [3,4]

// // // function intersection(arr1,arr2){
// // //   let set=new Set(arr2)
// // //   for(let key of arr1)
// // //   if(set.has(key)){
// // //     console.log(key)
// // //   }
  
// // //   //return set
// // // }
// // // let arr1=[1,2,3,4]
// // // let arr2=[3,4,5,6]
// // // intersection(arr1,arr2)


// // //   for (let ch of str) {
// // //     if (ch >= "a" && ch <= "z") {
// // //       set.add(ch);
// // //     }
// // //   }

// // //   if (set.size === 26) {
// // //     return true;
// // //   } else {
// // //     return false;
// // //   }


// // // console.log(isPanagram(str));

// // // Find the highest frequency character in a str (map)



// function sortByFrequency(array) {
//     let map = new Map();

//     for (let key of array) {
//         if (map.has(key)) {
//             map.set(key, map.get(key) + 1);
//         } else {
//             map.set(key, 1);
//         }
//     }

//     let arr = [...map];

//     arr.sort((a, b) => {
//         let valA = a[0];
//         let freqA = a[1];
//         let valB = b[0];
//         let freqB = b[1];

//         if (freqA === freqB) {
//             return valB - valA;
//         }

//         return freqB - freqA;
//     });

//     return arr.map(item => item[0]);
// }

 
// // // function binarysirtred(arr,target){
// // //   let left=0
// // //   let right=arr.length-1
// // //   let ans=-1
// // //  while(left<=right){
// // //   let mid=Math.floor((right+left+1)/2)
// // //   if(arr[mid]>target){
// // //      ans=mid
// // //     right=mid-1
  
// // //   }else{
// // //     right=mid+1
// // //   }
// // //  }
// // //  return ans
// // // }
// // // let arr=[1,2,3,4,5,5,6]
// // // console.log(binarysirtred(arr,5))

// // // function highestnumber(arr){
// // //    let uniq=new Set()
// // // }
// // // //const arr2 = [1, 4, 6, 7, 10, 15];
// // // target = 7;

// // //  const arr4 = [1, 1, 2, 2, 3, 4, 5, 5];

// // // const unique = new Set();
// // // const duplicate = new Set();

// // // for (let i = 0; i < arr4.length; i++) {
// // //   if (unique.has(arr4[i])) {
// // //     duplicate.add(arr4[i]);
// // //   } else {
// // //     unique.add(arr4[i]);
// // //   }
// // //   for(let key of duplicate){
// // //   if(duplicate===key){
// // //     break
// // //   }
// // // }
// // // }
// // // console.log(duplicate);


// // // function isophomic(str1,str2){
// // //  //let map=new Map()
// // //   if(str1.length!==str2.length){
// // //        return false
// // //   }
// // //   let map1=new Map()
// // //   let map2=new Map()
// // //   for(let i=0;i<str1.length;i++){
// // //     let ch1=str1[i]
// // //     let ch2=str2[i]
// // //    if(!map1.has(ch1)){
// // //     if(map1.get(ch1)!==ch2){
// // //         return false
// // //     }
// // // }
// // //     else{
// // //       map1.set(ch1,ch2)
// // //     }
// // //     if (map2.has(ch2)) {
// // //             if (map2.get(ch2) !== ch1) {
// // //                 return false;
// // //             }
// // //     }else{
// // //       map2.set(ch2,ch1)
// // //     }
// // //   }
// // // return true
// // // }
// // // let str1="asdf"
// // // let str2="bnmj"
// // // console.log(isophomic(str1,str2))

// // // function areAnagram(str1,str2){
// // //   let map=new Map()
// // //   let map1=new Map()
// // //   if(str1.length!==str2.length){
// // //     return false
// // //   }
// // //   for(let key of str1){
// // //     if(map.has(key)){
// // //     map.set(key,map.get(key)+1)
// // //     }else{
// // //       map.set(key,1)
// // //     }
// // //   }
// // //  // console.log(map)
// // //   for(let key of str2){
// // //     if(map1.has(key)){
// // //       map1.set(key,map1.get(key)+1)
// // //     }else{
// // //       map1.set(key,1)
// // //     }
// // //     // console.log(map1)
// // //   }
// // //   for(let key of map){
// // //     if(!map1.has(key)){
// // //       return true

// // //     }else{
// // //       return false
// // //     }
// // //   }
 
// // // }

// // // let str1="helle"
// // // let str2="eollh"
// // // console.log(areAnagram(str1,str2))
// // //important for mock two  sum and three sum



// // // function isPanagram(str){
// // //   let set=new Set(str)
// // // for(let i=97;i<=122;i++){
// // //   let ch=String.fromCharCode(i)
// // //   if(!set.has(ch)){
// // //     return false
// // //   }
// // // }

// // // return true
// // // }
// // // let str="Mr. Jock, TV quiz  bags few lynx" 
// // // console.log(isPanagram(str.toLowerCase()))


// // function sumof(nums, target) {
// //     let left=0;
// //     let right=nums.length-1;
// //     let first=-1
// //     let sec=-1
// //     while(left<=right){
// //         let mid=Math.floor((right+left)/2)
// //         if(nums[mid]===target){
// //             first=mid
// //             right=mid-1
// //         }else if(nums[mid]<target){
// //             left=mid+1
// //         }else{
// //             right=mid-1
// //         }
// //     }
// //     left=0;right=nums.length-1
// //     while(left<=right){
// //         let mid=Math.floor((right+left)/2)
// //         if(nums[mid]===target){
// //             sec=mid
// //             left=mid+1
// //         }else if(nums[mid]<target){
// //             left=mid+1
// //         }else{
// //             right=mid-1
// //         }
// //     }

// // return [first,sec]
    
// // };
// // console.log(sumof([1,2,3,8,8,8,9],8))

// // function countup(i){
// //   if(i===0){
// //     return
// //   }
// //   countup(i-1)
// //   console.log(i)
  
// // }
// // countup(5)



// // function power(n,i){
// //  if(i===0){
// //   return 1
// //  }
// //  return  power(n, i-1)*n
// // // console.log(i)
// // }
// // power(2,5)


// // function findSum(arr,  sum) {
// //     let map = new Map();
// //     let count = 0;

// //     for (let i = 0; i < arr.length; i++) {
// //         let need = sum - arr[i];

// //         if (map.has(need)) {
// //             count += map.get(need);
// //         }
// //      map.set(arr[i],(map.get(arr[i])||0)+1)
// //     }

// //     return count;
// // }
// // console.log(findSum([1,2,2,3,4,5],4))




// // function minDeletions(str, str1) {
// //   let i = 0;
// //   let count = 0;

// //   for (let j = 0; j < str1.length; j++) {

// //     if (str[i] === str1[j]) {
// //       i++;
// //     } else {
// //       count++;
// //     }
// //   }

// //   return count;
// // }

// // let str = "star";
// // let str1 = "starter";

// // console.log(minDeletions(str, str1)); // 1


// // var majorityElement = function(nums) {
// //     let map=new Map()
// //     let max=0
// //     for(let key=0;key<nums.length;key++){
// //         if(map.has(nums[key])){
// //       map.set(nums[key],map.get(nums[key])+1)
// //     }else{
// //         map.set(nums[key],1)
// //     }
// // }
// //     console.log(map)
// //     for(let [i,vales] of map){
// //         if(vales>max){
// //             max=i
// //         }
// //     }
// //     return max
// // };
// // let nums=[2,2,1,1,1,2,2]
// // console.log(majorityElement(nums))


 


// // function print(n){
// //     if(n===0){
// //         return 1
// //     }
// //     print(n-1)
// //     console.log(n)
// // }
// // let n=5
// // print(n)

// // let n=56
// // let count=0
// // while(n>1){
// //   let digits=n%10;
// //   count+=digits;
// //   n=Math.floor(n/10)
// // }
// // console.log(count)

// // function print(x,y) {
// //     if (x<y) {
// //         return 0;
// //     }

// //    // console.log(x);

// //    return 1+ print(x-1,y);
// // }

// // console.log(print(9,5));

// // 367
// // 507
// // 628

//   let mat=[[1,2,3],
//           [ 4,8,9],
//           [7,8,9]
//   ]

// //   let max=-Infinity
// //   let smax=-Infinity
// //   for(let i=0;i<mat.length;i++){
// //     for(let j=0;j<mat[0].length;j++){
// //   if(mat[i][j]>smax){
// //     if(mat[i][j]>max){
// //       smax=max
// //       max=mat[i][j]
// //     }else{
// //       smax=mat[i][j]
// //     }
// //   }
// //     }
   
// //   }
// //    console.log(smax)
// //     console.log(max)

// // let arr2=[1,2,3,3,4]
// // function sub(arr2){
// //     let max1=-Infinity
// //     let max2=-Infinity
// //     let max3=-Infinity
// //     for(let i=0;i<arr2.length;i++){
// //         if(arr2[i]>max2){
// //             if(arr2[i]>max1){
// //                 max3=max2
// //                 max2=max1
// //                 max1=arr2[i]
// //             }else if( arr2[i]>max2 ){
// //                 max3=max2
// //                 max2=arr2[i]
// //             }else if(arr2[i]>max3){
// //                 max3=arr2[i]
// //             }
// //         }
        
// //     }
// //     return max3
// // }
// // console.log(sub(arr2))



// //  function missingNumber(nums) {

// // for(let i=0;i<nums.length;i++){
// //     if(nums[i]===i){
// //       return i
// //     }
// //    // return s
// // }  
// // };
// // let nums=[1,2,4,5]
// // console.log(missingNumber(nums))

// // let arr = [1,[1,2],[3,[4,5]]]

// // //arr[0][1] 
// // console.log(arr[2][1][1])

// // **Input:** `"javascript"`
// // **Output:** `Vowels: 3, Consonants: 7`


// // function vowelstr(str){
// // let vowel=""
// // let consonent=""
// // for(let i=0;i<str.length;i++)
// // }
// // let str="javascript"
// // console.log(vowel(str))




// // // function twoSum(arr, target) {
// // //     let map = new Map();

// // //     for (let i = 0; i < arr.length; i++) {
// // //         let current = arr[i];
// // //         let need = target - current;

// // //         if (map.has(need)) {
// // //             return [map.get(need), i];
// // //         }

// // //         map.set(current, i);
// // //     }

// // //     return [];
// // // }

// // // let arr = [5, 8, 10, 2];

// // // console.log(twoSum(arr, 12));

// // function evennumber(s){
// //  for(let i=s.length-1;i>=0;i--){
// //   if(s[i]%2===0){
// //    break
// //   }else if(s[i]%2!==0){
// //     s= s.slice(0,-1)
// //   }
// //  }
// //  return s
// // }
// // let s="221"
// // console.log(evennumber(s))


// // function one(){
// //   two()
// // }
// // function two(){
// //   three()
// // }
// // function three(){
// //   console.log("code excuted")
// // }



// // function print(n){
// //   if(n===0){
// //     return
// //   }
// //   console.log(n)
// //   print(n-1)
// // }
// // print(6)


// // Fibonacci number
// // n = 6

// // function fibonaciioSeries(n){
// //   if(n==0 || n==1){
// //     return 1
// //   }
// //    return fibonaciioSeries(n-1)+fibonaciioSeries(n-2)
   
// // }
// // let n=6
// // // let first=0
// // // let sec=1
// // console.log(fibonaciioSeries(n))




// // function NthEvenFibonacci(n) {
// //   if(n==0|| n==1){
// //     return 1
// //   }
// //    h= NthEvenFibonacci(n-1)+NthEvenFibonacci(n-2)
// //   return h%2===0? h: 1
// //  // Write your code here
// // }
// // console.log(NthEvenFibonacci(2))



// // const fib = (n) => {
// //     if (n === 0) return 0;
// //     if (n === 1) return 1;

// //     return fib(n - 1) + fib(n - 2);
// // };

// // function NthEvenFibonacci(k) {
// //     let count = 0;
// //     let n = 0;

// //     while (true) {
// //         let num = fib(n);

// //         if (num !== 0 && num % 2 === 0) {
// //             count++;

// //             if (count === k) {
// //                 return num;
// //             }
// //         }

// //         n++;
// //     }
// // }

// // console.log(NthEvenFibonacci(1)); 

// // function fum(n){
// //   if(n==0){
// //     return
// //   }
// //   console.log(n)
// //   fum(n-1)
// // }
// // let n=3
// // fum(n)



// // function max(arr,i){
// //   if(i===arr.length-1){
// //     return arr[i]
// //   }
// //   let max1=max(arr,i+1)
// //   if(arr[i]>max1){
// //     return arr[i]
// //   }
// //   return max1
// // }
// //let arr=[12,2,3,25,4]
// // console.log(max(arr,0))


// // let arr=[1,2]
// // function subsets(arr, i, result) {
// //  if(i==arr.length){
// //   console.log(result)
// //   return
// //  }
// //  result.push(arr[i])
// //  subsets(arr,i+1,result)
// //  result.pop()
// //  subsets(arr,i+1,result)
// // }

// // subsets(arr,0,[])

//bubble sort

// //  let arr=[1,4,3,5]
// //   for(let i=0;i<arr.length;i++){
// //     for(let j=0;j<arr.length-1;j++){
// //       if(arr[j]>arr[j+1]){
// //         let swap=arr[j]
// //         arr[j]=arr[j+1]
// //         arr[j+1]=swap
// //       }
// //     }
// //   }
// // console.log(arr)

// // let a=[1 ,1 ,2 ,0 ,1 ,1 ,2, 2, 0, 0, 1]
// // for(let  i=0;i<arr.length;i++){
// //   let mixVal=i
// //   for(let j=i+1;j<arr.length;j++){
// //    if(arr[j]<arr[mixVal]){
// //     mixVal=j
// //    }
// //   }
// //   [arr[i],arr[mixVal]]=[arr[mixVal],arr[i]]
// // }
// // console.log((arr))


// // function selection(arr){
// //   for(let i=1;i<arr.length;i++){
// //     key=arr[i]
// //     j=i-1
// //     while(j>=0 && arr[i]>key){
// //       arr[j+1]=arr[j]
// //       j--
// //     }
// //     arr[j+1]=key
// //   }
// //   return arr
// // }
// // console.log(selection(arr))


// // function insertionSort1(a, n) {
// //   for(let i=1;i<a.length;i++){
// //      key=a[i]
// //     j=i-1
// //     while(j>=0 && a[j]>key){
// //       a[j+1]=a[j]
// //       j--
// //     }
   
// //   }
// //    a[j+1]=key
// //   return a
// //   // Write your code here
// // }
// // console.log(insertionSort1(a))
 
// let arr=[1,3,5,2]
// function selectionadd(arr){
//   for(let i=0;i<arr.length;i++){
//     let min=i
//    for(let j=i+1;j<arr.length;j++){
//     if(arr[j]<arr[min]){
//       min=j
//     }
//    }

//     [arr[i],arr[min]]=[arr[min],arr[i]]
//   }
//   return arr
// }
// console.log(selectionadd(arr))


// var sortArray = function(nums) {
// for(let i=0;i<nums.length;i++){
//     let min=i
//     for(let j=i+1;j<nums.length;j++){
//        if(nums[j]<nums[min]){
//         min=j
//        }
//     }
//     [nums[i],nums[min]]=[nums[min],nums[i]]
// }
// return nums
// };
// let nums=[2,6,8,4]
// console.log(sortArray(nums))

// 56

// function mergeIntervals(nums){
// nums.sort((a,b)=>a[0]-b[0]);

// let res = []
// res.push(nums[0])

// for(let i=1;i<nums.length;i++){
//   let curr = res[res.length-1]
//   let next = nums[i]
//   if(next && curr[1] >= next[0]){
//     curr[1] = Math.max(curr[1],next[1])
//   }else{
//   res.push(next)
//   }
// }
//  return res

// }
// const nums = [[1,3],[2,6],[8,10],[15,18]];
// console.log(mergeIntervals(nums))



//merge sort
// var merge = function(intervals) {
// intervals.sort((a,b) => a[0] - b[0]) // this will sort on the basis of first element
// result = []
// result.push(intervals[0])

// for(let i = 1; i< intervals.length; ++i) {
// current  = intervals[i]

// last = result[result.length -1]
// // if overlapping
// if(current[0] <= last[1]) {
// last[1] = Math.max(last[1], current[1])
// }
// else {
// result.push(current)
// }
// }
// return result
// };



// let arr=[1,1,2,3]

// function subsets(arr,target){
//   let result=[]
//  function recursion(start,current,sum){
//  if(sum===target){
//   result.push([...current])
//   return
//  }
//  if(sum>target){
//   return
//  }
//  for(let i=start;i<arr.length;i++){
//   current.push(arr[i])
//   recursion(i+1,current,sum+arr[i])
//   current.pop()
//  }
//  }
//  recursion
//  (0,[],0)
//   return result
// }
// console.log(subsets(arr,5))


// let n=4
// function paranthasises(n){
//   let result=[]
//   function resurcion(str,open,close){
//     if(str.length===n*2){
//       result.push(str)
//       return
//     }
//     if(open<n){
//      resurcion( str+"(",open+1,close)
//     }
//     if(close<open){
// resurcion( str+")",open,close+1)
//     }
//   }
//   resurcion("",0,0)
//   return result
// }
// console
// .log(paranthasises(n))

// let arr = [1, 2, 3, 4, 5]
// let target = 6

// function threeSum(arr, target) {

//   arr.sort((a, b) => a - b)

//   for (let i = 0; i < arr.length - 2; i++) {

//     let left = i + 1
//     let right = arr.length - 1

//     while (left < right) {

//       let sum = arr[i] + arr[left] + arr[right]

//       if (sum === target) {
//         return [arr[i], arr[left], arr[right]]
//       }

//       if (sum < target) {
//         left++
//       } else {
//         right--
//       }
//     }
//   }

//   return []
// }

// console.log(threeSum(arr, target))


// let arr = [1, 2, 3, 4, 5, 6]
// let target = 10

// function fourSum(arr, target) {

//   arr.sort((a, b) => a - b)

//   for (let i = 0; i < arr.length - 3; i++) {

//     for (let j = i + 1; j < arr.length - 2; j++) {

//       let left = j + 1
//       let right = arr.length - 1

//       while (left < right) {

//         let sum = arr[i] + arr[j] + arr[left] + arr[right]

//         if (sum === target) {
//           return [arr[i], arr[j], arr[left], arr[right]]
//         }

//         if (sum < target) {
//           left++
//         } else {
//           right--
//         }
//       }
//     }
//   }

//   return []
// }

// console.log(fourSum(arr, target))


//let arr=[1,2,3,4]

// let target=19
// let left=0
// let rigth=arr.length-1
// while(left<=rigth){
 
//   if(arr[left]+arr[rigth]===target){
    
//     return [left,rigth]
//   }else if(sum<target){
//     left++

//   }else{
//     rigth--
//   }
    
//   }
// console.log(arr)


// let arr=[1,2,3,4,5,10]
// let sum=0
// let max=0
// let res=[]

//  for(let i=0;i<arr.length-2;i++){
//   for(let j=i;j<i+3;j++){
//     res.push(arr[j])
//    sum+=arr[j]
//      if(sum>max){
//     max=sum
//   }
// }
// sum=0
// }
 
// console.log(max)

// function subset(arr){
//   let result=[]
//   function recursion(index,current){
//     if(arr.length===index){
//       result.push([...current])
//       return
//     }
//     recursion(index+1,current)
//     current.push(arr[i])
//     recursion(index+1,)
//   }
// }


// function subsets(arr) {
//   let result = []

//   function recursion(i, current) {

//     if (i === arr.length) {
//       result.push([...current])
//       return
//     }

//     // choose
//     current.push(arr[i])
//     recursion(i + 1, current)
//     current.pop()

//     // don't choose
//     recursion(i + 1, current)
//   }

//   recursion(0, [])

//   return result
// }

// console.log(subsets([1, 2, 3]))


// let arr = [1, 2, 3]

// function subsequence(arr) {
//   let result = []

//   function recursion(i, current) {

//     if (i === arr.length) {
//       result.push([...current])
//       return
//     }

//     // choose
//     current.push(arr[i])
//     recursion(i + 1, current)
//     current.pop()

//     // don't choose
//     recursion(i + 1, current)
//   }

//   recursion(0, [])

//   return result
// }

// console.log(subsequence(arr))


// let arr=[[1,2,3,5],
//           [6,7,8,6],
//           [11,12,13,7],  
//         ];
    
function spirial(arr){
  let result=[]
  
  let left=0, rigth=arr[0].length-1
  let top=0;
  let buttom=arr.length-1

  for(let i=left;i<=rigth;i++){
    result.push(arr[top][i])
  }
  top++
  for(let i=top;i<=buttom;i++){
    result.push(arr[i][rigth])
  }
  rigth--
  if(top<=buttom){
    for(let i=rigth;i>=left;i--){
    result.push(arr[buttom][i])
    }
     buttom-- 
  }

  if(left<=rigth){
    for(let i=top;i>=buttom;i--){
    result.push(arr[i][left])
  }
  left++

 }
 return result
}
console.log(spirial(arr))

//let arr=[1,6,4,3]

// function quicksort(arr,low,high){
  
//   let i=low-1
//   let  privat=arr[high]
//   if(low<high){
//     for(let j=low;j<high;j++){
//       if(arr[j]<privat){
//         i++
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//       }
//     }
//     [arr[i+1],arr[high]]=[arr[high],arr[i+1]]
//     let privtindet=i+1
//     quicksort(arr,low,privtindet-1)
//     quicksort(arr,privtindet+1,high)
//   }
//   return arr
// }
// console.log(quicksort(arr,0,arr.length-1))

// let arr=[3,5,6,8,1,3,4]
// function merget(arr){
//      function mainsort(arr){
//     if(arr.length<=1){    [5]
//       return arr
//     }
//     let mid=Math.floor(arr.length/2)
//      let left = mainsort(arr.slice(0, mid));  
//     let right=mainsort(arr.slice(mid))
//     return sort(left,right)
//   }   
//  function sort(left,right){
//     let i=0,j=0
//     let result=[]
//     while(i<left.length && j<right.length){
//       if(left[i]<=right[j]){
//         result.push(left[i])
//         i++
//       }else{
//         result.push(right[j])
//         j++
//       }
//     }
//     while(i<left.length){
//       result.push(left[i])
//       i++
//     }
//     while(j<right.length){
//       result.push(right[j])
//       j++
//     }
//     return result
//   }

//   return mainsort(arr)
// }
let array=[3,4,5,6,2,3,4]

function findLongestSubArray(array, k) {
   let windowsum=0
   for(let i=0;i<k;i++){
    windowsum+=array[i]
   }
   let maxsum=windowsum
   for(let i=k;i<array.length;i++){
    windowsum+=array[i]-array[i-k]
    maxsum=Math.max(windowsum,maxsum)
   }
   return maxsum
 // findLongestSubArray(arr,k)
}
console.log(findLongestSubArray(array,3))


let input=[3,4,5,7,8,2,1]

  function mergesort(input){
      if(input.length<=1){
        return input
      }
      let mid=Math.floor(input.length/2)
      let left=mergesort(input.slice(0,mid))
      let rigth=mergesort(input.slice(mid))
      return sorting(left,rigth)
    }
    function sorting(left,rigth){
      let i=0
      let j=0
      let result=[]
      while(i<left.length  && j<rigth.length ){
        if(left[i]<=rigth[j]){
          result.push(left[i])
          i++
        }else{
          result.push(rigth[j])
          j++
        }
        
      }
              while(i<left.length){
          result.push(left[i])
          i++
        }
        while(j<rigth[j]){
          result.push(rigth[j])
          j++
        }
        return result
    }
console.log(mergesort(input))
let s1="helloo"
let s2="heloo"
let map=new Map()

 for (let ch of s1) {
      map.set(ch, (map.get(ch) || 0) + 1);
    }
    for (let ch of s2) {
      map.set(ch, (map.get(ch) || 0) - 1);
    }
    let deletio=0
for(let ch of map.values()){
  deletio+=Math.abs(ch)
}
console.log(deletio)




// function strinhg(strs){
//   let map=new Map()
  
//   for(let i=0;i<strs.length;i++){
//  let  str1=strs[i].split("").sort().join("")
  
//     if(!map.has(str1)){
// map.set(str1,[])
//     }
// map.get(str1).push(strs[i])
//   }
//   return Array.from(map.values())
// }
// console.log(strinhg(strs))
// let n=4
// function string(n){
//  // let res=[]
// for(let i=0;i<=4;i++){
//   let str=""
//   for(let j=0;j<=i;j++){
//     str+=String.fromCharCode(65+j)+""
//   }
// console.log(str)
// }

// }
// string(n)

// let mat=[[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// function matruxnn(mat){
  

//   for(let i=0;i<mat.length;i++){
  
//     for(let j = i; j < mat[i].length; j++){
//       [mat[j][i], mat[i][j]] = [mat[i][j],mat[j][i]]
//     }
   
//   }

//   const newarra=mat.map((item)=>item.reverse())
  
//   return newarra
// }
// console.log(matruxnn(mat),"THIS IS MY MATRIX");




// function callback(name){
//   console.log(name)
// }

// function yash(ys){
// console.log("hello im here"+ys)
// }

// function prent(fn){
//   fn("h")
//    fn("e")
//     fn("hehhhd")
// }
// let n=prent(yash)


// let arr=[1,1,2,2,2,3]


// primeNumber(10,20)
// function primeNumber(a,b){
//   let arr=[];
//   function prime(a,b){
//     if(a==b+1){
//       return;
//     }
//     let g=prem(a);
//     if(g==true){
//       arr.push(a)
//     }
//     return prime(a+1,b)
//   }
//   function prem(a){
//     let count=0;
//     for(let i=2;i<=Math.sqrt(a);i++){
//       if(a%i==0){
//         count++;
//       }
//     }
//     if(count==0){
//       return true
//     }
//     return false;
//   }
//   prime(10,20);
//   console.log(arr)

// }


// function fre(arr){
//   let map=new Map()
//   let result=[]
// for(let i=0;i<arr.length;i++){
//   if(map.has(arr[i])){
//     map.set(arr[i],(map.get(arr[i])||0)+1)
//   }
  
// }
// for(let [key,value] of map){
//   result.push([key,value])
// }
// result.sort((a,b)=>{
//   let valuA=a[0]
//   let fre=b[1]
//   let valuB=a[1]
//   let  fre1=b[0]
//   if(fre[1]===fre[1]){
//     return valuA[0]-valuB[0]
//     return fre[1]-fre1[0]
//   }
//   })
//   let arr1=[]
//   for(let i=0;i<result.length;i++){
//     for(let j=i;j<result[i][0];j++){
//       arr1.push(result[i][1])
//     }
//   }
// return arr1
// }
// console.log(fre(arr))



// var merge = function(nums1,  nums2, ) {
//     let res=[]
//     for(let i=0;i<nums1.length;i++){
//         if(nums1[i]!==0){
//         res.push(nums1[i])
//         }
//     }
//    for(let j=0;j<nums2.length;j++){
//     if(nums2[j]!==0){
//     res.push(nums2[j])
//     }
// }
//     return res.sort((a,b)=>a-b)
// };
// let nums1=[1,2,3,5,0,0,0]
// let nums2=[4,2,5,6,8,0]
// console.log(merge(nums1,  nums2, ));
