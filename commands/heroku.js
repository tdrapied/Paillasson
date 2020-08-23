'use_strict';

/**
 * @param {Client} client
 * @param {Message} message
 * @param {string[]} args
 */
exports.run = (client, message, args) => {

    if (args.length > 0) return;
    message.channel.send('https://ah-rem.github.io/heroku-guide/');

};

exports.conf = {
    name: 'code',
    aliases: ['heroku-guide'],
    permLevel: 0
};
