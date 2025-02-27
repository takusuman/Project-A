const { RichEmbed } = require('discord.js')

/**
 * O evento guildMemberAdd é emitido após um membro entrar (ser adicionado em uma guild).
 */

module.exports = (client, member) => {
  const message = new RichEmbed()
    .setThumbnail(member.user.displayAvatarURL)
    .setColor('RANDOM')
    .setAuthor('👤 Um membro saiu do servidor!')
    .setDescription(`${member} acabou de sair.`)
    .setFooter('2020 ©Liga dos Programadores')
    .setTimestamp()

  member.guild.channels.get(process.env.LEAVECHANNEL).send(message).catch()
}
