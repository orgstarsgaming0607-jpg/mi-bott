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

    // !Normativa
if (message.content.toLowerCase() === '!normativa') {
    return message.channel.send(
`# 📜 NORMATIVA DEL TORNEO

🤖 **Hola, soy LUX, el bot oficial de EOS.**

Antes de participar en el torneo, es **obligatorio leer y conocer la normativa**.

📖 **Consulta la normativa completa aquí:**
👉 [https://docs.google.com/document/d/1KC8kQPGwtOhT-A3qClu1qLW_ENs_O_7_BDVybgmj4Mc/edit?usp=sharing]

⚠️ **IMPORTANTE**

El incumplimiento de la normativa, así como realizar acciones que perjudiquen el correcto funcionamiento del torneo, puede conllevar diferentes sanciones.

Las sanciones pueden ir desde:
🟡 **Avisos**
🟠 **Sanciones**
🔴 **Expulsión del torneo**

La organización se reserva el derecho de aplicar la sanción correspondiente dependiendo de la gravedad de cada situación.

🤖 **Si participas en el torneo, aceptas y te comprometes a cumplir la normativa.**`
    );
}


// !preins
if (message.content.toLowerCase() === '!preins') {
    return message.channel.send(
`# 📝 PRE-INSCRIPCIÓN AL TORNEO

🤖 **Hola, soy LUX, el bot oficial de EOS.**

Para realizar la **pre-inscripción** al torneo es necesario completar correctamente el formulario.

📋 **FORMULARIO DE PRE-INSCRIPCIÓN**
👉 [https://forms.gle/tFNgvfan63tDdmzu5]

⚠️ **IMPORTANTE**

La persona que realice la pre-inscripción y sea el **contacto del equipo debe estar dentro del servidor de Discord de EOS**.

Si la persona de contacto no se encuentra dentro del servidor, la pre-inscripción podrá no ser válida.

✅ Una vez rellenado el formulario, esperad las indicaciones de la organización.

🤖 **Gracias por confiar en EOS. ¡Nos vemos en el torneo!**`
    );
}


// !pedirol
if (message.content.toLowerCase() === '!pedirol') {
    return message.channel.send(
`# 🚨 SOLICITUD DE ROLES 🚨

🤖 **Hola, soy LUX, el bot oficial de EOS.**

## ⚠️ MUY IMPORTANTE ⚠️

**SI NO SOLICITAS TU ROL EN ESTE CANAL, NO PODRÁS PARTICIPAR EN EL TORNEO UNA VEZ ESTE HAYA COMENZADO.**

📌 Para solicitar los roles de vuestro equipo, escribid vuestro nombre y el rol correspondiente siguiendo este formato:

**Nombre equipo:**
**Rol:**

### 📋 EJEMPLO

**Nombre equipo:** EOS Academy
**Rol:** Duelista

⚠️ **Cada jugador debe solicitar su rol antes de que comience el torneo.**

Una vez iniciado el torneo, **no se aceptarán solicitudes de roles para poder participar**, salvo que la organización indique lo contrario.

🤖 **Revisad bien los datos antes de enviarlos.**

¡Gracias y mucha suerte en el torneo! 🎮🔥`
    );
}
    
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
