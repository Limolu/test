const Discord = require('discord.js');
const { token } = require('./token.json');
const client = new Discord.Client();

// 連上線時的事件
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// 當 Bot 接收到訊息時的事件
client.on('message', msg => {
    if ((msg.channel.id != 843818646550609941) || msg.author.bot){
        return       
    }
    console.log('dog');
    if (msg.content === '我愛白白') {
        console.log('cat');
        // 則 Bot 回應 'Pong'
        msg.channel.send('白白也愛你');
    }else if(msg.content ==='我婆是誰'){
        msg.channel.send('白白')
    }else if(msg.content === '你好啊白' || msg.content ==='白白你好'){
       
        msg.channel.send('你好啊！' + msg.author.username + '！很高興見到你！')
    }else{
        if (msg.channel.id == 843818646550609941){
            msg.channel.send('阿喵喵喵喵')
                
        } 
    }
});

client.login(token);