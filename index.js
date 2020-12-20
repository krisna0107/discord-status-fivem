const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
const config = require('./config.json')

client.login(config.token);

function getPlayers() {
    setTimeout(() => {
        fetch(config.host+'/dynamic.json')
        .then(res => res.json())
        .then(json => {
            client.user.setActivity("player(s) " + json.clients + "/" + json.sv_maxclients, { type: config.type })
        })
        .catch(e => {
            client.user.setActivity(config.off_status, { type: config.type }),
            console.log(e)
        })
        getPlayers();
    }, 10000);
}
getPlayers();