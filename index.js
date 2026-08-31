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

client.once('clientReady', () => {
    console.log('EOS bot connected');
});

// =============================
// WELCOME
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

    // !post

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

    // !twitch

    if (command.startsWith('!twitch ')) {

        const args = message.content.trim().split(/\s+/);
        const url = args[1];

        if (!url) return;

        if (message.deletable) {
            await message.delete().catch(() => {});
        }

        await message.channel.send({
            content: '# EOS IS LIVE || @everyone ||\n\nJoin the stream:\n' + url + '\n\nSee you there!',
            allowedMentions: {
                parse: ['everyone']
            }
        });

        return;
    }

    // !mensaje

if (command === '!mensaje') {

    console.log('Comando !mensaje ejecutado');

    if (message.deletable) {
        await message.delete().catch(() => {});
    }

    const rebrandingMessage = [
        '@everyone',
        '',
        '╔══════════════════════════════════════╗',
        '          🤖 **EOS // SYSTEM UPDATE**',
        '╚══════════════════════════════════════╝',
        '',
        '> **INICIANDO PROTOCOLO DE REBRANDING...**',
        '> Analizando identidad de la organización...',
        '',
        '🔴 **IDENTIDAD ANTERIOR:**',
        '**ARGEA**',
        '',
        '⚠️ Estado: **DESACTIVADA**',
        '',
        '🟢 **NUEVA IDENTIDAD DETECTADA:**',
        '**EOS**',
        '',
        '⚡ Estado: **ACTIVADA**',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        '🤖 **PROTOCOLO DE REBRANDING COMPLETADO**',
        '',
        'Después de una etapa de evolución, nuestra organización adopta oficialmente una nueva identidad.',
        '',
        'A partir de este momento:',
        '',
        '**ARGEA → EOS**',
        '',
        '🌅 **BIENVENIDOS A UNA NUEVA ERA.**',
        '',
        'Un nuevo nombre.',
        'Una nueva imagen.',
        'Una nueva identidad.',
        '',
        'Pero nuestro objetivo sigue siendo el mismo:',
        '',
        '**COMPETIR. EVOLUCIONAR. SUPERAR LOS LÍMITES.**',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        '📡 **[ ACTUALIZACIÓN DEL SISTEMA ]**',
        '',
        '**IDENTIDAD:** EOS',
        '**ESTADO:** 🟢 ONLINE',
        '**PROTOCOLO:** 🟢 ACTIVADO',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        '🌅 **EOS // UNA NUEVA ERA COMIENZA.**',
        '',
        '╔══════════════════════════════════════╗',
        '             **EOS IS HERE.**',
        '╚══════════════════════════════════════╝'
    ].join('\n');

    try {

        await message.channel.send({
            content: rebrandingMessage,
            allowedMentions: {
                parse: ['everyone']
            }
        });

        console.log('Mensaje de rebranding enviado');

    } catch (error) {

        console.error('Error enviando mensaje de rebranding:', error);

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
