'use_strict';

const settings = require('../settings.json');

/**
 * @param {Message} oldMessage
 * @param {Message} message
 */
module.exports = (oldMessage, message) => {

    if (!message.guild) return;
    if (message.author.bot) return;

    const client = message.client;
    const guild = client.guildlist.get('zone_dev');

    if (message.id === guild.channels.get('regles-bis').messages[0]) {

        const channel = guild.channels.get('regles');

        client.channels.cache.get(channel.id).messages.fetch(channel.messages[0]).then(m => {
            m.edit(message);
        });

    }

};
