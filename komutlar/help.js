const Discord = require('discord.js')
const { RichEmbed } = require('discord.js')
exports.run = (client, message, args) => {

  let yazıİçeriği = args.slice().join(' ')
  const Mesaj = new RichEmbed()
	.setColor('#0099ff')
	.setTitle('Lonca Katılım Linki')
	.setURL('https://www.craftrise.tc/lonca/befa16a1-7800-4d5d-9b3c-0f6f4360e6d3')
	.setAuthor('PeeVed', 'https://cdn.glitch.com/9e3a1417-6901-4041-baf5-d8644c0da566%2FPeeVed.jpg?v=1598087071137', 'https://discord.gg/VVfzqjs')
	.setDescription('** • Commands • **\n\n** Example Usage\n!Help **\n\n**!Rules **\n** • ** Shows you the Rules on Our Server.\n\n**!Invitation **\n** • ** Creates Invitation Link For You.\n\n**!8ball **\n** • ** Randomly Answers the Question You Ask.\n\n**!Emoji Text **\n\n** • ** Converts Your Text to Emoji.\n\n**!ServerPP **\n** • ** Shows Servers Profile Photo.\n\n**!Sayı Tahmin **\n** • ** You Play a Guessing Number Game.\n\n**!Say it **\n** • ** Voice Your Message Sings Aloud on His Channel. \n\n**!The Wheel of Stress **\n** • **A Stress Wheel Spins For You .. \n\n**!Yazı Tura **\n** • ** Is Text? Heads?')
	.setThumbnail('https://cdn.glitch.com/9e3a1417-6901-4041-baf5-d8644c0da566%2FraccoonHead.png?v=1598031841290')
	
	.setTimestamp()
	.setFooter('PeeVed', 'https://cdn.glitch.com/9e3a1417-6901-4041-baf5-d8644c0da566%2FPeeVed.jpg?v=1598087071137');

message.channel.send(Mesaj)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
  kategori: "kullanıcı"
  
}

exports.help = {
  name: '**!Yardım** ,'

}

//\n\n**!YazıTura**\n**•**

//** • Commands • **\n\n** Example Usage\n!Help **\n\n**!Rules **\n** • ** Shows you the Rules on Our Server.\n\n**!Invitation **\n** • ** Creates Invitation Link For You.\n\n**!8ball **\n** • ** Randomly Answers the Question You Ask.\n\n**!Emoji Text **\n\n** • ** Converts Your Text to Emoji.\n\n**!ServerPP **\n** • ** Shows Server's Profile Photo.\n\n**!Sayı Tahmin **\n** • ** You Play a Guessing Number Game.\n\n**!Say it **\n** • ** Voice Your Message Sings Aloud on His Channel. \n\n**!The Wheel of Stress **\n** • **A Stress Wheel Spins For You .. \n\n**!Yazı Tura **\n** • ** Is Text? Heads?