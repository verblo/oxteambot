worker: node bot.js
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'; 
const bot = new Discord.Client({
    disableEveryone: true,
    disabledEvents: ['TYPING_START']
});
client.on("ready", () => {
  console.log(`Bot Wystartował, razem z ${client.users.size} Graczami, na ${client.channels.size} kanałach na ${client.guilds.size} serwerze.`); 
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
})





client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('Pong!');
  }
})

client.on('message', message => {

  if (message.author.bot) return undefined 

  let msg = message.content.toLowerCase()
  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(' ') 
  let command = args.shift().toLowerCase() 

  if (command === 'cytuj') {
    let say = args.join(' ') 
    message.delete() 
    const generalChannel = message.guild.channels.find(channel => channel.name === "pogaduchy")
    generalChannel.send(say)
  }
    if (command === 'zaplanujtrening') {
    let say = args.join(' ') 
    message.delete() 
    const generalChannel = message.guild.channels.find(channel => channel.name === "pogaduchy")
    generalChannel.send(say)
  }
})







client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }
    
    if (receivedMessage.content.includes(client.user.toString())) {
		if (Math.random() * 100 < 50) {
 receivedMessage.channel.send(receivedMessage.author.toString() + 
		", VeeQ to ogónie fajny gość jest.");
 }
		else if (Math.random() * 100 < 50) {
receivedMessage.channel.send("Co znowuuu " + receivedMessage.author.toString() + "?");
}
    }
})



client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("Hawajczyk Szuka Mozgu! UKRYTA KAMERA", {type: "WATCHING"})

    // PLAYING, STREAMING, LISTENING, WATCHING
    // Przykład:
    // client.user.setActivity("TV", {type: "WATCHING"})
})







client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { 
        return
    }
    
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ") 
    let primaryCommand = splitCommand[0] 
    let arguments = splitCommand.slice(1) 

    console.log("Komenda Otrzymana: " + primaryCommand)
    console.log("Argument: " + arguments) 

    if (primaryCommand == "pomoc") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "pomnoz") {
        multiplyCommand(arguments, receivedMessage)
    } else {
        receivedMessage.channel.send("Beep Boom nie rozumiem, Moze skorzystaj z `!pomoc`")
    }
}

function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send("Wygląda na to, że potrzebujesz pomocy " + arguments)
    } else {
        receivedMessage.channel.send("Lista komend została wysłana do ciebie w prywatnej wiadomości.")
		receivedMessage.author.send("***Oto co potrafie:***")
    }
}

function multiplyCommand(arguments, receivedMessage) {
    if (arguments.length < 2) {
        receivedMessage.channel.send("Not enough values to multiply. Try `!multiply 2 4 10` or `!multiply 5.2 7`")
        return
    }
    let product = 1 
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    receivedMessage.channel.send("The product of " + arguments + " multiplied together is: " + product.toString())
}





client.on('message', message => {

  if (!message.guild) return;

  if (message.content.startsWith('!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'Opcjonalny powód, który będzie wyświetlany w dziennikach kontroli',
        }).then(() => {
          message.reply(`Gracz został zbanowany ${user.tag}`);
        }).catch(err => {
          message.reply('Nie mogłem zbanować członka');
          console.error(err);
        });
      } else {d
        message.reply('Ten użytkownik nie należy do tej serwera!');
      }
    } else {
      message.reply('A kogo byś chciał zbanować?!');
    }
  }
});



client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Opcjonalny powód, który będzie wyświetlany w dziennikach kontroli').then(() => {
          message.reply(`Pomyślnie wyrzucono ${user.tag}`);
        }).catch(err => {
          message.reply('INie mogłem kopnąć członka');
          console.error(err);
        });
      } else {
        message.reply('Tego użytkownika nie ma na serwerze!');
      }
    } else {
      message.reply('A kogo byś chciał wyrzucic?!');
    }
  }
});




client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.get('518201017549193216');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Gracz: ', `${member}`)
        .addField(':microphone2: | Witamy!', `Chciałbyś dołączyć do OXTEAMU, ${member}? `)
        .addField(':id: | Uzytkownika :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Ktorym z kolei członkiem jesteś?', `${member.guild.memberCount}`)
        .addField("Nick", `<@` + `${member.id}` + `>`, true)
        .addField('Nazwa Serwera', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberAdd', member => {

    console.log(`${member}`, "dołączył" + `${member.guild.name}`)

});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.get('518201017549193216');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Nazwa:', `${member}`)
        .addField('Wyszedł z Serwera', 'Wszyscy Przezyjmy Żałobe')
        .addField('Pa Paaa :(', 'Bedziemy za tobą tęsknić!')
        .addField('Aktualnie na serwerze zostało', `${member.guild.memberCount}` + " Uzytkowników")
        .setFooter(`(╯°□°）${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

 client.on('guildMemberRemove', member => {
    console.log(`${member}` + "Wyszedł" + `${member.guild.name}` + "Wysylanie wiadomosci porzegnalnej....")
    console.log("Wiadomosc porzegnalna została wysłana.")
});











client.login('NTM1OTQyMDQwNjA1ODE4ODgx.DyPjbg.bT8ENwxRMSne8FLcgJESvplqtRE');
