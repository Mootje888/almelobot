const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setColor("#1299ff")
            .addFields(
                {name: "Members", value:message.guild.memberCount}
            );

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "leden"
}