module.exports = {
    findHeroEquip (herostr) {
       let heroEquipResult;
       let horse = herostr.slice(0,2);
       let helmet = herostr.slice(8,10);
       let rightHand = herostr.slice(12,14);
       let leftHand = herostr.slice(16,18);
       let heroChest = herostr.slice(20,22);
       let heroshoes = herostr.slice(24,26);
   
       
       if (horse === "67") {
           heroEquipResult = "Tier 1 horse"
       } else if (horse === "68") {
           heroEquipResult = "Tier 2 horse"
       } else if (horse === "69") {
           heroEquipResult = "Tier 3 horse"
       }
       else if (horse === "00") {
           heroEquipResult = "No horse"
       }
   
       if (helmet === "01") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 exp helmet";
       } else if (helmet === "02") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 exp helmet";
       } else if (helmet === "03") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 exp helmet";      
       } else if (helmet === "04") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 HP helmet";
       } else if (helmet === "05") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 HP helmet";
       } else if (helmet === "06") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 HP helmet";
       } else if (helmet === "07") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 cp helmet";
       } else if (helmet === "08") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 CP helmet";
       } else if (helmet === "09") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 CP helmet";
       } else if (helmet === "0a") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 stable";
       } else if (helmet === "0b") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 stable";
       }  else if (helmet === "0c") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 stable";
       }  else if (helmet === "0d") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 barracks";
       }  else if (helmet === "0e") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 barrack";
       }  else if (helmet === "0f") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 barrack";
       }  else if (helmet === "00") {
           heroEquipResult = heroEquipResult + ", " + "No helmet";
       }
   
       if (rightHand === "10") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Legs";
       } else if (rightHand === "11") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Legs";
       } else if (rightHand === "12") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Legs";
       } else if (rightHand === "13") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Praet";
       } else if (rightHand === "14") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Praet";
       } else if (rightHand === "15") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Praet";
       } else if (rightHand === "16") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Imp";
       } else if (rightHand === "17") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Imp";
       } else if (rightHand === "18") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Imp";
       } else if (rightHand === "19") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 EI";
       } else if (rightHand === "1a") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 EI";
       } else if (rightHand === "1b") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 EI";
       } else if (rightHand === "1c") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 EC";
       } else if (rightHand === "1d") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 EC";
       } else if (rightHand === "1e") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 EC";
       } else if (rightHand === "1f") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Phal";
       } else if (rightHand === "20") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Phal";
       } else if (rightHand === "21") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Phal";
       } else if (rightHand === "22") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Sword";
       } else if (rightHand === "23") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Sword";
       } else if (rightHand === "24") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Sword";
       } else if (rightHand === "25") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 TT";
       } else if (rightHand === "26") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 TT";
       } else if (rightHand === "27") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 TT";
       } else if (rightHand === "28") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Druid";
       } else if (rightHand === "29") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Druid";
       } else if (rightHand === "2a") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Druid";
       } else if (rightHand === "2b") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Haed";
       } else if (rightHand === "2c") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Haed";
       } else if (rightHand === "2d") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Haed";
       } else if (rightHand === "2e") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Club";
       } else if (rightHand === "2f") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Club";
       } else if (rightHand === "30") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Club";
       } else if (rightHand === "31") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Spear";
       } else if (rightHand === "32") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Spear";
       } else if (rightHand === "33") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Spear";
       } else if (rightHand === "34") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Axe";
       } else if (rightHand === "35") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Axe";
       } else if (rightHand === "36") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Axe";
       } else if (rightHand === "37") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Paladin";
       } else if (rightHand === "38") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Paladin";
       } else if (rightHand === "39") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Paladin";
       } else if (rightHand === "3a") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 TK";
       } else if (rightHand === "3b") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 TK";
       } else if (rightHand === "3c") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 TK";
       } else if (rightHand === "73") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Slave";
       } else if (rightHand === "74") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Slave";
       } else if (rightHand === "75") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Slave";
       } else if (rightHand === "76") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Ash";
       } else if (rightHand === "77") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Ash";
       } else if (rightHand === "78") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Ash";
       } else if (rightHand === "79") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Khopesh";
       } else if (rightHand === "7a") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Khopesh";
       } else if (rightHand === "7b") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Khopesh";
       } else if (rightHand === "7c") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Anhur";
       } else if (rightHand === "7d") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Anhur";
       } else if (rightHand === "7e") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Anhur";
       } else if (rightHand === "7f") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Chariot";
       } else if (rightHand === "80") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Chariot";
       } else if (rightHand === "81") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Chariot";
       } else if (rightHand === "82") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Merc";
       } else if (rightHand === "83") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Merc";
       } else if (rightHand === "84") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Merc";
       } else if (rightHand === "85") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Bow";
       } else if (rightHand === "86") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Bow";
       } else if (rightHand === "87") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Bow";
       } else if (rightHand === "88") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Steppe";
       } else if (rightHand === "89") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Steppe";
       } else if (rightHand === "8a") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Steppe";
       } else if (rightHand === "8b") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Marks";
       } else if (rightHand === "8c") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Marks";
       } else if (rightHand === "8d") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Marks";
       } else if (rightHand === "8e") {
           heroEquipResult = heroEquipResult + ", " + "Tier 1 Marauder";
       } else if (rightHand === "8f") {
           heroEquipResult = heroEquipResult + ", " + "Tier 2 Marauder";
       } else if (rightHand === "90") {
           heroEquipResult = heroEquipResult + ", " + "Tier 3 Marauder";
       } else if (rightHand === "00") {
           heroEquipResult = heroEquipResult + ", " + "No right hand weapon";
       }
   
       switch (leftHand){
           case "3d": 
               heroEquipResult = heroEquipResult + ", " + "Tier 1 map";
               break;
           case "3e":
               heroEquipResult = heroEquipResult + ", " + "Tier 2 map";
               break;
           case "3f":
               heroEquipResult = heroEquipResult + ", " + "Tier 3 map";
               break;
           case "40":
               heroEquipResult = heroEquipResult + ", " + "Tier 1 pennant";
               break;
           case "41":
               heroEquipResult = heroEquipResult + ", " + "Tier 2 pennant";
               break;
           case "42":
               heroEquipResult = heroEquipResult + ", " + "Tier 3 pennant";
               break;
           case "43":
               heroEquipResult = heroEquipResult + ", " + "Tier 1 standard";
               break;
           case "44":
               heroEquipResult = heroEquipResult + ", " + "Tier 2 standard";
               break;
           case "45":
               heroEquipResult = heroEquipResult + ", " + "Tier 3 standard";
               break;
           case "49":
               heroEquipResult = heroEquipResult + ", " + "Tier 1 pouch";
               break;   
           case "4a":
               heroEquipResult = heroEquipResult + ", " + "Tier 2 pouch";
               break;
           case "4b":
               heroEquipResult = heroEquipResult + ", " + "Tier 3 pouch";
               break;
           case "4c":
               heroEquipResult = heroEquipResult + ", " + "Tier 1 shield";
               break;
           case "4d":
               heroEquipResult = heroEquipResult + ", " + "Tier 2 shield";
               break;
           case "4e":
               heroEquipResult = heroEquipResult + ", " + "Tier 1 shield";
               break;
           case "4f":
               heroEquipResult = heroEquipResult + ", " + "Tier 1 horn";
               break;
           case "50":
               heroEquipResult = heroEquipResult + ", " + "Tier 2 horn";
               break;
           case "51":
               heroEquipResult = heroEquipResult + ", " + "Tier 3 horn";
               break;
           case "00":
               heroEquipResult = heroEquipResult + ", " + "No left hand item";
               break;
       }
   
       switch (heroChest){
           case "52":
               heroEquipResult = heroEquipResult + ", " + "Tier 1 HP chest";
               break;
           case "53":
               heroEquipResult = heroEquipResult + ", " + "Tier 2 HP chest";
               break;
           case "54":
               heroEquipResult = heroEquipResult + ", " + "Tier 3 HP chest";
               break;
           case "55":
               heroEquipResult = heroEquipResult + ", " + "Tier 1 Scale";
               break;
           case "56":
               heroEquipResult = heroEquipResult + ", " + "Tier 2 Scale";    
               break;
           case "57":
               heroEquipResult = heroEquipResult + ", " + "Tier 3 Scale";    
               break;
           case "58":
               heroEquipResult = heroEquipResult + ", " + "Tier 1 breastplate";
               break;
           case "59":
               heroEquipResult = heroEquipResult + ", " + "Tier 2 breastplate";
               break;
           case "5a":
               heroEquipResult = heroEquipResult + ", " + "Tier 3 breastplate";
               break;
           case "5b":
               heroEquipResult = heroEquipResult + ", " + "Tier 1 segmented";
               break;
           case "5c":
               heroEquipResult = heroEquipResult + ", " + "Tier 2 segmented";            
               break;
           case "5d":
               heroEquipResult = heroEquipResult + ", " + "Tier 3 segmented";
               break;
           case "00":
               heroEquipResult = heroEquipResult + ", " + "No chest item";
               break;
       }
   
       switch (heroshoes){
           case "5e":
               heroEquipResult = heroEquipResult + ", " + "Tier 1 HP shoes";
               break;
           case "5f":
               heroEquipResult = heroEquipResult + ", " + "Tier 2 HP shoes";
               break;
           case "60":
               heroEquipResult = heroEquipResult + ", " + "Tier 3 HP shoes";
               break;
           case "61":
               heroEquipResult = heroEquipResult + ", " + "Tier 1 % shoes";
               break;
           case "62":
               heroEquipResult = heroEquipResult + ", " + "Tier 2 % shoes";
               break;
           case "63":
               heroEquipResult = heroEquipResult + ", " + "Tier 3 % shoes";
               break;
           case "64":
               heroEquipResult = heroEquipResult + ", " + "Tier 1 Spurs";
               break;
           case "65":
               heroEquipResult = heroEquipResult + ", " + "Tier 2 Spurs";
               break;
           case "66":
               heroEquipResult = heroEquipResult + ", " + "Tier 3 Spurs"
               break;
           case "00":
               heroEquipResult = heroEquipResult + ", " + "No shoes"
               break;
       }
   
   
   
       return heroEquipResult;
   }
   
   
   };