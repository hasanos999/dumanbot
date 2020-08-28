const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
  let isim = args.slice(1).join(' ');
  let kullanici = message.mentions.users.first();
  if(!kullanici) return message.reply(`Please enter a user name! \nCorrect Use; \`${prefix}isimdeğiştir @${client.user.username}#${client.user.discriminator} <yeni isim>\``).then(msg => msg.delete(5000))
  if(!isim) return message.reply(`Please enter a user name! \nCorrect Use; \`${prefix}isimdeğiştir @${client.user.username}#${client.user.discriminator} <yeni isim>\``).then(msg => msg.delete(5000))
  if(isim.length > 32) return message.reply(`Please enter a name that does not exceed **32** characters!`)
  message.guild.members.get(kullanici.id).setNickname(`${isim}`)

  message.guild.members.get(kullanici.id).addRole("740560451628302356")
    message.guild.members.get(kullanici.id).removeRole("740551290957856778")
  message.channel.send(`Complated`).then(msg => msg.delete(5000))
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isimdegistir'],
    permLevel: 0,
   
}

exports.help = {
    name: 'register',
    description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
    usage: 'isimdeğiştir @kullanıcı <kullanıcı adı>'
}