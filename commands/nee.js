const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    return message.channel.send("NEE!!");

}

module.exports.help = {
    name: "nee"
}