// Requires and Variables
var Discord = require('discord.js');
var {prefix, token} = require('./config.json');
var client = new Discord.Client();


//Client

client.once('ready', () => {
     console.log(`The Bot Is Online.`);
    client.user.setActivity ('Type /help to see the commands.');
});

//Permissions



//Simple Messages, Commands.

client.on('message', message => {
    if(message.content ==="/help") {
        message.channel.send('Current commands available: !server, /projects, /tdh, /bread, /engines, /socials, /support, /bot, /contact.  ')
    }
});

client.on('message', message => {
    if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
});

client.on('message', message => {
    if(message.content === "/projects") {
        message.channel.send('The Current Projects Peroxin is working on is **The Dungeon Hunters** and helping to make **Bread World**')
    }
});

client.on('message', message => {
    if(message.content ==="/bread") {
        message.channel.send('Join the official Bread World server using this link: https://discord.gg/SX4WD3d')
    }
});

client.on('message', message => {
    if(message.content ==="/tdh") {
        message.channel.send('**The Dungeon Hunters** is currently in development read about the story here: https://1drv.ms/w/s!ApZHbrj-uYFjbdbsNVcA3f8sPUY?e=1v3ThT')
    }
});

client.on('message', message => {
    if(message.content ==="/engines"){
        message.channel.send('Peroxin uses Godot, Unity 2d and Game Maker to make his games.')
    }
});
client.on('message', message => {
    if(message.content =='/socials') {
        message.channel.send('Twitter.com/peroxingames dev.to/peroxin PeroxinGames on YouTube.')
    }
});
client.on('message', message =>{
    if(message.content =='/support') {
    message.channel.send('Donations arent required, but if you want I cant argue with you. paypal.me/peroxingames')
    }
});

client.on('message', message => {
    if(message.content == '/games'){
        message.channel.send('At the time Peroxin didint released any games.')
    }
});
client.on('message', message => {
    if(message.content == '/bot'){
        message.channel.send('This Bot is programmed and Created by @Peroxin, hosted on heroku.com')
    }
});

client.on('message', message => {
    if(message.content == '/contact'){ 
        message.channel.send('You can contact me on twitter **@PeroxinGames** or you can email me at **peroxingames@yahoo.com')
    }
});




//Token

client.login(token);