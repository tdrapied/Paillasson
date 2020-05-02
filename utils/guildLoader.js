'use_strict';

const guilds = require('../data/guilds.json');

/**
 * @param {Client} client
 */
module.exports = client => {

    for (const guildName in guilds) {

        const guild = new Object();
        guild.id = guilds[guildName].id;
        guild.channels = new Map();

        for (const channelName in guilds[guildName].channels) {
            guild.channels.set(channelName, guilds[guildName].channels[channelName]);
        }

        client.guildlist.set(guildName, guild);

    }

};
