const Discord = require('discord.js');

var hd = [
    "Tura",
    "Yazı",
    
];

module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " Para Döndü: " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yazıtura",'Yazı Tura'],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: '**!yazıtura** ',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'yazı-tura'
};