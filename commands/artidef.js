module.exports = {
    artiDefPrediction (artiInfo) {
        let testPosition = 100;
        let maxPower = 10500000;
        let natarsT1 = 0.26;
        let natarsT2 = 0.14;
        let natarsT3 = 0.2083;
        let natarsT4 = 0.0068;
        let natarsT5 = 0.1356;
        let natarsT6 = 0.1449;
        let natarsT7 = 0.0778;
        let natarsT8 = 0.0266;

       // console.log("meow " + artiInfo);
        let artiSort = artiInfo.slice();
        artiSort.sort (function(a,b) {
            return (a[0] - b[0]) || (a[1] - b[1]);
        });

        //Data preparation

        if (parseInt(artiSort[0][0]) != 1) {  //if top1 doesnt exist we should add max value for it = 10.5M
            artiSort.unshift([1,maxPower]);
        }
        
        for (i in artiSort) {
            if (artiSort[i][0] == testPosition) { //if top100 exist we return position of it
                break;
            }
            else if (artiSort[i][0] > testPosition) { //if top100 doesnt exist we return previous position and inject top100 using previous position value
                artiSort.splice(i,artiSort.length,[testPosition,artiSort[i][1]]);
                break;
            } else if (i == artiSort.length - 1 && artiSort[i][0] < testPosition ) {
                artiSort.splice(artiSort.length,0,[testPosition,artiSort[i][1]]);
                break; 
            }
        }

        if (parseInt(artiSort[0][0]) != 1) { //if top1 doesnt exist need to add value for it
            artiSort.unshift([1,maxPower]);
        };

        console.log(artiSort);

        //end of data praparation

        //summary of top100 army calculation
        natarStrength = artiSort.reduce(
            function(sum,current,i) {
                if (i === 0) { 
                    return parseInt(current[1]);
                }
                else {
                    return (parseInt(sum) + 0.5 * (parseInt(artiSort[i][0]) - parseInt(artiSort[i-1][0])) * (parseInt(artiSort[i-1][1])+current[1])) 
                }
        },0);

        //end of calculation

        //creating link for arti def
        natarStrength = (natarStrength / ( 1000 * 26.01)) * 5;
        let uniqueDefCount = Math.round(natarsT1 * natarStrength) + "," 
                            + Math.round(natarsT2 * natarStrength) + ","
                            + Math.round(natarsT3 * natarStrength) + ","
                            + Math.round(natarsT4 * natarStrength) + ","
                            + Math.round(natarsT5 * natarStrength) + ","
                            + Math.round(natarsT6 * natarStrength) + ","
                            + Math.round(natarsT7 * natarStrength) + ","
                            + Math.round(natarsT8 * natarStrength) + "U";
        let greatDefCount = Math.round(natarsT1 * natarStrength / 1.5) + "," 
                            + Math.round(natarsT2 * natarStrength / 1.5) + ","
                            + Math.round(natarsT3 * natarStrength / 1.5) + ","
                            + Math.round(natarsT4 * natarStrength / 1.5) + ","
                            + Math.round(natarsT5 * natarStrength / 1.5) + ","
                            + Math.round(natarsT6 * natarStrength / 1.5) + ","
                            + Math.round(natarsT7 * natarStrength / 1.5) + ","
                            + Math.round(natarsT8 * natarStrength / 1.5) + "U"; 
        let smallDefCount = Math.round(natarsT1 * natarStrength / 2.25) + "," 
                            + Math.round(natarsT2 * natarStrength / 2.25) + ","
                            + Math.round(natarsT3 * natarStrength / 2.25) + ","
                            + Math.round(natarsT4 * natarStrength / 2.25) + ","
                            + Math.round(natarsT5 * natarStrength / 2.25) + ","
                            + Math.round(natarsT6 * natarStrength / 2.25) + ","
                            + Math.round(natarsT7 * natarStrength / 2.25) + ","
                            + Math.round(natarsT8 * natarStrength / 2.25) + "U";

        let foolDefCount = Math.round(natarsT1 * natarStrength / 2.72) + "," 
                            + Math.round(natarsT2 * natarStrength / 2.72) + ","
                            + Math.round(natarsT3 * natarStrength / 2.72) + ","
                            + Math.round(natarsT4 * natarStrength / 2.72) + ","
                            + Math.round(natarsT5 * natarStrength / 2.72) + ","
                            + Math.round(natarsT6 * natarStrength / 2.72) + ","
                            + Math.round(natarsT7 * natarStrength / 2.72) + ","
                            + Math.round(natarsT8 * natarStrength / 2.72) + "U";

        let uniueDef = "http://travian.kirilloid.ru/warsim2.php#a:r6p200m5u,,,18kU!hs100,100ci7,5Ib#d:p200r4m9#r4u" + uniqueDefCount;
        let greatDef = "http://travian.kirilloid.ru/warsim2.php#a:r6p200m5u,,,18kU!hs100,100ci7,5Ib#d:p200r4m9#r4u" + greatDefCount;
        let smallDef = "http://travian.kirilloid.ru/warsim2.php#a:r6p200m5u,,,18kU!hs100,100ci7,5Ib#d:p200r4m9#r4u" + smallDefCount;
        let foolDef = "http://travian.kirilloid.ru/warsim2.php#a:r6p200m5u,,,18kU!hs100,100ci7,5Ib#d:p200r4m9#r4u" + foolDefCount;



        artiSort = [];
        let natarDef = [uniueDef, greatDef,smallDef,foolDef];
        return natarDef;
      
        
    }
}