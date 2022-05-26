'use_strict';

const settings = require('../settings.json');

/**
 * @param {Client} client
 */
module.exports = client => {

    console.log(`${client.user.tag} is online and ready to serve ${client.guilds.cache.size} servers.`);

    // Set interval to refresh bot presence
    client.setPresence = () => require('../utils/setPresence')(client);
    client.setPresence();
    setInterval(() => client.setPresence(), 300000); // 5min

    const guild = client.guildlist.get('zone_dev');

    // Refresh all messages on json
    guild.channels.forEach(channel => {
        if (!channel.messages) return;
        channel.messages.forEach(messageId => {
            client.channels.cache.get(channel.id).messages.fetch(messageId).catch(console.error);
        });
    });

    // Get role Member
    client.roleMember = client.guilds.cache.get(guild.id).roles.cache.find(role => role.name === settings.role.member);

};
