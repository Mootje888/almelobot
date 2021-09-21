const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Informatie')
            .setDescription("De Maker van de bot is Mo!!")
            .setColor("#0099ff")
            .addField("Bot naam", client.user.username);

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}