const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Hoogezand RP")
    .setDescription("Hoogezand is een RP game")
    .setColor("#3e81ed")
    .addFields(
        {name: "Maker van de bot", value: "Mootje"},
        {name: "Naam server", value: "Hoogezand RP"},
        {name: "Totaal Members", value: message.guild.memberCount}
    )
    .addField("Bot naam", client.user.username);


    return message.channel.send(botEmbed);
}


module.exports.help = {
    name: "serverinfo"
}