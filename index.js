```js
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

console.log("Arrancando bot...");
console.log("🔥 ESTE ES EL ARCHIVO CORRECTO");

// =====================
// CLIENTE DISCORD
// =====================
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

// =====================
// READY
// =====================
client.once('clientReady', async () => {
    console.log("🤖 Bot conectado");
    console.log("Bot listo");
});

// =====================
// BIENVENIDA
// =====================
client.on('guildMemberAdd', member => {
    const canal = member.guild.channels.cache.get("1467611664148074498");
    if (!canal) return;

    const embed = {
        color: 0x2ecc71,
        title: "🎉 New member",
        description: `👋 Bienvenido al servidor de EOS <@${member.user.id}> `,
        image: {
            url: "https://cdn.discordapp.com/attachments/1465118735999434886/1544108968647860335/content.png?ex=6a974f0a&is=6a95fd8a&hm=41b53236347e11f4e3fc2804dcb9b3b700d1ce49a2f923fdcd4316d612ed5b18"
        }
    };

    canal.send({ embeds: [embed] });
});

// =====================
// COMANDOS
// =====================
client.on('messageCreate', async message => {
    if (message.author.bot) return;

    // =====================
    // !post
    // =====================
    if (message.content.startsWith('!post')) {
        const args = message.content.split(' ');
        const url = args[1];

        if (!url) return;

        if (message.deletable) {
            await message.delete().catch(() => {});
        }

        return message.channel.send({
            content: `# 🚨 NUEVO POST || @everyone ||\n\n🔥 ${url}`,
            allowedMentions: {
                parse: ['everyone']
            }
        });
    }

    // =====================
    // !twitch
    // =====================
    if (message.content.startsWith('!twitch ')) {
        const args = message.content.split(' ');
        const url = args[1];

        if (!url) return;

        if (message.deletable) {
            await message.delete().catch(() => {});
        }

        return message.channel.send({
            content: `# 🔴 ¡EOS está en directo! || @everyone ||\n\n🎮 Pásate por el stream:\n👉 ${url}\n\n💜 ¡No te lo pierdas!`,
            allowedMentions: {
                parse: ['everyone']
            }
        });
    }

    // =====================
// !mensaje
// =====================
if (message.content.trim().toLowerCase() === '!mensaje') {

    console.log('📢 Comando !mensaje ejecutado');

    if (message.deletable) {
        await message.delete().catch(() => {});
    }

    try {
        await message.channel.send({
            content: `@everyone

🤖 **[ EOS SYSTEM // REBRANDING PROTOCOL ]**

> **INITIALIZING...**
>
> Scanning organizational identity...
>
> Previous identity: **ARGEA**
> Status: **DECOMMISSIONED**
>
> New identity detected: **EOS**
> Status: **ACTIVATED**
>
> ⚡ **REBRANDING PROTOCOL COMPLETE**
>
> A new era has begun.
>
> From this moment forward, our organization will operate under a new identity:
>
> 🌅 **EOS**
>
> A new name.
> A new image.
> A new chapter.
>
> But our objective remains unchanged:
>
> **COMPETE. EVOLVE. TRANSCEND.**
>
> **[ IDENTITY UPDATE ]**
> ARGEA → EOS
>
> **[ SYSTEM STATUS ]**
> 🟢 ONLINE
>
> **[ EOS PROTOCOL ]**
> 🟢 ACTIVATED
>
> 🌅 **EOS // A NEW ERA BEGINS.**`,
            allowedMentions: {
                parse: ['everyone']
            }
        });

        console.log('✅ Mensaje de rebranding enviado');

    } catch (error) {
        console.error('❌ Error enviando !mensaje:', error);
    }

    return;
}
            }
        });
    }
});

// =====================
// LOGIN
// =====================
client.login(process.env.TOKEN);
```

