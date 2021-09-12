const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('Een titel')
            .setDescription("Zet de beschrijving")
            .setColor("#0099ff")
            .addFields(
                {name: "!giveaway", value: "NEXT:"},
                {name: "!hallo", value: "NEXT:"},
                {name: "!info", value: "NEXT:"},
                {name: "!ping", value: "NEXT:"},
                {name: "!serverinfo", value: "NEXT:"},
                {name: "!ticket", value: "EINDE"}
            );

        return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "help"
}