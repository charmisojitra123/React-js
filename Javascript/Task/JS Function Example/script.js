// function getReverse()
// {
//     let num = (document.getElementById("no").value);
//     console.log(num);
//     let rev=0,rem;
//     while(num>0)
//     {
//         rem = num%10;
//         rev = rev*10+rem;
//         num = Math.floor(num/10);
//     }
//     console.log(rev);
//     document.getElementById("result").innerHTML = rev;
// }
// function getRearrange()
// {
//     let str = document.getElementById("str").value;
//     console.log(str);
//     let array=str.split('');
//     console.log(array);
//     array.sort();
//     str = array.join('');
//     document.getElementById("result1").innerHTML = str;
//     ;
// }
// function getRearrange1()
// {
//     let str = document.getElementById("str1").value;
//     console.log(str);
//     let array=str.split(' ');
//     for(let i=0;i<array.length;i++)
//     {
//         // console.log(array[i]);
//         let str1 = array[i].split("")
//         str1[0]=str1[0].toUpperCase();
//         array[i]=str1.join("");
//     }
//     str = array.join(' ');
//     document.getElementById("result2").innerHTML = str;
//     ;
// }


console.log(typeof NaN)