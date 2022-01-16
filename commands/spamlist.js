module.exports = {
    createSpamListLink (spamList) {
        
        let spamListDataPreparation = []
        spamList.forEach(element => spamListDataPreparation.push(element));

        let spamListResult = [];

        for (i in spamListDataPreparation) {
            let k = spamListDataPreparation[i].indexOf('\n');
            if (k === -1) {
                spamListResult.push(spamListDataPreparation[i]);
            } else {
                let supArray = spamListDataPreparation[i].split('\n');
                spamListResult.push(supArray[0]);
                spamListResult.push(supArray[1]);
            }
        }
        
        return spamListResult;
    }
};