const settings = require('../settings.json');

module.exports = client => {

    const guildId = client.guildlist.get('zone_dev').id;
    const guild = client.guilds.cache.get(guildId);

    for (const name in settings.role) {

        guild.roles.fetch()
        .then(roles => {
            let role = roles.cache.find(e => e.name == settings.role[name]);
            if (role) client.roleList.set(name, role);
        });

    }

};
