module.exports = {
    newherotracker (newheroArrTracker, heroImage, nick) {
        
        let newHeroFind = reiqure('./newhero.js');

        let heroWasAddedTime = new Date();

        let heroDiff = [];

        newheroArrTracker.unshift([heroImage,nick,heroWasAddedTime]);

        function newHeroItems (heroImage) {
            return newHeroFind.findHeroEquip(heroImage).split(', ')
        };

        for (let i = 1; i <= heroArrTracker.length; i++) {
            if ((i != 1) && (heroArrTracker[i-1].includes(nick))) {
               if (heroLink != heroArrTracker[i-1][0]){
                   heroDiff.push([heroLink,heroWasAddedTime]);
                   heroDiff.push([heroArrTracker[i-1][0],heroArrTracker[i-1][2]]);
                   break;
               }
            }
        }

        let result = [];

        if (heroDiff.length != 0) {
            result[0] = "";
            result[1] = "";
            result[2] = "";
            let heroAfter = newHeroItems(heroDiff[0][0]);
            let heroBefore = newHeroItems(heroDiff[1][0]);
            

            for (let i = 1; i <= 6; i++) {
                if (heroAfter[i-1] != heroBefore[i-1]) {
                }                    result[0] = result[0] + "Item changed from " + heroBefore[i-1] + " to " + heroAfter[i-1] + ";\n"

            }
            result[1] = "Hero changed between " + heroDiff[1][1] + " and " + heroDiff[0][1] + "\n";
            result[2] = nick;
        }

        return result;

        

    }
}