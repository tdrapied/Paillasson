'use_strict';

const reqEvent = (event) => require(`../events/${event}`);

/**
 * @param {Client} client
 */
module.exports = client => {

    client.on('ready', () => reqEvent('ready')(client));

    client.on('guildMemberRemove', member => reqEvent('guildMemberRemove')(client, member));

    client.on('message', reqEvent('message'));
    client.on('messageUpdate', reqEvent('messageUpdate'));
    client.on('messageReactionAdd', (react, user) => reqEvent('messageReactionAdd')(client, react, user));

    client.on('error', err => reqEvent('error')(client, err));

};
