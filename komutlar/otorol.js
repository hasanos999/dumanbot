const fs = require ('fs')
const Discord = require('discord.js')
var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));


exports.run = async (bot, message, args) =>
{
  	let profil = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "reset") return message.channel.send("You Don't Tag A Role For Me To Set Up.");
  if (message.guild.member(message.author.id).hasPermission(0x8))
    
    {
      var mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.channel.send("**Wrong use**".then(msg => msg.delete(5000)));
      

	if(!profil[message.guild.id]){
    
		profil[message.guild.id] = {
      
			sayi: mentionedRole.id,
      kanal: mentionedChannel.id
		};
	}
	
	profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id
	
	fs.writeFile("./otorol.json", JSON.stringify(profil), (err) => {
		console.log(err)

	})

	const embed = new Discord.RichEmbed()
		.setDescription(`Completed`)
		.setColor("RANDOM")
		.setTimestamp()
	message.channel.send({embed})
}

}



exports.conf =
{
  enabled: true,
  guildOnly: true,
  aliases: ["setautorole", "otorol", "otoroldeğiştir"],

}

exports.help =
{
  name: 'autorole',
  description: 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.',
  usage: 'otorolayarla'
}