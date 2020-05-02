'use_strict';

const emoteSearch = require('../utils/emoteSearch');

/**
 * @param {Message} message
 */
module.exports = message => {

    const client = message.client;

    // If user has not role "verified"
    if (!client.roleList.has('verified')) return;
    if (!message.member.roles.cache.has(client.roleList.get('verified').id)) return;

    try {
        // Execute code
        const result = eval(message.content.substring(3));
        message.channel.send(`:white_check_mark: | **${message.member.displayName}** : \`${result}\``).catch(console.error);
    }
    catch (err) {
        message.channel.send(`${emoteSearch('red_cross_mark')} | **${message.member.displayName}** : \`${err.message}\``).catch(console.error);
    }

};
