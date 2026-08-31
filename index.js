```js
require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

console.log('Starting EOS bot...');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],

    allowedMentions: {
        parse: ['everyone']
    }
});

// =============================
// BOT READY
// =============================

client.once('clientReady', () => {
    console.log('EOS bot connected');
});

// =============================
// WELCOME MESSAGE
// =============================

client.on('guildMemberAdd', member => {

    const canal = member.guild.channels.cache.get('1467611664148074498');

    if (!canal) {
        console.log('Welcome channel not found');
        return;
    }

    const embed = {
        color: 0x2ecc71,
        title: 'New member',
        description: 'Welcome to the EOS server <@' + member.user.id + '>',
        image: {
            url: 'https://cdn.discordapp.com/attachments/1465118735999434886/1544108968647860335/content.png?ex=6a974f0a&is=6a95fd8a&hm=41b53236347e11f4e3fc2804dcb9b3b700d1ce49a2f923fdcd4316d612ed5b18'
        }
    };

    canal.send({
        embeds: [embed]
    }).catch(console.error);
});

// =============================
// COMMANDS
// =============================

client.on('messageCreate', async message => {

    if (message.author.bot) return;

    const command = message.content.trim().toLowerCase();

    // =============================
    // !post
    // =============================

    if (command.startsWith('!post ')) {

        const args = message.content.trim().split(/\s+/);
        const url = args[1];

        if (!url) return;

        if (message.deletable) {
            await message.delete().catch(() => {});
        }

        await message.channel.send({
            content: '# NEW POST || @everyone ||\n\n' + url,

            allowedMentions: {
                parse: ['everyone']
            }
        });

        return;
    }

    // =============================
    // !twitch
    // =============================

    if (command.startsWith('!twitch ')) {

        const args = message.content.trim().split(/\s+/);
        const url = args[1];

        if (!url) return;

        if (message.deletable) {
            await message.delete().catch(() => {});
        }

        await message.channel.send({
            content:
                '# EOS IS LIVE || @everyone ||\n\n' +
                'Join the stream:\n' +
                url +
                '\n\nSee you there!',

            allowedMentions: {
                parse: ['everyone']
            }
        });

        return;
    }

    // =============================
    // !mensaje
    // =============================

    if (command === '!mensaje') {

        console.log('Rebranding command received');

        if (message.deletable) {
            await message.delete().catch(() => {});
        }

        try {

            await message.channel.send({

                content: `@everyone

[ EOS SYSTEM // REBRANDING PROTOCOL ]

INITIALIZING...

Scanning organizational identity...

Previous identity: ARGEA
Status: DECOMMISSIONED

New identity detected: EOS
Status: ACTIVATED

REBRANDING PROTOCOL COMPLETE.

A new era has begun.

From this moment forward, our organization will operate under a new identity:

EOS

A new name.
A new image.
A new chapter.

Our objective remains unchanged:

COMPETE. EVOLVE. TRANSCEND.

[ IDENTITY UPDATE ]

ARGEA -> EOS

[ SYSTEM STATUS ]

ONLINE

[ EOS PROTOCOL ]

ACTIVATED

EOS // A NEW ERA BEGINS.`,

                allowedMentions: {
                    parse: ['everyone']
                }

            });

            console.log('Rebranding message sent');

        } catch (error) {

            console.error('Error sending rebranding message:', error);

        }

        return;
    }

});

// =============================
// LOGIN
// =============================

client.login(process.env.TOKEN)
    .then(() => {
        console.log('Login successful');
    })
    .catch(error => {
        console.error('Login error:', error);
    });
```
