 let balance = 1000;      //initailizing the things first
        let stock_price = 100;
        let holding=0;

        // the function is used to update the prices 
                                     // math.random means 0 se 1 ke beech ki values matlab 0.24,0.97 like this
                                     // range iski hai 80 to 120 tk ki
                                     // means 120-80=40
                                     // Math.random()*40; ki beech ki values ayegi
                                     // Math.random()*40+80; //first one ko add krdiya
                                     // ab math.floor ka use krege taki decimal ki value hat jaye or whole numbers milee...
        function updatePrice(){      // 1 add krege toh value 120 exact hoyegi agar add ni krte toh 119 value
           let stock_price= Math.floor(Math.random()*40+1)+80;       
            return stock_price;
        }

        // console.log(updatePrice()); // calling a function that is it updating or not?
        // console.log(updatePrice());

        function decideAction(price){     //function jo decide krta hai ki price ke hisaab se ise BUY , SELL , HOLD karna
            if (price < 90 && balance >= price ){   //price jo hai less then 90 hoga and kiya utna balance hai price ke hisaab se stock kharine ke, both conditions true
                return "BUY";
            }
            else if (price >= 110 && holding > 0){ //price ab high hai to sell and tumhare pass stock hai jise bech sakte ho?
                return "SELL";
            }
            else{
                return "HOLD";    //Agar na price itna kam hai ki kharido,na itna zyada hai ki becho
                                 // toh bot bolega “HOLD” ruk jao, abhi kuch mat karo
            }
        }

        function trade(action,price){   //yeh function decide krta hai ki stock hold, sell, buy hone per, tumhare paise aur stocks ke saath kiya hona chahiye
            if(action === "BUY"){
                balance -=price;   // paisa kam
                holding +=1;       // ek stock kharida
            }
            else if (action === "SELL"){
                balance +=price;   //pasie jiyada
                holding -=1;       // ek stock becha
            } 
            else if (action === "HOLD"){

            }
        }

        document.getElementById("start").addEventListener("click", function(){

            // const resultsList = document.getElementById("results");
            const table =document.getElementById("resultsTable");
            const body =document.getElementById("resultsBody");
            body.innerHTML=""; //pehle ke results clear kar do
            table.style.display="table"; //table ko show krdo
            // resultsList.innerHTML =""; //pehle ke results clear kar do


            for(round = 1; round <= 10; round++){  //loop lgai tanki 10 baar round chle ek hi baar main 
                
               let price=updatePrice();          
               let action=decideAction(price);    
               trade(action,price);

               //update top display values
               document.getElementById("balance").textContent= balance;
                document.getElementById("price").textContent= price;
                document.getElementById("holdings").textContent= holding;

                //create list item to show each round result
            //    let listItem = dcument.createElement("li");
            //    listItem.textContent = (`Round ${round} -> Price: ${price},
            //    Action: ${action},
            //    Balance:${balance}, 
            //    Holding:${holding}`);
               
            //    resultsList.appendChild(listItem);

           
         

                //create table row to show each round result
                let row=document.createElement("tr");
              

                 //action ke hisaab se color change krna
                let colorClass= "";
            if(action === "BUY"){
                colorClass="row-buy";
            }
            else if(action === "SELL"){
                colorClass="row-sell";
            }
            else if(action === "HOLD"){
                colorClass="row-hold";
            }
            

                row.innerHTML=(`<td>${round}</td>
                    <td>${balance}</td>
                    <td>${price}</td>
                    <td class=${colorClass}>${action}</td>
                    <td>${holding}</td>`);

                    body.appendChild(row);
            }
        });
    
