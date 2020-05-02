'use_strict';

const Discord = require('discord.js');
const client = new Discord.Client();

const moment = require('moment');

const settings = require('./settings.json');

client.commands = new Map();
client.aliases = new Map();
client.guildlist = new Map();
client.roleList = new Map();

// Loader
require('./utils/commandLoader')(client);
require('./utils/guildLoader')(client);
require('./utils/eventLoader')(client);

/**
 * @param {string} type
 * @param {string} log
 */
client.sendLog = (type, log) => {

    const channelId = client.guildlist.get('bot_manager').channels.get(type).id;
    client.channels.fetch(channelId)
    .then(channel => {
        channel.send(`\`[${moment().format('HH:mm:ss').locale('fr')}]\` | ${log}`);
    });

}

client.login(settings.token || process.env.TOKEN);
