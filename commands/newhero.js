module.exports = {
    findHeroEquip (herostr) {
        let heroEquipResult;


        if(message.attachments.first()) {
            if(message.attachments.first().contentType === `image/png`){
                download(message.attachments.first().url);
            }
        };

        function download(url){
				
            request.get(url)
                .on('error', console.error)
                heroimglink = url;
        };

        let x;
		let y;

		let item = getPixels(heroimglink, function(err, pixels) {
			if(err) {
				console.log("Bad image path");
				return;
			}

			const r = pixels.get(x, y, 0);
			const g = pixels.get(x, y, 1);
			const b = pixels.get(x, y, 2);
			const a = pixels.get(x, y, 3);
			const rgba = `color: rgba(${r}, ${g}, ${b}, ${a});`;
			console.log(rgba);

            return rgba;
		});
			
		message.reply({content: "**Teuton Clubs Tier 1**"});


        // Helmet
            //Culture Points tier 1

            //Culture Points tier 2

            //Culture Points tier 3

        
    }
}