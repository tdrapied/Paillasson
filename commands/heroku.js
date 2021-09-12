'use_strict';

/**
 * @param {Client} client
 * @param {Message} message
 * @param {string[]} args
 */
exports.run = (client, message, args) => {

    if (args.length > 0) return;
    message.channel.send('https://topinambour.notion.site/Heroku-guide-5769c4a92405459ca09ffa3d983c1347');

};

exports.conf = {
    name: 'heroku',
    aliases: ['heroku-guide'],
    permLevel: 0
};
