'use_strict';

const settings = require('../settings.json');
const emoteSearch = require('../utils/emoteSearch');

/**
 * @param {Client} client
 */
module.exports = client => {

    console.log(`${client.user.tag} is online and ready to serve ${client.guilds.cache.size} servers.`);

    const log = `${emoteSearch('green_arrow')} bot gave reboot.`;
    client.sendLog('boot', log);

    // Set interval to refresh bot presence
    client.setPresence = () => require('../utils/setPresence')(client);
    client.setPresence();
    setInterval(() => client.setPresence(), 300000); // 5min

    const guild = client.guildlist.get('zone_dev');

    // Refresh message to channel 'regles'
    const channel = guild.channels.get('regles');
    client.channels.cache.get(channel.id).messages.fetch(channel.messageId).then(m => m.react('✅'));

    // And channel 'choisis-ta-couleur'
    const channel2 = guild.channels.get('choisis-ta-couleur');
    client.channels.cache.get(channel2.id).messages.fetch(channel2.messageId).then(m => m.react('595226083800907786')); // id emote : ":0000ff:"

    // Get role Member
    client.roleMember = client.guilds.cache.get(guild.id).roles.cache.find(role => role.name === settings.role.member);

};
