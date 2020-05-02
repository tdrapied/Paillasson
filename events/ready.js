'use_strict';

const emoteSearch = require('../utils/emoteSearch');

/**
 * @param {Client} client
 */
module.exports = client => {

    console.log(`${client.user.tag} is online and ready to serve ${client.guilds.cache.size} servers.`);

    const log = `${emoteSearch('green_arrow')} bot gave reboot.`;
    client.sendLog('boot', log);

    client.setPresence = () => require('../utils/setPresence')(client);
    client.setPresence();
    setInterval(() => client.setPresence(), 300000); // 5min

    require('../roles/addRoleMember').refresh(client);
    // require('../roles/addRoleColor').refresh(client);

    require('../utils/roleLoader')(client);

};
