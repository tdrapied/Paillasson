'use_strict';

/**
 * @param {Client} client
 * @param {Message} message
 * @param {string[]} args
 */
exports.run = (client, message, args) => {

    if (args.length > 0) return;
    message.channel.send('pong 🏓');

};

exports.conf = {
    name: 'ping',
    aliases: [],
    permLevel: 0
};
