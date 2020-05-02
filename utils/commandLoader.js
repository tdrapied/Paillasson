'use_strict';

const fs = require('fs');

const reqCommand = (cmd) => require(`../commands/${cmd}`);

/**
 * @param {Client} client
 */
module.exports = client => {

    fs.readdir('./commands/', (err, files) => {
        if (err) {
            console.error(err.message);
            return;
        }

        console.log(`Loading a total of ${files.length} commands.`);

        files.forEach(file => {

            const props = reqCommand(file);

            client.commands.set(props.conf.name, props);

            props.conf.aliases.forEach(alias => {
                client.aliases.set(alias, props.conf.name);
            });

        });

    });

};
