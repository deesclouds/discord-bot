const Discord = require('discord.js');

const client = new Discord.Client({ intents: 32767 });

require('dotenv').config()

// this is our event
client.on('ready', () => {
	console.log('Bot is online!');
    client.guilds.cache.get('968649174759399484').commands.create({
        name: 'ping',
        description: 'pinging',
        options: [{
            name: 'Dashy',
            description: "Put dashy here",
            required: true,
            type: Discord.Constants.ApplicationCommandOptionTypes.STRING
        }, 
        {
            name: 'Washy',
            description: 'Put a washy here',
            required: true,
            type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER
        },
    
    
    ]
    })

});

client.on('interactionCreate', async interaction => {
    if (interaction.commandName === 'ping') {
        const dashy = interaction.options.getString('dashy');
        const washy = interaction.options.getNumber('washy');

        interaction.reply({
            content: `Ok you said ${dashy} and ${washy}`,
            ephemeral: true
        })
    }
})

client.on('messageCreate', (message) => {
	// this is our command
    const prefix = '-';
    // if the message content doesn't start with our prefix it returns  
	if (!message.content.startsWith(prefix)) return;

	const messageArray = message.content.split('');
	const cmd = messageArray[0];
	const args = message.Array.slice(1);

	if (message.content === `${prefix}test`) {
		message.channel.send('Test works!');
	}

// Moderation Commands

	if (cmd === `${prefix}kick`) {
		if (!args[0]) return message.reply('Specify the member you want to kick!');
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.username.toLowerCase() === args.slice(0).join('') || x.user.username === args[0]);
		if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('Where are your permissions?');
		if (!message.guild.me.permissions.has('KICK_MEMBERS')) return message.reply('You do no have permission to kick members from this server!');
		if (message.member.id === member.id) return message.reply('You cannot kick yourself are you stupid?');

		member.kick();
		message.channel.send(`${member} was just kicked from the server.`);
	}

    if (cmd === `${prefix}ban`) {
		if (!args[0]) return message.reply('Specify the member you want to kick!');
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.username.toLowerCase() === args.slice(0).join('') || x.user.username === args[0]);
		if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('Where are your permissions?');
		if (!message.guild.me.permissions.has('BAN_MEMBERS')) return message.reply('You do not have permission to ban members from this server!');
		if (message.member.id === member.id) return message.reply('You cannot ban yourself are you stupid?');

        let reason = arg.slice(1).join('') || 'No Reason'

		member.ban({reason: reason});
		message.channel.send(`${member} was just banned from the server. \nReason: ${reason}`);
    

};

client.login('token');