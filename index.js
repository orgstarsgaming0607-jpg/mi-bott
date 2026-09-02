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

    // !normasserver
if (command === '!normasserver') {
    return message.channel.send(
`# 📜 Normas del Servidor de EOS

***💎 Bienvenid@ a EOS 💎***
> Antes de participar en el servidor, lee atentamente las siguientes normas:

**✅ Normas Generales**

> **🤝 Respeto ante todo**
> No se permiten insultos, faltas de respeto, acoso ni discriminación de ningún tipo.
>
> **💬 Lenguaje adecuado**
> Queda prohibido el spam, contenido NSFW, político o religioso.
>
> **🖼️ Nicks y fotos de perfil**
> Usa nombres e imágenes apropiadas. No se acepta contenido ofensivo o explícito.
>
> **🛡️ Respeto al staff**
> Las decisiones del equipo de moderación y administración son finales.

**🔊 Normas de Chats y Canales de Voz**

> **🎧 No interrumpir**
> Respeta los turnos de palabra en charlas de equipo, entrenamientos y torneos.
>
> **🔇 Evita gritar o spamear**
> Mantén un tono adecuado en los canales de voz.
>
> **📺 Streaming**
> Si vas a transmitir partidas o entrenamientos, avisa previamente para evitar interferencias.

***⚠️ Sanciones***

El incumplimiento de estas normas puede conllevar:

> ⚠️ Advertencia
> 🔇 Mute temporal
> 🚫 Expulsión
> ⛔ Ban permanente

> 📢 Al permanecer en este servidor, aceptas todas estas normas.

# ***🌙 Disfruta, compite y crece con respeto en EOS ☀️***

||@everyone||`
    );
}

    // !NormasING
if (command === '!serverrules') {
    return message.channel.send(
`# 📜 EOS Server Rules

***💎 Welcome to EOS 💎***
> Before participating in the server, please read the following rules carefully:

**✅ General Rules**

> **🤝 Respect above all**
> Insults, disrespect, harassment, or discrimination of any kind are not allowed.
>
> **💬 Appropriate language**
> Spam, NSFW, political, or religious content is prohibited.
>
> **🖼️ Nicknames and profile pictures**
> Use appropriate names and profile pictures. Offensive or explicit content is not allowed.
>
> **🛡️ Respect the staff**
> Decisions made by the moderation and administration team are final.

**🔊 Chat and Voice Channel Rules**

> **🎧 Do not interrupt**
> Respect speaking turns during team discussions, training sessions, and tournaments.
>
> **🔇 Avoid shouting or spamming**
> Keep an appropriate tone in voice channels.
>
> **📺 Streaming**
> If you are going to stream matches or training sessions, please inform the staff beforehand to avoid interference.

***⚠️ Sanctions***

Failure to comply with these rules may result in:

> ⚠️ Warning
> 🔇 Temporary mute
> 🚫 Expulsion
> ⛔ Permanent ban

> 📢 By remaining in this server, you accept all of these rules.

# ***🌙 Enjoy, compete, and grow with respect at EOS ☀️***

||@everyone||`
    );
}

    // !Normativa
if (message.content.toLowerCase() === '!normativa') {
    return message.channel.send(
`# 📜 NORMATIVA DEL TORNEO

🤖 **Hola, soy LUX, el bot oficial de EOS.**

🇪🇸 **ESPAÑOL**
Lee la normativa completa antes de participar:
👉 https://docs.google.com/document/d/1KC8kQPGwtOhT-A3qClu1qLW_ENs_O_7_BDVybgmj4Mc/edit?usp=sharing

⚠️ No cumplir la normativa o perjudicar el desarrollo del torneo puede resultar en **avisos, sanciones o expulsión del torneo**.

🇬🇧 **ENGLISH**
Please read the full tournament rules before participating:
👉 https://docs.google.com/document/d/1KC8kQPGwtOhT-A3qClu1qLW_ENs_O_7_BDVybgmj4Mc/edit?usp=sharing

⚠️ Failure to follow the rules or disrupting the tournament may result in **warnings, sanctions, or tournament removal**.

🤖 **Al participar en el torneo, aceptas la normativa.**
🤖 **By participating in the tournament, you agree to the rules.**`
    );
}


// !preins
if (message.content.toLowerCase() === '!preins') {
    return message.channel.send(
`# 📝 PRE-INSCRIPCIÓN / PRE-REGISTRATION

🤖 **LUX — Bot oficial de EOS**

🇪🇸 **ESPAÑOL**
Para realizar la pre-inscripción, rellena el formulario:
👉 https://forms.gle/tFNgvfan63tDdmzu5

⚠️ La **persona de contacto del equipo debe estar dentro del servidor de Discord de EOS**.

🇬🇧 **ENGLISH**
To pre-register, complete the following form:
👉 https://forms.gle/tFNgvfan63tDdmzu5

⚠️ The team's **contact person must be a member of the EOS Discord server**.

🤖 **¡Gracias por confiar en EOS! / Thank you for choosing EOS!**`
    );
}


// !pedirol
if (message.content.toLowerCase() === '!pedirol') {
    return message.channel.send(
`# 🚨 SOLICITUD DE ROLES / ROLE REQUEST

🤖 **LUX — Bot oficial de EOS / Official EOS Bot**

🇪🇸 **ESPAÑOL**
⚠️ Debes solicitar tu rol **antes de que comience el torneo**. Una vez iniciado, no se aceptarán solicitudes.

📋 **Formato:**
**Nombre equipo:**
**Rol:**

🇬🇧 **ENGLISH**
⚠️ You must request your role **before the tournament starts**. Once it has started, requests will not be accepted.

📋 **Format:**
**Team Name:**
**Role:**

🎮 **Revisa bien los datos antes de enviarlos / Check your information before sending.**`
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
