const { Client, Intents, DiscordAPIError, MessageEmbed, MessageActionRow, MessageButton, Message, Interaction } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { token, server } = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


const prefix = "!";
var artiInf = [];


client.on('messageCreate', message => {
	
	if (message.author.bot) return;

	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	let args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	switch (command) {
		case "spam":
			if ((args.length != 3) || ((args[2] != "19+1") && (args[2] != "17+1+1+1"))) {
				message.channel.send({content: "Please use format !spam xCoord yCoord 19+1 or !spam xCoord yCoord 17+1+1+1"})
			}
			else  {

				const xCoord = args[0];
				const yCoord = args[1];
				const spamType = args[2];
				

				if (args[2] === "19+1") {
					let spam_19_1 = server + 'build.php?id=39&tt=2&x=' +  xCoord + '&y=' + yCoord + "&troops[0][t1]=19" + "&troops[0][t8]=1" + '&gid=16'

					const troopsButton_19_1 = new MessageActionRow()
						.addComponents(
							new MessageButton()
							.setLabel('Spam 19+1 to ' + xCoord + '/' + yCoord)
							.setStyle('LINK')
						.setURL(spam_19_1)
						);

					message.channel.send({content: '** **', components: [troopsButton_19_1]})
				}
				else if (args[2] === "17+1+1+1") {
				let spam_17_1_1_1 = server + 'build.php?id=39&tt=2&x=' +  xCoord + '&y=' + yCoord + "&troops[0][t1]=17" + "&troops[0][t6]=1" + "&troops[0][t7]=1" + "&	troops[0][t8]=1" + '&gid=16'
				
				const troopsButton_17_1_1_1 = new MessageActionRow()
					.addComponents(
					new MessageButton()
						.setLabel('Spam 17+1+1+1 to ' + xCoord + '/' + yCoord)
						.setStyle('LINK')
						.setURL(spam_17_1_1_1)
					);

				message.channel.send({content: '** **', components: [troopsButton_17_1_1_1]})
				}
			}
			break;
		case "o":
		case "overview":
			if (args.length !=2) {
				message.channel.send({content: "Please use format !o xCoord yCoord or !overview xCoord yCoord"})
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
				message.channel.send({content: "Please use format !o xCoord yCoord or !overview xCoord yCoord"})
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
				message.channel.send({content: "Please use format !o xCoord yCoord or !overview xCoord yCoord"})
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
			message.channel.send({content: "List of command - !spam,!spamlist !, !o or !overview, !push or !market, !troops, !artidef, !hero, !off. \n\ Now works only with space as separator"});
			break;
		case "off":
			artiInf.push([parseInt(args[0]),parseInt(args[1])]);
			break;
		case "artidef":
			let artiDefCalc = require('./commands/artidef.js');
			let artiToDef = artiInf.slice();

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

			break;	
		case "hero":
			let heroFind = require('./commands/hero.js');
			let heroLink = args[0].split("/body/");
			let heroEquip = heroLink[1].split(".png",1).toString().slice(40);
			message.channel.send({content: heroFind.findHeroEquip(heroEquip)}); 
			break;
		case "spamlist":
			let spamListCommand = require('./commands/spamlist.js');
			let spamListForButton = spamListCommand.createSpamListLink(args);

			const SpamListEmbded = new MessageEmbed()
			.setTitle('Dont forget to send spam to all target')
			.setColor('#FF0000');

			for (let i = 0; i < spamListForButton.length; i = i + 3) {
				let xCoord = spamListForButton[i];
				let yCoord = spamListForButton[i+1];
				if (spamListForButton[i+2] == '17+1+1+1') {
					let spam_17_1_1_1 = server + 'build.php?id=39&tt=2&x=' +  xCoord + '&y=' + yCoord + "&troops[0][t1]=17" + "&troops[0][t6]=1" + "&troops[0][t7]=1" + "&	troops[0][t8]=1" + '&gid=16'
					let SpamButton_17_1_1_1 = new MessageActionRow()
					.addComponents (
						new MessageButton()
						.setLabel('Spam 17+1+1+1 to ' + " to " + xCoord + "/" + yCoord)
						.setStyle('LINK')
						.setURL(spam_17_1_1_1)
					);
					if (i == 0) {
						message.channel.send({embeds: [SpamListEmbded], components: [SpamButton_17_1_1_1]});
					} else {
						message.channel.send({content: '** **', components: [SpamButton_17_1_1_1]});
					};
					
				}  else if (spamListForButton[i+2] == '19+1') {
					let xCoord = spamListForButton[i];
					let yCoord = spamListForButton[i+1];

					let spam_19_1 = server + 'build.php?id=39&tt=2&x=' +  xCoord + '&y=' + yCoord + "&troops[0][t1]=19" + "&troops[0][t8]=1" + '&gid=16';
					let SpamButton_19_1 = new MessageActionRow()
					.addComponents (
						new MessageButton()
						.setLabel('Spam 19+1 to ' + " to " + xCoord + "/" + yCoord)
						.setStyle('LINK')
						.setURL(spam_19_1)
					);
					if (i == 0) {
						message.channel.send({embeds: [SpamListEmbded], components: [SpamButton_19_1]});
					} else {
						message.channel.send({content: '** **', components: [SpamButton_19_1]});
					}
					
				}
			};
				
			
			break;
	}
})

client.login(token);
