/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { color, bgcolor } = require('./lib/color')
const { TiktokDownloader } = require('./lib/tiktokdl') 
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss DD/MM')
// read database
let vote = db.data.others.vote = []
let prefix = global.prefix

const sai = "Rikka-MD"
module.exports = rikka = async (rikka, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
global.prefix
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
//const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "Sem nome"
const botNumber = await rikka.decodeJid(rikka.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid

// Group
const groupMetadata = m.isGroup ? await rikka.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false


try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
limit: limitUser,
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
if (!('antionce' in chats)) chats.antionce = true
if (!('antispam' in chats)) chats.antispam = true
if (!('norespond' in chats)) chats.norespond = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
antionce: true,
antispam: true,
norespond: false,
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = true
if (!('templateVideo' in setting)) setting.templateVideo = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateMsg' in setting)) setting.templateMsg = false
if (!('templateLocation' in setting)) setting.templateLocation = false
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
templateImage: true,
templateVideo: false,
templateGif: false,
templateMsg: false,
templateLocation: false,
}

} catch (err) {
console.error(err)
}
// Public & Self
if (!rikka.public) {
if (!m.key.fromMe && !isCreator) return
}
// ❱❱ COMANDO NO PV ❰❰  
if (!m.isGroup && isCmd) {
rikka.readMessages([m.key])
console.log( ' ╭▻ ❱❱ ', color('❗COMANDO NO PV❗','white'),'❰❰', '◅⏤⏤','\n','⏐▻',color('NICK :','purple'),color(pushname,'green'),'\n','⏐▻',color('COMANDO :','purple'),color(command,'green'),'\n','⏐▻',color('HORARIO :','purple'), color(time,'green'),'\n',`╰⏤⏤▻ ❱❱ ${sai} ❰❰◅⏤⏤\n`)
}
// ❱❱ MENSAGEM NO  PV ❰❰  
if (!m.isGroup && !isCmd) {
rikka.readMessages([m.key])
 console.log( ' ╭▻ ❱❱ ', color('❗MENSAGEM NO PV❗','white'),'❰❰', '◅⏤⏤','\n','⏐▻',color('NICK :','purple'),color(pushname,'green'),'\n','⏐▻',color('TIPO :','purple'),color('Mensagem','green'),'\n','⏐▻',color('HORARIO :','purple'), color(time,'green'),'\n',`╰⏤⏤▻ ❱❱ ${sai} ❰❰◅⏤⏤\n`)
}
//  ❱❱ COMANDO EM GRUPO ❰❰  
if (isCmd && m.isGroup) {
rikka.readMessages([m.key])
console.log( ' ╭▻ ❱❱ ', color('❗COMANDO EM GRUPO❗','white'),'❰❰', '◅⏤⏤','\n','⏐▻',color('❱ GRUPO :','purple'), color(groupName,'green'),'\n','⏐▻',color('❱ NICK :','purple'),color(pushname,'green'),'\n','⏐▻',color('❱ COMANDO :','purple'),color(command,'green'),'\n','⏐▻',color('❱ HORARIO :','purple'),color(time,'green'),'\n',`╰⏤⏤▻ ❱❱ ${sai} ❰❰◅⏤⏤\n`)
}
//  ❱❱ MENSAGEN EM GRUPO ❰❰  
if (!isCmd && m.isGroup) {
rikka.readMessages([m.key])
console.log( ' ╭▻ ❱❱ ', color('❗MENSAGEM EM GRUPO❗','white'),'❰❰', '◅⏤⏤','\n','⏐▻',color('❱ GRUPO :','purple'), color(groupName,'green'),'\n','⏐▻',color('❱ NICK :','purple'),color(pushname,'green'),'\n','⏐▻',color('❱ TIPO :','purple'),color('Mensagem ','green'),'\n','⏐▻',color('❱ HORARIO :','purple'),color(time,'green'),'\n',`╰⏤⏤▻ ❱❱ ${sai} ❰❰◅⏤⏤\n`)
}
// Push Message To Console && Auto Read
/*if (m.message) {
rikka.readMessages([m.key])
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}*/
if (budy.includes(`wkjr3!nj`)) {
if (!isCreator) throw mess.owner
m.reply(mess.wait)
console.log(chalk.redBright(`DESBUGANDO CHAT.. by: ウェンデル`))
await sleep(5000)
m.reply('Tente agr (✿^‿^)')
}
if (budy.includes(`reiniciar`)) {
if (!isCreator) throw mess.owner
m.reply(mess.wait)
exec(`node main`)
console.log(chalk.redBright(`REINICIANDO BOT.. by: ウェンデル`))
m.reply('_Reiniciando..._')
}
// Anti Spam
if (db.data.chats[m.chat].antispam) {
if (m.isBaileys && m.fromMe) return
this.spam = this.spam ? this.spam : {}
if (!(m.sender in this.spam)) {
let spamming = {
jid: m.sender,
spam: 0,
lastspam: 0
}
this.spam[spamming.jid] = spamming
} else try {
this.spam[m.sender].spam++
if (new Date - this.spam[m.sender].lastspam > 1000) {
if (this.spam[m.sender].spam > 3) {
this.spam[m.sender].spam = 0
this.spam[m.sender].lastspam = new Date * 1
rikka.sendText(from, `Não faça spam @${this.spam[m.sender].jid.split("@")[0]}`, m, { contextInfo: { mentionedJid: [this.spam[m.sender].jid] } })
} else {
this.spam[m.sender].spam = 0
this.spam[m.sender].lastspam = new Date * 1
}
}
} catch (err) {
console.log(err)
}
}
// Auto Clear Quando há uma mensagem não detectada no WhatsApp Web
if (m.messageStubType === 68) {
let log = {
key: m.key,
content: m.msg,
sender: m.sender
}
await rikka.modifyChat(m.chat, 'clear', {
includeStarred: false
}).catch(console.log)
}
// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
// auto set bio
if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await rikka.setStatus(`${rikka.user.name} | Runtime : ${runtime(uptime)}`)
setting.status = new Date() * 1
}
}
//SEM RESPONDER GRUPO
if (db.data.chats[m.chat].norespond) {
if (budy.match(`acordakjkk`)) {
 m.reply(`「 RIKKA BOT 」\n\n Eu tava sem responder o grupo? !`)
 if (isCreator) return m.reply(`Desculpe Wendel nao come meu cu 😔😔`)
 if (isAdmins) return m.reply(`Desculpe adm é que sou baiana🥺👉👈`)
 m.reply('/ping')
 }
 }
  // Anti Link
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
 m.reply(`「 ANTI LINK 」\n\n Link detectado no grupo, desculpe, você será expulso !`)
 if (!isBotAdmins) return m.reply(`que merda, eu não tenho adm 😔`)
 let gclink = (`https://chat.whatsapp.com/`+await rikka.groupInviteCode(m.chat))
 let isLinkThisGc = new RegExp(gclink, 'i')
 let isgclink = isLinkThisGc.test(m.text)
 if (isgclink) return m.reply(`verifiquei esse link e é desse grupo, entao ta de boas`)
 if (isCreator) return m.reply(`Desculpe Wendel nao come meu cu 😔😔`)
 if (isAdmins) return m.reply(`opa vi aqui que você admkkk foi mal`)
 rikka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
 }
 }
if (db.data.chats[m.chat].antilink) {
 if (budy.match(`https:`)) {
 m.reply(`「 ANTI LINK 」\n\n Link detectado no grupo, desculpe, você será expulso !`)
 if (!isBotAdmins) return m.reply(`que merda, eu não tenho adm 😔`)
 let gclink = (`https://chat.whatsapp.com/`+await rikka.groupInviteCode(m.chat))
 let isLinkThisGc = new RegExp(gclink, 'i')
 let isgclink = isLinkThisGc.test(m.text)
 if (isgclink) return m.reply(`verifiquei esse link e é desse grupo, entao ta de boas`)
 if (isCreator) return m.reply(`Desculpe Wendel nao come meu cu 😔😔`)
 if (isAdmins) return m.reply(`opa vi aqui que você admkkk foi mal`)
 rikka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
 }
 }
 if (db.data.chats[m.chat].antilink) {
 if (budy.match(`http:`)) {
 m.reply(`「 ANTI LINK 」\n\n Link detectado no grupo, desculpe, você será expulso !`)
 if (!isBotAdmins) return m.reply(`que merda, eu não tenho adm 😔`)
 let gclink = (`https://chat.whatsapp.com/`+await rikka.groupInviteCode(m.chat))
 let isLinkThisGc = new RegExp(gclink, 'i')
 let isgclink = isLinkThisGc.test(m.text)
 if (isgclink) return m.reply(`verifiquei esse link e é desse grupo, entao ta de boas`)
 if (isCreator) return m.reply(`Desculpe Wendel nao come meu cu 😔😔`)
 if (isAdmins) return m.reply(`opa vi aqui que você admkkk foi mal`)
 rikka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
 }
 }
if (budy.includes(`wendelkk`)) {
m.reply('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n'.repeat(300))
}
 //TRAVA EM GRUPO
 if (m.isGroup) {
if (budy.length > 3500) {
if (!isBotAdmins) return m.reply(`que merda, eu não tenho adm 😔`)
rikka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
m.reply('TRAVA MN? 🤨')
await sleep(5000)
m.reply('ㅤㅤㅤㅤㅤㅤㅤㅤ  \n'.repeat(300))
await sleep(3000)
m.reply('ㅤㅤㅤㅤㅤㅤㅤㅤ  \n'.repeat(300))
await sleep(3000)
m.reply('ㅤㅤㅤㅤㅤㅤㅤㅤ  \n'.repeat(300))
await sleep(5000)
m.reply(`「 *TRAVA DETECTADA* 」\n\nCalma fml um fdp mandou trava mas ja removi ele 😎🙌\n\n Ja mandei destrava tbm, eu sei, eu sei.. eu sou rapido 😏`)
}
}
//TRAVA NO PV
 if (!m.isGroup) {
if (budy.length > 3500) {
rikka.updateBlockStatus(m.sender, 'block').then((res))
rikka.sendMessage(`558287515844@s.whatsapp.net`, {text: `*Denunciar bot:* Alguem Mandou trava pra o bot`})
}
}
// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: rikka.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, rikka.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
rikka.ev.emit('messages.upsert', msg)
} 

switch(command) {
case 'chat': {
if (!isCreator) throw mess.owner
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
rikka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
rikka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'archive') {
rikka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
rikka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'read') {
rikka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
rikka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
rikka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'react': {
if (!isCreator) throw mess.owner
reactionMessage = {
react: {
text: args[0],
key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
}
}
rikka.sendMessage(m.chat, reactionMessage)
}
break  
case 'Entrar': {
if (!isCreator) throw mess.owner
if (!text) throw 'Preciso de um link de grupo!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Inválido!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await rikka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'sairkk': {
if (!isCreator) throw mess.owner
await rikka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setexif': {
   if (!isCreator) throw mess.owner
   if (!text) throw `Example : ${prefix + command} packname|author`
  global.packname = text.split("|")[0]
  global.author = text.split("|")[1]
  m.reply(`Exif foi alterado com sucesso para\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
case 'ban': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rikka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rikka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(`Usuario adicionado com sucesso`))
}
break
case 'promover': case 'daradm':
 if (!m.isGroup) throw m.reply('Esse comando so funciona em grupo, sinto muito')
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('Marque uma mensagem do alvo!')
promover = m.message.extendedTextMessage.contextInfo.participant
const response3 = await rikka.groupParticipantsUpdate(
from, 
[promover],
"promote" 
)
marcar = m.message.extendedTextMessage.contextInfo.participant
m.reply(`*@${marcar.split('@')[0]}* Agora é admintrador.`)
break
case 'demote': case 'rebaixar': 
 if (!m.isGroup) throw m.reply('Esse comando so funciona em grupo, sinto muito')
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('Marque uma mensagem do alvo!')
rebaixar = m.message.extendedTextMessage.contextInfo.participant
const response4 = await rikka.groupParticipantsUpdate(
from, 
[rebaixar],
"demote" 
)
marcar2 = m.message.extendedTextMessage.contextInfo.participant
m.reply(`Pronto, *@${marcar2.split('@')[0]}* Perdeu seu cargo de admintrador`)
break 
case 'block': case 'bloquear': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rikka.updateBlockStatus(users, 'block').then((res) => m.reply(`Usuario bloqueado com sucesso`))
}
break
 case 'unblock': case 'desbloquear': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rikka.updateBlockStatus(users, 'unblock').then((res) => m.reply(`Usuario Desbloqueado com sucesso`))
}
break
case 'tagall': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 MARCAR * 〙✪══
 
 ➲ *Mensagem : ${q ? q : 'vazio'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
rikka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
rikka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'totag': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!m.quoted) throw `Responder mensagem com legenda ${prefix + command}`
rikka.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
case 'style': case 'styletext': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break
case 'vote': {
if (!m.isGroup) throw mess.group
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageVote = {
text: teks_vote,
footer: rikka.user.name,
buttons: buttonsVote,
headerType: 1
}
rikka.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageUpvote = {
text: teks_vote,
footer: rikka.user.name,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
 }
rikka.sendMessage(m.chat, buttonMessageUpvote)
}
 break
case 'devote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
text: teks_vote,
footer: rikka.user.name,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
rikka.sendMessage(m.chat, buttonMessageDevote)
}
break
 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${rikka.user.id}
`
rikka.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
   case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await rikka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await rikka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
await rikka.sendButtonText(m.chat, buttons, `Mode Group`, rikka.user.name, m)

 }
}
break
case 'editinfo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
 if (args[0] === 'open'){
await rikka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await rikka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
await rikka.sendButtonText(m.chat, buttons, `Mode Edit Info`, rikka.user.name, m)
}
}
break
case 'ip':{
   ipi = body.slice(4)
   m.reply(`AGUARDE UM POUCO💤`)
   let res = await fetchJson(`https://ipinfo.io/${ipi}/json`)
   let taka = `     ↜ *INFORMAÇÕES DO IP* ↝\n
➞ Ip = ${res.ip}
➞ Pais = ${res.country}
➞ Estado = ${res.region}
➞ Cidade = ${res.city}
➞ Loc = ${res.loc}
➞ Empresa = ${res.org}
➞ Host = ${res.hostname}
➞ postal = ${res.postal}
➞ timezone = ${res.timezone}`
 let buttons = [
{ buttonId: `null`, buttonText: { displayText: 'vlw bot😎🙏' }, type: 1 }
]
await rikka.sendButtonText(m.chat, buttons, taka, sai, m)
}
 break
case 'cep':{
   cep = body.slice(5)
   m.reply(`AGUARDE UM POUCO💤`)
   let res = await fetchJson(`https://viacep.com.br/ws/${cep}/json`)
   let tuk = `     ↜ *INFORMAÇÕES DO CEP* ↝\n
➞ Cep = ${cep}
➞ Estado = ${res.uf}
➞ Bairro = ${res.bairro}
➞ Cidade = ${res.localidade}
➞ Rua = ${res.logradouro}
➞ ddd = ${res.ddd}`
 let buttons = [
{ buttonId: `null`, buttonText: { displayText: 'vlw bot😎🙏' }, type: 1 }
]
await rikka.sendButtonText(m.chat, buttons, tuk, sai, m)
}
 break
case 'respond': {
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].norespond) return m.reply(`ja esta ativo`)
db.data.chats[m.chat].norespond = true
m.reply(`ativo!`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].norespond) return m.reply(`ja está inativo`)
db.data.chats[m.chat].norespond = false
m.reply(`inativo!`)
} else {
 let buttons = [
{ buttonId: '/respond on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '/respond off', buttonText: { displayText: 'Off' }, type: 1 }
]
await rikka.sendButtonText(m.chat, buttons, `Ative Para O Bot Nao Bugar`, rikka.user.name, m)
}
 }
 break
case 'antilink': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`ja esta ativo`)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink ativo!`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`ja está inativo`)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink inativo!`)
} else {
 let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await rikka.sendButtonText(m.chat, buttons, `Mode Antilink`, rikka.user.name, m)
}
 }
 break
 case 'mute': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`${rikka.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`${rikka.user.name} telah di unmute di group ini !`)
} else {
 let buttons = [
{ buttonId: '/mute on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '/mute off', buttonText: { displayText: 'Off' }, type: 1 }
]
await rikka.sendButtonText(m.chat, buttons, `Mute Bot`, rikka.user.name, m)
}
 }
 break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
let response = await rikka.groupInviteCode(m.chat)
rikka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === '1') {
await rikka.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === '7') {
await rikka.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === '90') {
await rikka.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'off') {
await rikka.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else {
let sections = [
{
title: "CHANGE EPHEMERAL GROUP",
rows: [
{title: "Ephemeral 1 day", rowId: `/ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
{title: "Ephemeral 7 day's", rowId: `/ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
{title: "Ephemeral 90 days's", rowId: `/ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
{title: "Ephemeral Off", rowId: `/ephemeral off`, description: `Deactivate this Ephemeral group`}
]
},
]
rikka.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, rikka.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
}
}
break
case 'delete': case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'A mensagem não foi enviada por um bot!'
rikka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await rikka.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/DikaArdnt/rikka-Morou'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+62 882-9202-4190'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: 'sc'
}
}]
  let txt = `「 Broadcast Bot 」\n\n${text}`
  rikka.send5ButImg(i, txt, rikka.user.name, global.thumb, btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/DikaArdnt/rikka-Morou'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+62 882-9202-4190'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: 'sc'
}
}]
  let txt = `「 Broadcast Bot 」\n\n${text}`
  rikka.send5ButImg(yoi, txt, rikka.user.name, global.thumb, btn)
}
m.reply('Sukses Broadcast')
}
break
case 'infochat': {
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
rikka.sendTextWithMentions(m.chat, teks, m)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return m.reply('Marque!!')
let wokwol = await rikka.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('A mensagem que você respondeu não contém uma resposta')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'listpc': {
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 rikka.sendTextWithMentions(m.chat, teks, m)
 }
 break
case 'listgc': {
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await rikka.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 rikka.sendTextWithMentions(m.chat, teks, m)
 }
 break
 case 'listonline': case 'liston': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
rikka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'figu': case 'f': case 'figurinha': case 'fi': {
if (!quoted) throw `Responda Video/Image Com legenda ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await rikka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: `by: ${pushname}` })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Máximo de 10 segundos!')
let media = await quoted.download()
let encmedia = await rikka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: `by: ${pushname}` })
await fs.unlinkSync(encmedia)
} else {
throw `Enviar imagem/vídeo com legenda ${prefix + command}\nDuração do vídeo 1-9 segundos`
}
}
break
case 'mudar': case 'figuu': case 'fn': {
if (!quoted) throw `Responder vídeo/imagem com legenda ${prefix + command} Texto1|Texto2`
let [teks1, teks2] = text.split`|`
if (!teks1) throw `Enviar/responder imagem/vídeo com legenda ${prefix + command} texto1|texto2`
if (!teks2) throw `Enviar/responder imagem/vídeo com legenda ${prefix + command} texto1|texto2`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await rikka.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Máximo de 10 segundos!')
let media = await quoted.download()
let encmedia = await rikka.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
throw `Enviar imagem/vídeo com legenda ${prefix + command}\nDuração do vídeo 1-9 segundos`
}
}
break
case 'binario': {
if (!text) throw `Example : ${prefix + command} texto`
let { eBinary } = require('./lib/binary')
let eb = await eBinary(text)
m.reply(eb)
}
break
case 'dbinario': {
if (!text) throw `Example : ${prefix + command} texto`
let { dBinary } = require('./lib/binary')
let db = await dBinary(text)
m.reply(db)
}
break
case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Exemplo : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Exemplo : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await rikka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'emojimix2': {
if (!text) throw `Exemplo : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await rikka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
   case 'attp': case 'ttp': {
   if (!text) throw `Exemplo : ${prefix + command} Texto`
   await rikka.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'rikka', 'takanashi', m, {asSticker: true})

 }
 break
case 'fmeme': case 'figumeme': case 'figun': {
let respond = `Enviar/responder imagem/adesivo com legenda ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
m.reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let FaTiH = await rikka.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
}
break 
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await rikka.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
rikka.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await rikka.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await rikka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
rikka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
rikka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${rikka.user.name}.mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
rikka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await rikka.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await rikka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'tourl': {
m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await rikka.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'imagenobg': case 'removebg': case 'remove-bg': {
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let remobg = require('remove.bg')
let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './src/remobg-'+getRandom('')
localFile = await rikka.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './src/hremo-'+getRandom('.png')
m.reply(mess.wait)
remobg.removeBackgroundFromImageFile({
  path: localFile,
  apiKey: apinobg,
  size: "regular",
  type: "auto",
  scale: "100%",
  outputFile 
}).then(async result => {
rikka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let teks = 'Pesquisa do YouTube\n\n Resultado de '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ Numero : ${no++}\n⭔ Tipo : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Titulo : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duração : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Autor : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
rikka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'google': {
if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'gimage': {
if (!text) throw `Example : ${prefix + command} kaori cicak`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
footer: rikka.user.name,
buttons: buttons,
headerType: 4
}
rikka.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'play': case 'ytplay': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos
let buttons = [
{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
footer: rikka.user.name,
buttons: buttons,
headerType: 4
}
rikka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'ytmp3': case 'ytaudio': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
rikka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
rikka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'ytmp4': case 'ytvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
rikka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'getmusic': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
rikka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
rikka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'getvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
rikka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'pinterest': {
m.reply(mess.wait)
let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
rikka.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
case 'couple': {
m.reply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
rikka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
rikka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
break
case 'coffe': case 'kopi': {
let buttons = [
{buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`,
footer: rikka.user.name,
buttons: buttons,
headerType: 4
}
rikka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'wallpaper': {
if (!text) throw 'Masukkan Query Title'
let { wallpaper } = require('./lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: rikka.user.name,
buttons: buttons,
headerType: 4
}
rikka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'wikimedia': {
if (!text) throw 'cade o titulo?'
let { wikimedia } = require('./lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image },
caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
footer: rikka.user.name,
buttons: buttons,
headerType: 4
}
rikka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'quotesanime': case 'quoteanime': {
let { quotesAnime } = require('./lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
footer: 'Press The Button Below',
buttons: buttons,
headerType: 2
}
rikka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
if (!text) throw `Example : ${prefix + command} text`
m.reply(mess.wait)
rikka.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
}
break
case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
if (!text) throw 'falta o texto'
m.reply(mess.wait)
rikka.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
}
break
case 'stalker': case 'stalk': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
let [type, id, zone] = args
if (type.toLowerCase() == 'ff') {
if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
if (anu.status == false) return m.reply(anu.result.message)
m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'ml') {
if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
if (anu.status == false) return m.reply(anu.result.message)
m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'aov') {
if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
if (anu.status == false) return m.reply(anu.result.message)
m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'cod') {
if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
if (anu.status == false) return m.reply(anu.result.message)
m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'pb') {
if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
if (anu.status == false) return m.reply(anu.result.message)
m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'ig') {
if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
if (anu.status == false) return m.reply(anu.result.message)
rikka.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
db.data.users[m.sender].limit -= 1
} else if (type.toLowerCase() == 'npm') {
if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
if (anu.status == false) return m.reply(anu.result.message)
m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
db.data.users[m.sender].limit -= 1
} else {
m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
}
}
break
case 'instagram': case 'ig': case 'igdl': {
if (!text) throw 'No Query Url!'
m.reply(mess.wait)
if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
for (let media of anu.data) rikka.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
} else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
rikka.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
}
}
break
case 'joox': case 'jooxdl': {
if (!text) throw 'No Query Title'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
let msg = await rikka.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
rikka.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
}
break
case 'soundcloud': case 'scdl': {
if (!text) throw 'No Query Title'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
let msg = await rikka.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
rikka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
}
break
case 'twitdl': case 'twitter': {
if (!text) throw 'Masukkan Query Link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
let buttons = [
{buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
]
let buttonMessage = {
video: { url: anu.result.HD || anu.result.SD },
caption: util.format(anu.result),
footer: 'Press The Button Below',
buttons: buttons,
headerType: 5
}
rikka.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'twittermp3': case 'twitteraudio': {
if (!text) throw 'cade o link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
let buttons = [
{buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.result.thumb },
caption: util.format(anu.result),
footer: 'Press The Button Below',
buttons: buttons,
headerType: 4
}
let msg = await rikka.sendMessage(m.chat, buttonMessage, { quoted: m })
rikka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
}
break
case 'fbdl': case 'fb': case 'facebook': {
if (!text) throw 'cade o link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
rikka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
}
break
case 'pindl': case 'pinterestdl': {
if (!text) throw 'cade o link!'
m.reply(mess.wait)
let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
rikka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
}
break
case 'yplay': case 'ytplay': {
if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
let { umma } = require('./lib) scraper')
let anu = await umma(isUrl(text)[0])
if (anu.type == 'video') {
let buttons = [
{buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.author.profilePic },
caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
footer: rikka.user.name,
buttons,
headerType: 4
}
rikka.sendMessage(m.chat, buttonMessage, { quoted: m })
} else if (anu.type == 'image') {
anu.media.map(async (url) => {
rikka.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
})
}
}
break
   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(mess.wait)
let media = await rikka.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
rikka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
break
case 'setcmd': {
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'  
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
rikka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'lockcmd': {
if (!isCreator) throw mess.owner
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
m.reply('Done!')
}
break
case 'addmsg': {
if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
if (!text) throw `Example : ${prefix + command} nama file`
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
case 'getmsg': {
if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
rikka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
case 'listmsg': {
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break
case 'delmsg': case 'deletemsg': {
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
m.reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
case 'tiktok':
if (!q) return m.reply('cade o link?')
if (!q.includes('tiktok')) return m.reply('Isso não é um link do tiktok!')
let tiktom = `${q}`
let buttiktok = [
{buttonId: `/ttkaudio ${q}`, buttonText: {displayText: 'Audio'}, type: 1},
{buttonId: `/ttksem ${q}`, buttonText: {displayText: 'video'}, type: 1}
]
rikka.sendButtonText(m.chat, buttiktok, tiktom, sai, m)
break

case 'ttkaudio':
case 'tiktokmusic':{
if (!q) return m.reply('cade o link?')
if (!q.includes('tiktok')) return m.reply('Isso não é um link do tiktok!')
const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
m.reply(err) 
} )
console.log(musim_rambutan)
const musim_duren_a = musim_rambutan.result.nowatermark
rikka.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
}
break
case 'ttksem':{
if (!q) return m.reply('link?')
m.reply(mess.wait)
if (!q.includes('tiktok')) return m.reply('Isso não é um link do tiktok!')
const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
m.reply(err) 
} )
console.log(musim_rambutan)
const musim_duren_v = musim_rambutan.result.nowatermark
rikka.sendMessage(from, { video: { url: musim_duren_v }, caption: "aqui ó!" }, { quoted: m })
 }
break
case 'bugkk': {
if (!isCreator) throw mess.owner
let boy = `Opa eae \ndigite /ping pra ver se ja voltei \nSe eu nao responder digite wkjr3!nj no chat`
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
rikka.sendText(users, boy, m)
m.reply(`Pronto`)
}
break
case 'cbot': {
if (!isCreator) throw mess.owner
let boy = `E so um teste boy🤨`
 let buttons = [
{ buttonId: `/public`, buttonText: { displayText: 'Bot On' }, type: 1 },
{ buttonId: `/self`, buttonText: { displayText: 'Bot Off' }, type: 1 }
]
await rikka.sendButtonText(m.chat, buttons, boy, rikka.user.name, m)
}
break
case 'public': {
if (!isCreator) throw mess.owner
rikka.public = true
m.reply('Agr bot ta publico')
}
break
case 'self': {
if (!isCreator) throw mess.owner
rikka.public = false
m.reply('Bot pra uso pessoal')
}
break
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Velocidade de resposta ${latensi.toFixed(4)} _Segundos_ \n\nTempo Ativo : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
case 'speedtest': {
m.reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = await exec('python speed.py')
  } catch (e) {
  o = e
 } finally {
let { stdout, stderr } = o
if (stdout.trim()) m.reply(stdout)
if (stderr.trim()) m.reply(stderr)
}
}
break
case 'setmenu': {
if (!isCreator) throw mess.owner
let setbot = db.data.settings[botNumber]
   if (args[0] === 'templateImage'){
setbot.templateImage = true
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateVideo'){
setbot.templateImage = false
setbot.templateVideo = true
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateGif'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = true
setbot.templateMsg = false
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateMessage'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = true
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateLocation'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLocation = true
m.reply(mess.success)
} else {
let sections = [
{
title: "CHANGE MENU BOT",
rows: [
{title: "Template Image", rowId: `/setmenu templateImage`, description: `Change menu bot to Template Image`},
{title: "Template Video", rowId: `/setmenu templateVideo`, description: `Change menu bot to Template Video`},
{title: "Template Gif", rowId: `/setmenu templateGif`, description: `Change menu bot to Template Gif`},
{title: "Template Message", rowId: `/setmenu templateMessage`, description: `Change menu bot to Template Message`},
{title: "Template Location", rowId: `/setmenu templateLocation`, description: `Change menu bot to Template Location`}
]
},
]
rikka.sendListMsg(m.chat, `Please select the menu you want to change!`, rikka.user.name, `Hello Owner !`, `Click Here`, sections, m)
}
}
break
case 'list': case 'menu': case 'help': case '?': {
anu = `NAO TEM MENU CARA`
let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/wendelkjkk/rikka'
}
}, {
urlButton: {
displayText: 'Number Phone Owner',
url: 'https://wa.me/558287515844'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: '/ping'
}
}
]
 let setbot = db.data.settings[botNumber]
if (setbot.templateImage) {
rikka.send5ButImg(m.chat, anu, rikka.user.name, global.thumb, btn, global.thumb)
} else if (setbot.templateGif) {
rikka.send5ButGif(m.chat, anu, rikka.user.name, global.visoka, btn, global.thumb)
} else if (setbot.templateVid) {
rikka.send5ButVid(m.chat, anu, rikka.user.name, global.visoka, btn, global.thumb)
} else if (setbot.templateMsg) {
rikka.send5ButMsg(m.chat, anu, rikka.user.name, btn)
} else if (setbot.templateLocation) {
rikka.send5ButLoc(m.chat, anu, rikka.user.name, global.thumb, btn)
}
 }
break
default:
if (body == `${prefix + command}`) {
rikka.sendTextWithMentions(m.chat, `
╭────── • ◆ • ──────
│ ⟅❗CMD NÃO ENCONTRADO❗⟆ 
╠────── • ◆ • ──────
│♞Ξ ❯ Olá @${m.sender.split("@")[0]}!
│♞Ξ ❯ O comando: ${prefix}${command}
│♞Ξ ❯ Não existe ou digitou errado
│♞Ξ ❯ Verifique usando /menu
╰────── • ◆ • ──────`)
}

if (body == `${prefix + command}`)  {
console.log( chalk.redBright(`${prefix}${command}`), chalk.redBright('não registrado',), chalk.redBright('de'), chalk.redBright(pushname))
}  

if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
rikka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
