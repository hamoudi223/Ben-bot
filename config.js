require("dotenv").config();
const fs = require("fs");
const path = require("path");

//ALL GLOBAL
global.sessionid = process.env.SESSION_ID || "";
global.ownername = process.env.OWNER_NAME || "NOTHING";
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.split(",") : [] || "93744215959";
global.packname = process.env.BOT_NAME || "BEN-BOT-V1";
global.author = process.env.OWNER_NAME || "NOTHING";
global.channelChatId = process.env.CHANNEL_JID || "120363333589976873@newsletter";
global.logo = process.env.LOGO_URL || "https://files.catbox.moe/vahb53.jpg";
global.bench = process.env.BEN_CHANNEL || "https://whatsapp.com/channel/0029Vasu3qP9RZAUkVkvSv32";
global.benrepo = process.env.BEN_REPO || "https://github.com/mayelmayel11/Ben-bot";
global.benrepodl = process.env.BEN_REPODL || "https://github.com/mayelmayel11/Ben-bot/archive/refs/heads/main.zip";

//AUTO FUNCTIONER DONT CHANGE IT
global.antidelete = process.env.ANTIDELETE || false;
global.ANTICALL = process.env.ANTICALL || false;
global.ANTIVIEWONCE = process.env.ANTIVIEWONCE || false;
global.antilink = process.env.ANTILINK || false;
global.antilinkremove = process.env.ANTILINK_REMOVE || false;
global.antilinkwarn = process.env.ANTILINK_WARN || false;
global.antibad = process.env.ANTIBAD || false;
global.antibadwarn = process.env.ANTIBAD_WARN || false;
global.antibadremove = process.env.ANTIBAD_REMOVE || false;
global.autodl = process.env.AUTO_DL || false;
global.antibot = process.env.ANTIBOT || false;
global.antibotwarn = process.env.ANTIBOT_WARN || false;
global.antibotremove = process.env.ANTIBOT_REMOVE || false;
global.autoTyping = false;
global.autoRecord = false; 
global.autoViewStatus = false;
global.autoStatusDownload = false;
global.AUTOSTATUS_REACT = false;
global.autoLikeEmoji = "💚";
global.autobio = false;
global.welcome = false;
global.unavailable = false;
global.available = false;
global.autoreadmessages = false;
global.chatbot = false; 
global.autoreact = false;
global.prefix = '.';
global.sudo_user = "+93744215959";
global.LEVELUP = false;
global.commands = "1000+";
global.version = "V1";


//AUTO MESSAGE RESPONSE
global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    wait: process.env.MESSAGE_WAIT || '*`⏰ 𝙷𝚘𝚕𝚍 𝙾𝚗 𝙿𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐...`*',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
    capvid: process.env.CAPTION_VIDEO || '> © 𝑷𝑶𝑾𝑬𝑹𝑬𝑫 𝑩𝒀 𝑵𝑶𝑻𝑯𝑰𝑵𝑮',
};
    
//DONT CHANGE IT API KEY
global.api = {
    screenshotapi: 'd539a7b1cd55ebccba702c2a0f96eff9',
    fgmods: 'm2XBbNvz',
    screenshotapiv2: '054b4800d6664f8fb79e63e419b3c834',
    removebg: '829301093',
};


//DON'T DELETE IT
global.apilinode = '' // apikey vps account linode
global.apitokendo = '' 
global.urldb = '';
global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}
//RPG LIMIT
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

//—————「 RUNNING 」—————//
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});