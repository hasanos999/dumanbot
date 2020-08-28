const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")){
   message.channel.send("**You need the Manage Server permission in order to change settings**")
  }else{
  let nesne = args[0]
  if (!nesne) return message.channel.send('Channel tuning could not be done.')
    
  db.set(`giriscikis_${message.guild.id}`, nesne)
   message.channel.send("Now the I / O messages will be sent to the "+ object +" channel.")
  }   
 };
                                        
  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['girişçıkış'],
    permLevel: 0,
  
}

exports.help = {
    name: 'set in / out',
    description: 'Mod log kanalını ayarlar.',
    usage: 'mod-log-ayarla <#kanal>'
}