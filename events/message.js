'use_strict';

const settings = require('../settings.json');
const cmdPrompt = require('../utils/cmdPrompt');

/**
 * @param {Message} message
 */
module.exports = message => {

    if (!message.guild) return;
    if (message.author.bot || message.webhookID) return;

    const prefix = settings.prefix;

    if (message.content.startsWith(prefix.default)) {

        const client = message.client;
        const command = message.content.split(' ')[0].slice(prefix.default.length);

        let cmd;
        if (client.commands.has(command)) {
            cmd = client.commands.get(command);
        } else if (client.aliases.has(command)) {
            cmd = client.commands.get(client.aliases.get(command));
        }
        else return;

        const args = message.content.split(' ').slice(1);
        cmd.run(client, message, args);

    }

    /**
     * Dev commands
     */
    else if (message.content.startsWith(prefix.command)) {

        cmdPrompt(message);

    }

};
