"use String"; //צריך לגדיר תמיד מעל הקופצ הוא עושה בדיקות
function ada() {
  num = prompt("enter num"); /* קלטה */
  console.log(num); /*מדפיסה*/
  num1 = 100 + ""; /*להפוך מספר למחרוזת */ /*num =string(100) */
  +"6"; /*מחרוזת למספר */
  Number("1"); //equls
  Number("1px"); //non
  parseInt("1px"); //equls
  parseInt("1"); //equls
  Number(" "); //0
  parseInt(""); //non
  isNaN("123"); //false
  isNaN("123ab"); //true
  /*
  const  לא ניתן לשתמש ךפני הגדרה
  let לא ניתן להגדיר את המשתני יותר מפעם אחד
  var אפשר לדפיס לפי הגדרה ואפשר לגידר את המשתנה כמה פעמים

   */

  /*
  יש שלוש סוגי פונקציות
  function Declaration
  function ada() {
    hosted זה
  אפשר לשתמש לפני הגדרה
  }
    function experssion
  const fun =function() {
    hosted זה לא
    פונקציה אנונימת אין שם לפנקציה רק דרך המשתנה
  }
  Arrow Function/*
  counst fun2=()=>{}
  1
  let fun = val =>val*10;
  console.log(fun(5))//50
  2
    let fun = (val)=> { return val*10};
  console.log(fun(5))//50
  */

  /*
  דמוי מערך 
   function ada(n1,n2,n3) {
     console.log(argument) מדפיס כמו מערך 
  }
    function ada(...res) {
      אם מקבלת כמה ברמתר מדפיס כמו מערך
     console.log(res)  
  }

  אפשר פונ בתוך פון
   */
  /**
   * array
  let arr=[] מגדיר מערך
  arr.push(1,2)מוסיפ למערך
  arr.pop()מוחק מסןף
  arr.shift() מוחק מן התחלה מערך
  arr.unshift(1,2)מוסיף ערכים לתחלת מערך
  בזה משנה המערך המקורי


  for(let num of arr)
    cons..(num) מקבל מי המערך איבר איבר
    for(let [i,num] of arr.entreis())
    cons...({i},{num}) מדפיס מיקום וערך

  forEach
  sum=0
  arr.forEach(function (num,i){
    sum+=num
     cons...({i},{num})אפשר בלי אינדקס
  })
  2
  arr.forEach((num)=>(sum+=num))
  3
  Function sumarr(num){
    sum+=num
  }
  arr.forEach(sumarr)

  push,pop,shift,unshift,splice    => פעלות משנה מערך
  indexof,lastof,slice
  filter , map , raduce


  splice(הוספה ,כמה תמחוק, אזי מקום)
  arr = [1,2,3,4,5]
  arr.splice(2,3) מי אינדקס שני מוחק שלוש איברים 3,4,5
   arr.splice(0)מוחק הכול

  slice(עד אינדקס זה לא כולל, אזי אינדקס)
  arr = [1,2,3,4,5]
  arr.slice(1,3)מחזירה 2,3
   arr.slice(0)כל המערך
    arr.slice(1)מי אחד עד סוף
     arr.slice(-1)האחרון
      arr.slice(-2)שני אחרונים

      arr.reverse()הופך מערך
      join()הופך מערך למחרוזת 

    str=arr.join('..').. בין ערל לערך שני נקדות 
     str=arr.join('')מחזיר רגיל



     map מחליפה המערך     אבל לא משנ המקורי
     newarr=arr.map(function(num){
       return num*2
     })


     raduce
     let sum=arr.raduce(function(total,num){
       return total+num
     },0) מתחיל מ אפס ויסף כל בעם total כמו סכום יש משתנה 
  
     filter
     newarr=arr.filter(function (num){
      return (num%2==0)
      מחזירה איברים עם תנאי מסוים
     })

     arr.sort()מיון מערך
      newarr=arr1.concat(arr2,arr3)מחזיר מערך חדש מכיל כל האברים
    
    
       split() הופכת מחרוזת למערך
       arr=str.split(,) , מחזירה מערך בעזרת 



       obj
       coust person={
         name:'osama',
         age:20,
         address:{
           city:'naz'
           number:21
         },
         greet:function(){
           console...('hello')
         },
        }
        
        cons..(person.age)//20


        function prin (obj)
        {
          for(let key of object.keys(person))
            console...(obj[key])
        }

        object.keys(obj).forEach((element)=>console.log(element.obj[element]))




        setTimeout(function(){אחרי 5 שניות תפעיל זה
        },5000)





        Dom
        getElmentByid
        const hed=document.getElmentByid('ID')
        hed.style.color='red' מחליפה צבע

        getElmentsByTagName
         const lis=document.getElmentsByTagName('li')
         for (let el of lis)
            el.style.color='red' מחליפה צבע

        getElmentsByClassName
         const class=document.getElmentsByClassName('name of class')מחזירה רשימה של קלאסים



         Query Selector
          querySelectorAll
         const lis=document.querySelectorAll('li') מחזירה דימוי מערך 
   const lis=document.querySelector ('li') מחזירה הרשון 


          innerHtml   מחליפה תוכן
    const h1=document.querySelector ('h1')
        h1.innerHtml='<p>dada</p>' html כמו 
          h1.te='hello world' יוסיף ככה



        h1.classlist.add('aa')מוסיפה קלאס
        h1.classlist.remov('aa') מוחק קלאס


          const ul =document.creatElement('ul')יוסיף אלמנת
          document.querySelector('main').appendchild(ul)תוסיף בן 



          Event
          1
          <button id="btn1">...</button>
          const btn1=document.querySelector(#btn1)
          btn1.onclick=function (){
            alert("ehllo")
            this.testcontent='thank'

          }
          2
            <button id="btn1">...</button>
              const btn1=document.querySelector(#btn1)
              btn1.onclick= מה אתה רוצה
      
     
          <button id="btn1">...</button>
          const btn1=document.querySelector(#btn1)
          btn1.addEventListener('click',function(){
            alert...
          })
              */
}
