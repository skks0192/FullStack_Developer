let names =["Sunaina","Manjot","Kartik","Aman"];
let age=[22,70,19,12];
let seats=[2,3,4,5];
let gender=["F","F","M","M"];

let results="";
window.onload = function(){
    const info = this.document.getElementById("array-info");
    info.innerHTML=`<div style="background:#00140a; color:#00ff88; border:1px solid #00ff88;
    border-radius:8px; padding:12px; width:30%; margin:20px auto; 
    font-family:'Courier New', monospace; text-align:left;">
      <strong>Array Data (Before Reservation):</strong><br><br>
      Names ➤ ${names.join(", ")}<br>
      Ages ➤ ${age.join(", ")}<br>
      Seats ➤ ${seats.join(", ")}<br>
      Genders ➤ ${gender.join(", ")}
    </div>`
}
//1. Passenger List – Print all passenger details in the format: 'Passenger: NAME | Age: AGE | Seat: SEAT | Gender: GENDER'
function PassengerList(){
    results="";
results +="1.Passenger List <br>";
names.forEach((names,index) =>{
results += `Passengers_Names: ${names} | Age: ${age[index]} | Seats: ${seats[index]} | Gender: ${gender[index]}<br>`;
});
// document.getElementById("results").innerHTML=results;
showTyping(results);
}

//2. Senior Citizens – Find all passengers aged 60 or above.
function seniorList(){
    results="";
    results+="Senior Citizens:Find all passengers aged 60 or above.<br>";
    age.forEach((age,index)=>{
        if(age >=60){
            results +=`Passengers_Names: ${names[index]} | Age: ${age} | Seats: ${seats[index]} | Gender: ${gender[index]}`;
        }
    });
    // document.getElementById("results").innerHTML=results;
    showTyping(results);
}

// 3. Uppercase Names – Convert all passenger names into uppercase.
function upperCase_NameList(){
    results="";
    results +="Convert all passenger names into uppercase:<br>";
    let upperNames = names.map(names=> names.toUpperCase());
    upperNames.forEach((names,index)=>{
    results +=`Passengers_Names: ${names} | Age: ${age[index]} | Seats: ${seats[index]} | Gender: ${gender[index]}`;
    })
    // document.getElementById("results").innerHTML=results;
    showTyping(results);
}

//4. Total Age (Reduce) – Find the total sum of all passenger ages.
function totalAgeList(){
    results="";
    results += "Total Age(Reduce) :the total sum of all passenger ages:<br>";
   let total= age.reduce((sum,currentAge)=>
        sum+currentAge,0);
    results += `Total Sum of All Passenger Ages = ${total}`;
    // document.getElementById("results").innerHTML=results;
    showTyping(results);
}

// 5. Total Age in Reverse (ReduceRight) – Calculate the total age, starting from the last passenger.
function totalAgeReverseList(){
    results="";
    results += "Total Age in Reverse (ReduceRight) the total age, starting from the last passenger.<br>";
    let totalReduce=age.reduceRight((sum,currentAge)=> sum +currentAge,0);
    results +=`Total Age in Reverse (ReduceRight) = ${totalReduce}`;
        // document.getElementById("results").innerHTML=results;
        showTyping(results);
}

//6. Check Adults – Verify if all passengers are adults (age ≥ 18).
function adultsList(){
    results="";
    results += " Check Adults - Verify if all passengers are adults (age ≥ 18)<br>";
    let Alladults=age.every(age=> age>=18);
        if(Alladults){
            results += "Yes! there is an adults";
        }
        else{
        results += "No! there is no adult";
        }
    // document.getElementById("results").innerHTML=results;
    showTyping(results);
    }

// 7. Check Minors – Check if there is at least one minor (age < 18).
function minorsList(){
    results="";
    results += "Check Minors-Check if there is at least one minor (age < 18).<br>";
     let minors =age.some(age=> age <18);
        if(minors){
            results += "YES! there is at least one minor";
        }
        else{
            results += "NO! ALL are Adults";
        }
    //  document.getElementById("results").innerHTML=results;
    showTyping(results);
}    

// 8. Convert Seat Numbers – Suppose the seat numbers are given as a string '12,13,14,15'. Convert it into an array of numbers using Array.from.
function stringList(){
    results="";
    results += "Convert Seat Numbers";
    let seatString ="12,13,14,15";
    let splitSeats=seatString.split(",");// Step 1: split string into array of strings
    let seatNumbers =Array.from(splitSeats,Number);  // [12,13,14,15]   // Step 2: convert each element into number using Array.from
    results+= "Original String: " + seatString +"<br>";  // Step 3: display result
    results+= "Converted Array: [" + seatNumbers.join(" , ")+ "]";

    //  document.getElementById("results").innerHTML=results;
    showTyping(results);
}

// 9. Add Extra Passengers (Spread) – Add two more passengers ['Rahul', 'Sita'] into the names array using the spread operator.
function spreadList(){
    results="";
    results +=" Add Extra Passengers (Spread)<br>";
    let addExtra =["Rahul","Sita"];
    let allPassengers=[...names,...addExtra]; // merge both arrays using spread (...)
    results += "Original Passengers: " +names.join(" , ")+"<br>";
    results +="New Passengers Added: " +addExtra.join(" , ")+"<br>";
    results +="Updated Passengers List: "+allPassengers.join(" , ");

    // document.getElementById("results").innerHTML=results;
    showTyping(results);
}

// 10. Separate First Passenger (Rest) – Separate the first passenger and group the remaining passengers into another array using the rest operator.
function restList(){
    results ="";
    results += "Separate First Passenger (Rest)<br>";
    let [firstPassenger, ...remainingPassenger] =names;
    results += "First Passenger: "+firstPassenger + "<br>";
    results += "RemainingPassengers: "+remainingPassenger.join(" , ");
        //  document.getElementById("results").innerHTML=results;
        showTyping(results);
}

function showTyping(text, speed = 25) {
  const typed = document.getElementById("typed");
  const caret = document.querySelector(".caret");
  const box = document.getElementById("results");

  typed.textContent = "";
  let i = 0;

  clearInterval(window.typingInterval);
  caret.style.display = "inline-block";

  window.typingInterval = setInterval(() => {
    if (i < text.length) {
      typed.textContent += text.charAt(i);
      i++;
      box.scrollTop = box.scrollHeight; // auto-scroll if long
    } else {
      clearInterval(window.typingInterval);
      caret.style.display = "none"; // stop blinking after done
    }
  }, speed);
}
