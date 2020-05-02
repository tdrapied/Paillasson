'use_strict';

/**
 * @param {Client} client
 * @param {Message} message
 * @param {string[]} args
 */
exports.run = (client, message, args) => {

    if (args.length > 0) return;
    message.channel.send('https://github.com/AH-REM/Paillasson');

};

exports.conf = {
    name: 'code',
    aliases: ['github', 'git'],
    permLevel: 0
};
