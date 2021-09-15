const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setColor("#3e81ed")
    .addFields(
        {name: "Vraag 1", value: "Voor welke eenheid solliciteer je?"},
        {name: "Vraag 2", value: "Wat is je Roblox naam?"},
        {name: "Vraag 3 ", value: "Waarom wil je HR worden?"},
        {name: "Vraag 4 ", value: "Wat wil je Bereiken als staff?"},
        {name: "Vraag 5 ", value: "Als een hogere rank je aanspreekt zal jij gaan luisteren?"},
        {name: "Vraag 6 ", value: "Noem minimaal 5 begrippen van je eenheid op waarvoor je solliciteert."},
        {name: "Vraag 7 ", value: "Hoeveel trainingen ga je per week kunnen geven?"},
        {name: "Vraag 8 ", value: "Hoe ga je je trainingen geven?"},
        {name: "Vraag 9 ", value: "Motivatie? (Minimaal 50 woorden.)"},
        {name: "Vraag 10 ", value: "Wat is AA?"},
        {name: "Vraag 11 ", value: "Hoe vaak ben jij online op een schaal van 1/10?"},
        {name: "Vraag 12", value: "Respecteer jij andere?"},
        {name: "Vraag 13 ", value: "Ga je je cmds misbruiken?"},
        {name: "Vraag 14 ", value: "Waarom moeten we jouw kiezen en geen ander?"},
        {name: "Vraag 15 ", value: "EXTRA: Zijn er nog vragen/opmerkingen?"}
    );


    return message.channel.send(botEmbed);
}


module.exports.help = {
    name: "vragen"
}