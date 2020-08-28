const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
  	let sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
    	let otorolkapat = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
		if(!sunucuyaözelayarlarOtorol[message.guild.id]) {
			const embed = new Discord.RichEmbed()
				.setDescription(`Set Auto Role First`)
				.setColor("RED")
			message.channel.send({embed})
			return
		}
		delete sunucuyaözelayarlarOtorol[message.guild.id]
		fs.writeFile("./otorol.json", JSON.stringify(sunucuyaözelayarlarOtorol), (err) => {
			console.log(err)
		})
		const embed = new Discord.RichEmbed()
			.setDescription(`Completed`)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
	}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0,

};

exports.help = {
  name: 'autorole reset', 
  description: 'Slots oyunu oynar',
  usage: 'otorolkapat'
};