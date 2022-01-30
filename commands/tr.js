module.exports = {
    trFunction (server, trArgs) {
        let villaId = trArgs[0];
        let woodCount = trArgs[1];
        let clayCount = trArgs[2];
        let ironCount = trArgs[3];
        let cropCount = trArgs[4];
        let timeHour = trArgs[5].split(":")[0]
        let timeMinute = trArgs[5].split(":")[1]
        let trMode = trArgs[6];
        let repeatTimer = trArgs[7];
        
        let resultTrLink = server + "build.php?gid=17&t=0&show-destination=on&did_dest=" + villaId + "&r1=" + woodCount + "&r2=" + clayCount + "&r3=" + ironCount + "&r4=" + cropCount + "&trade_route_mode=" + trMode + "&hour=" + timeHour + "&minute=" + timeMinute + "&repeat=1&every=" + repeatTimer + "&a=0&trid=0&option=256"

        return  resultTrLink;


    }
}