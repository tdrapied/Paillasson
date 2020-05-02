'use_strict';

const settings = require('../settings.json');

/**
 * @param {Client} client
 * @param {Member} member
 */
module.exports = (client, member) => {

    if (!client.roleList.has('member')) return;
    if (!member.roles.cache.has(client.roleList.get('member').id)) return;

    const channelId = client.guildlist.get('zone_dev').channels.get('general').id;
    client.channels.fetch(channelId)
    .then(channel => {

        channel.send({"embed": {
            "description": `**${member.displayName}#${member.user.discriminator}** is down, now.`,
            "color": 1078186,
            "image": {
                "url": "https://cdn.discordapp.com/attachments/594918078068949022/594918171903918081/blue_screen.png"
            }
        }});

    });

};
