'use_strict';

const emoteSearch = require('../utils/emoteSearch');

/**
 * @param {Client} client
 * @param {Object} dataGuild
 * @param {Reaction} react
 * @param {Member} member
 */
exports.run = (client, dataGuild, react, member) => {

    // If reaction is not "✅"
    if (react.emoji.identifier !== "%E2%9C%85") return;

    if (!client.roleList.has('member')) return;
    const roleMember = client.roleList.get('member');

    // If user has role "member"
    if (member.roles.cache.has(roleMember.id)) return;

    member.roles.add(roleMember).then(m => {

        const channelId = dataGuild.channels.get('general').id;
        client.channels.fetch(channelId)
        .then(channel => {

            channel.send({"embed": {
                "description": `${emoteSearch('green_arrow')} ${member} vient de nous rejoindre.\`\`\`js\nguild.members.push('${member.displayName}#${member.user.discriminator}');\`\`\``,
                "color": 4437377
            }});

        });

    })
    .catch(console.error);

};

/**
 * @param {Client} client
 */
exports.refresh = (client) => {
    const channel = client.guildlist.get('zone_dev').channels.get('regles');
    client.channels.cache.get(channel.id).messages.fetch(channel.messageId).then(m => m.react("✅"));
}
