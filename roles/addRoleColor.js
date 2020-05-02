'use_strict';

const emoteSearch = require('../utils/emoteSearch');

/**
 * @param {Client} client
 * @param {Object} dataGuild
 * @param {Reaction} react
 * @param {Member} member
 */
exports.run = (client, dataGuild, react, member) => {

    react.users.remove(member);

};

/**
 * @param {Client} client
 */
exports.refresh = (client) => {
    const channel = client.guildlist.get('zone_dev').channels.get('choisis-ta-couleur');
    client.channels.cache.get(channel.id).messages.fetch(channel.messageId).then(m => m.react('595226394091585547')); // id emote : ":0000ff:"
}
