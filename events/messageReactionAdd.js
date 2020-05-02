'use_strict';

const emoteSearch = require('../utils/emoteSearch');
const colorList = require('../data/colors.json');
const setAddRole = new Set();

const getMember = (client, guild, user) => {
    return client.guilds.cache.get(guild.id).members.cache.get(user.id);
}

/**
 * @param {Client} client
 * @param {Reaction} react
 * @param {User} user
 */
module.exports = (client, react, user) => {

    if (user.bot) return;

    const guild = client.guildlist.get('zone_dev');

    if (react.message.id === guild.channels.get('regles').messages[1]) {

        if (!client.roleMember) return;

        const member = getMember(client, guild, user);

        // If member has role member
        if (member.roles.cache.has(client.roleMember.id)) return;

        member.roles.add(client.roleMember).then(m => {

            const channelId = guild.channels.get('general').id;
            client.channels.fetch(channelId)
            .then(channel => {

                channel.send({"embed": {
                    "description": `${emoteSearch('green_arrow')} ${member} vient de nous rejoindre.\`\`\`js\nguild.members.push('${member.displayName}#${member.user.discriminator}');\`\`\``,
               		"color": 4437377
              	}});

            });

        });

    }

    else if (react.message.id === guild.channels.get('choisis-ta-couleur').messages[0]) {

        react.users.remove(user);

        // If user spam react
        if (setAddRole.has(user.id)) return;

        const idRole = colorList[react.emoji.name];
        if (!idRole) return;

        const member = getMember(client, guild, user);

        if (member.roles.cache.has(idRole)) return;

        setAddRole.add(user.id);

        // Remove old role color
        const oldRole = member.roles.cache.find(r => r.name === "color");
        if (oldRole) member.roles.remove(oldRole);

        member.roles.add(idRole);

        // Remove user id on Set
        setTimeout(() => setAddRole.delete(user.id), 900000); // 15 min

    }

};
