const Discord = require("discord.js");
const google = require("google-tts-api");
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix;
exports.run = (client, message) => {
      const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send(`First you need to enter an audio channel.`)
    google(`${args.slice(' ')}`, 'tr', 1).then(url => {
        message.member.voiceChannel.join().then(connection => {
            message.channel.send(`Completed`)
            connection.playStream(url).on("end", () => {
                connection.disconnect();
            })
        })
    })
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["söyle",'Say it'],
    permLevel: 1,
  kategori: "kullanıcı"
};
exports.help = {
    name: '**!Söyle** ,',
    description: 'Bota yazdığınız şeyi sesli mesaj olarak söyletir',
    usage: 'söyle <mesaj>'
};