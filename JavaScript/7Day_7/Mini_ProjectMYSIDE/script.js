function checker(){
    let num=document.getElementById("numberInput").value;
    let result="";

    //converting to a number (prompt /it is given as a string)
      num=Number(num);

      //checking Positive,negative,zero number
      if(num>0){
        result+=`${num} "Is a Positive & "`;
      }
      else if(num<0){
        result+=`${num} "Is a Negative &"`;
      }
      else{
        result+=`${num}" IS ZERo"`;
      }

    //   checking Even Or Odd
    if(num%2===0){
        result+=`"Even Number"`;
    }
    else{
        result+=`"Odd Number"`;
    }

    // show result in browser
    document.getElementById("result").innerHTML=result;

    // clear input field
    document.getElementById("numberInput").value="";
}