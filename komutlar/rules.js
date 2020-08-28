const Discord = require('discord.js')
const { RichEmbed } = require('discord.js')
exports.run = (client, message, args) => {

  let yazıİçeriği = args.slice().join(' ')
  const Mesaj = new RichEmbed()
	.setColor('#0099ff')
	.setTitle('Website')
	.setURL('https://www.craftrise.tc/lonca/befa16a1-7800-4d5d-9b3c-0f6f4360e6d3')
	.setAuthor('PeeVed', 'https://cdn.glitch.com/9e3a1417-6901-4041-baf5-d8644c0da566%2FPeeVed.jpg?v=1598087071137', 'https://discord.gg/VVfzqjs')
	.setDescription('** • Rules • **\n\n** Advertisement **\n** • ** It is forbidden to make oral advertisements, advertisements with links, advertisements for special purposes, advertisements with images and similar advertisements.\n\n** Swearing, Slang, Insulting **\n** • ** It is forbidden to use swearing and slang in all channels.\n** • ** Insulting and mocking members is prohibited.\n\n** Channels **\n* * • ** Outside the command channel, the command is prohibited.\n** • ** It is forbidden to play music other than the audio channel.\n** • ** You can find useful information in the channel descriptions.\n\n** Authorization and Authorization **\n** • ** It is forbidden to request authorization.\n** • ** Spamming officials via @ tagging and @ tagging is prohibited.\n** • ** Be respectful to the authorities.\n\n** Spam and Tagging **\n** • ** Spam is prohibited.\n** • ** It is forbidden to write words in the permanent message.\n** • ** @ Tagging a member is prohibited.\n\n** Religion, Politics, Sexuality **\n** • ** It is forbidden to talk, discuss, publish usernames related to religion.\n** • ** It is forbidden to talk, discuss and use users about politics.\n** • ** Posting more than 18 photos is prohibited.\n\n** Fights, Discussions **\n** • ** It is forbidden to fight, fight and argue.')
	.setThumbnail('https://cdn.glitch.com/9e3a1417-6901-4041-baf5-d8644c0da566%2FraccoonHead.png?v=1598031841290')
	
	.setTimestamp()
	.setFooter('PeeVed', 'https://cdn.glitch.com/9e3a1417-6901-4041-baf5-d8644c0da566%2FPeeVed.jpg?v=1598087071137');

message.channel.send(Mesaj)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rule','rules'],
  permLevel: 0,
  kategori: "kullanıcı"
  
}

exports.help = {
  name: '**!Kurallar** ,'

}