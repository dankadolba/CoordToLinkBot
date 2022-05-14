const { Client, Intents, DiscordAPIError, MessageEmbed, MessageActionRow, MessageButton, Message, Interaction } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { hyperlink } = require('@discordjs/builders');
const { token, server } = require('./config.json');
const matchAll = require('string.prototype.matchall');

let heroFind = require('./commands/hero.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


const prefix = "!";
var artiInf = [];
var heroArrTracker = [];


client.on('messageCreate', message => {
	
	if (message.author.bot) return;

	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	let args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	switch (command) {
		case "spam":
			try {
				if ((args.length != 3) || ((args[2] != "19+1") && (args[2] != "17+1+1+1"))) {
					throw new Error("Please check that command have next params order !spam xCoord yCoord 19+1 or !spam xCoord yCoord 17+1+1+1")
				}
			} catch (err) {
				console.log(err + "command: " + command + "args" + args);
				message.reply("Please check that command have next params order !spam xCoord yCoord 19+1 or !spam xCoord yCoord 17+1+1+1");
			};

			const xCoord = args[0];
			const yCoord = args[1];
			const spamType = args[2];
				

			if (spamType === "19+1") {
				let spam_19_1 = server + 'build.php?id=39&tt=2&x=' +  xCoord + '&y=' + yCoord + "&troops[0][t1]=19" + "&troops[0][t8]=1" + "&c=3" + '&gid=16'

				const troopsButton_19_1 = new MessageActionRow()
					.addComponents(
						new MessageButton()
						.setLabel('Spam 19+1 to ' + xCoord + '/' + yCoord)
						.setStyle('LINK')
						.setURL(spam_19_1)
					);
				message.channel.send({content: '** **', components: [troopsButton_19_1]})
			}
			else if (spamType === "17+1+1+1") {
				let spam_17_1_1_1 = server + 'build.php?id=39&tt=2&x=' +  xCoord + '&y=' + yCoord + "&troops[0][t1]=17" + "&troops[0][t6]=1" + "&troops[0][t7]=1" + "&troops[0][t8]=1" +  "&c=3" + '&gid=16'
			
				const troopsButton_17_1_1_1 = new MessageActionRow()
					.addComponents(
					new MessageButton()
						.setLabel('Spam 17+1+1+1 to ' + xCoord + '/' + yCoord)
						.setStyle('LINK')
						.setURL(spam_17_1_1_1)
				);

				message.channel.send({content: '** **', components: [troopsButton_17_1_1_1]})
			}

			break;
		case "o":
		case "overview":
			if (args.length !=2) {
				console.log("command: " + command + "args" + args);
				message.reply("Please check that command have next params orders !o xCoord yCoord or !overview xCoord yCoord")
			}
			else {
				const xCoord = args[0];
				const yCoord = args[1];

				let overviewLink = server + "position_details.php?x=" + xCoord + "&y=" + yCoord;

				const overviewButton = new MessageActionRow()
					.addComponents(
					new MessageButton()
						.setLabel("Link to villa overview " + xCoord + '/' + yCoord)
						.setStyle('LINK')
						.setURL(overviewLink)
				);

				message.channel.send({content: "** **", components: [overviewButton]})
			}
			break;
		case "push":
		case "market":
			if (args.length !=2) {
				console.log("command: " + command + "args" + args);
				message.reply("Please check that command have next params order !o xCoord yCoord or !overview xCoord yCoord");
			}
			else {
				const xCoord = args[0];
				const yCoord = args[1];

				let marketLink = server + "build.php?gid=17&x=" + xCoord + "&y=" + yCoord + "&t=5";

				const marketButton = new MessageActionRow()
					.addComponents(
					new MessageButton()
						.setLabel("Link to Market " + xCoord + "/" + yCoord)
						.setStyle("LINK")
						.setURL(marketLink)
					)
					message.channel.send({content: "** **", components: [marketButton]})
			};
			break;
		case "troops":
			if (args.length !=2) {
				console.log(err + "command: " + command + "args" + args);
				message.reply("Please check that command have next params order !o xCoord yCoord or !overview xCoord yCoord");
			}
			else {
				const xCoord = args[0];
				const yCoord = args[1];

				let troopsLink = server + 'build.php?id=39&tt=2&x=' +  xCoord + '&y=' + yCoord

				const troopsButton = new MessageActionRow()
					.addComponents(
					new MessageButton()
						.setLabel("Send troops to " + xCoord + "/" + yCoord)
						.setStyle("LINK")
						.setURL(troopsLink)
					)
					message.channel.send({content: "** **", components: [troopsButton]})
			}
			break;
		case "help":
			message.channel.send({content: "FAQ can be found here https://github.com/dankadolba/CoordToLinkBot/blob/master/README.en.md"});
			break;
		case "off":
			try {
				if ((args.length === 2) && (Number.isInteger(parseInt(args[0]))) && (Number.isInteger(parseInt(args[1])))) {
					artiInf.push([parseInt(args[0]),parseInt(args[1])]);
				} else {
					throw new Error("Error in the off section");
				}
			} catch (err) {
				console.log(err + "command: " + command + "args" + args);
				message.reply("Please check that command have next params order !off position power")
			}
			break;
		case "artidef":
			let artiDefCalc = require('./commands/artidef.js');
			let artiToDef = artiInf.slice();

			try {
				if (artiToDef.length != 0) {
					let artiDefPredictionResult = artiDefCalc.artiDefPrediction(artiToDef);

				const artiDefEmbded = new MessageEmbed()
					.setTitle('Artifact def prediction')
					.setColor('#FF0000');

				const uniqueDefButton = new MessageActionRow()
				.addComponents(
			  		new MessageButton()
			  		.setLabel('Unique arti def')
			  		.setStyle('LINK')
			  		.setURL(artiDefPredictionResult[0])
				); 

				const greatDefButton = new MessageActionRow()
				.addComponents(
			  		new MessageButton()
			  		.setLabel('Great arti def')
			  		.setStyle('LINK')
			  		.setURL(artiDefPredictionResult[1])
				); 

				const smallDefButton = new MessageActionRow()
				.addComponents(
					new MessageButton()
			  		.setLabel('Small arti def')
			  		.setStyle('LINK')
			  		.setURL(artiDefPredictionResult[2])
				);

				const foolDefButton = new MessageActionRow()
				.addComponents(
			  		new MessageButton()
			  		.setLabel('Fool arti def')
			  		.setStyle('LINK')
			  		.setURL(artiDefPredictionResult[3])
				); 

					message.channel.send({embeds: [artiDefEmbded], components: [uniqueDefButton,greatDefButton,smallDefButton,foolDefButton]});
				} else {
					throw new Error("Please add any off before using !artidef command")
				}
			} catch (err) {
				console.log(err + "command: " + command + "args" + args);
				message.reply("Please add any off before using !artidef command");
			};
			

			break;	
		case "hero":
			let heroLink = args[0].split("/body/");

			try {
				if (heroLink.length != 0) {
					let heroEquip = heroLink[1].split(".png",1).toString().slice(40);
					// message.channel.send({content: heroFind.findHeroEquip(heroEquip)});
					let heroArr = heroFind.findHeroEquip(heroEquip).split(', ');
					const heroEmbed = new MessageEmbed()
						.setTitle('Hero equip')
						.setColor('#0000AA')
						.setFields(
							{name: 'Horse:', value: heroArr[0], inline: true}, 
							{name: 'Helmet:', value: heroArr[1], inline: true},
							{name: 'Right hand:', value: heroArr[2], inline: true},
							{name: 'Left hand:', value: heroArr[3], inline: true},
							{name: 'Body:', value: heroArr[4], inline: true},
							{name: 'Shoes:', value: heroArr[5], inline: true}
						);
		
					message.channel.send({embeds: [heroEmbed]});
				} else {
					throw new Error("Please check that command have next params order !hero link")
				}
			} catch (err) {
				console.log(err + "command: " + command + "args" + args);
				message.reply("Please check that command have next params order !hero link")
			}
			break;
		case "spamlist":
			let spamListCommand = require('./commands/spamlist.js');
			let spamListArr = [];
			let spamLink;
			let k = 1;

			try {
				if (((args.length - 1) % 2 === 0)) {
					let spamListForButton = spamListCommand.createSpamListLink(args);
		
					for (let i = 0; i < spamListForButton.length; i = i + 3) {
						let xCoord = spamListForButton[i];
						let yCoord = spamListForButton[i+1];
						if (spamListForButton[i+2] == '17+1+1+1') {
							let spam_17_1_1_1 = server + 'build.php?id=39&tt=2&x=' +  xCoord + '&y=' + yCoord + "&troops[0][t1]=17" + "&troops[0][t6]=1" + "&troops[0][t7]=1" + "&troops[0][t8]=1" + "&c=3" + '&gid=16';
							spamLink = hyperlink('Spam target ' + k + " to " + xCoord + "/" + yCoord , spam_17_1_1_1);
							k++;
							spamListArr = spamListArr + spamLink + "\n --- \n"; 
						}  else if (spamListForButton[i+2] == '19+1') {
							let xCoord = spamListForButton[i];
							let yCoord = spamListForButton[i+1];
		
							let spam_19_1 = server + 'build.php?id=39&tt=2&x=' +  xCoord + '&y=' + yCoord + "&troops[0][t1]=19" + "&troops[0][t8]=1" + "&c=3" + '&gid=16';
							spamLink = hyperlink('Spam target ' + k + " to " + xCoord + "/" + yCoord, spam_19_1);
							k++;
							spamListArr = spamListArr + spamLink + "\n --- \n";
						}
					};

					const SpamListEmbded = new MessageEmbed()
					.setTitle('Dont forget to send spam to all target')
					.setColor('#FF0000');
					
					SpamListEmbded.addField("Spam List: ", spamListArr);
					message.channel.send({embeds: [SpamListEmbded]});
					spamListArr.length = 0;
				} else {
					throw new Error("Please check that command have next params order !spamlist xCoord yCoord spamtype xCoord yCoord spamtype ...");
				}
			} catch (err) {
				spamListArr.length = 0;
				console.log(err + "command: " + command + "args: " + args);
				message.reply("Please check that command have next params order \n!spamlist xCoord yCoord spamtype and all new params into new string");
			}
			break;
		case "tr":
			let trLink = require('./commands/tr.js');
			
			try {
				if ( (args.length === 8) && 
					((args[6] != "deliver") || (args[6] != "send"))  &&
					((args[7] != 24) || (args[7] != 12) || (args[7] != 8) || (args[7] != 6) || (args[7] != 4) || (args[7] != 3) || (args[7] != 2) || (args[7] != 1))
					) {
					const trButton = new MessageActionRow()
					.addComponents(
						new MessageButton()
						.setLabel("Tap to create TR")
						.setStyle("LINK")
						.setURL(trLink.trFunction(server, args))
					)
	
					message.channel.send({content: "** **", components: [trButton]})
				} else {
					throw new Error("Traderoutes error")
				}

			} catch (err) {
				console.log(err + " command: " + command + " args: " + args);
				message.reply("Please check that command have next params order !tr villaId woodCount clayCount ironCount cropCount hh:mm type repeatTime");
			}



			break;
		case "herotracker":
			let heroTrack = require('./commands/herotracker.js');
			try {

				if (args[0].indexOf("/hero/body/") === -1) {
					throw new Error("No Link")
				}

				if(!args[1]) {
					throw new Error("No Nickname")
				}

				let heroDiffInfo = heroTrack.heroTracker(heroArrTracker, args[0],args[1]);

				if (heroDiffInfo.length != 0) {
					message.reply(heroDiffInfo[0] + heroDiffInfo[1] + heroDiffInfo[2])
						.then(() => console.log(`Replied to message "${message.content}"`))
						.catch(console.error);
				}
			} catch (err) {
				console.log(err + "command: " + command + "args" + args);
				message.reply("Please check that command have next params order !herotracker link nickname");
			}
			break;
		case "offclear":
			artiInf.length = 0;
			message.channel.send({content: "**Information about off successfully deleted**"});
			break;
	}
})

client.login(token);
