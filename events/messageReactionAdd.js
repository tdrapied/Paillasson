'use_strict';

const addRoleMember = require(`../roles/addRoleMember`);
// const addRoleColor = require(`../roles/addRoleColor`);

/**
 * @param {Client} client
 * @param {Reaction} react
 * @param {User} user
 */
module.exports = (client, react, user) => {

    if (user.bot) return;

    const dataGuild = client.guildlist.get('zone_dev');

    // Réaction au message dans "regles"
    if (react.message.id === dataGuild.channels.get('regles').messageId) {
        const member = getMember(client, user, dataGuild);
        addRoleMember.run(client, dataGuild, react, member);
    }

    // Réaction au message dans "choisis-ta-couleur"
    // else if (react.message.id === dataGuild.channels.get('choisis-ta-couleur').messageId) {
    //     const member = getMember(client, user, dataGuild);
    //     addRoleColor.run(client, dataGuild, react, member);
    // }

};

const getMember = (client, user, dataGuild) => {
    const guild = client.guilds.cache.get(dataGuild.id)
    return guild.members.cache.get(user.id);
};
