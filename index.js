const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.token)

client.on('message', (message ) =>{
    if(message.content == "a!ora"){
        var data = new Date();
        var ora = data.getHours();
        var minuti = data.getMinutes();

        message.channel.send('ORA ATTUALE :alarm_clock: :' + ora + ':' + minuti)
    }
});