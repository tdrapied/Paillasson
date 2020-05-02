'use_strict';

const settings = require('../settings.json');
const emoteSearch = require('../utils/emoteSearch');

/**
 * @param {Message} message
 */
module.exports = message => {

    // If user has not role "verified"
    const roleVerified = message.guild.roles.cache.find(role => role.name === settings.role.verified);
    if (!roleVerified || !message.member.roles.cache.has(roleVerified.id)) return;

    const client = message.client;

    try {
        // Execute code
        const result = eval(message.content.substring(settings.prefix.command.length));
        message.channel.send(`:white_check_mark: | **${message.member.displayName}** : \`${result}\``).catch(console.error);
    }
    catch (err) {
        message.channel.send(`${emoteSearch('red_cross_mark')} | **${message.member.displayName}** : \`${err.message}\``).catch(console.error);
    }

};
