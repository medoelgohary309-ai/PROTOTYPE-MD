// handler.js
// ⧼ 𝑷𝑹𝑶𝑻𝑶𝑻𝒀𝑷𝑬 ⧽ v2 - المعالج الرئيسي (بدون ترحيب) 🚀

import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import { smsg } from './core/Prototype_core.js'
import { format } from 'util' 
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile, readFileSync as fs } from 'fs'
import chalk from 'chalk'
import fetch from 'node-fetch'
import ws from 'ws';
import { tr, translateText } from './core/_checkLang.js';

const baileys = await import('@whiskeysockets/baileys')
const {proto, jidNormalizedUser, areJidsSameUser} = baileys

const isNumber = (x) => typeof x === 'number' && !isNaN(x)
const delay = (ms) =>
isNumber(ms) &&
new Promise((resolve) =>
setTimeout(function () {
clearTimeout(this)
resolve()
}, ms)
)

export async function handler(chatUpdate) {
this.msgqueque = this.msgqueque || []
this.uptime = this.uptime || Date.now()
if (!chatUpdate) {
return
}
if (!chatUpdate || !chatUpdate.messages) {
return
} else {
this.pushMessage(chatUpdate.messages).catch(console.error)
}
let m = chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m) {
return
}
if (global.db.data == null) await global.loadDatabase()
try {
m = smsg(this, m) || m
if (!m) return
m.exp = 0
m.limit = false
m.money = false
try {
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
  if (!isNumber(user.exp)) user.exp = 0
  if (user.exp < 0) user.exp = 0
  if (!isNumber(user.money)) user.money = 150
  if (user.money < 0) user.money = 0
  if (!isNumber(user.limit)) user.limit = 15
  if (user.limit < 0) user.limit = 0
  if (!('role' in user)) user.role = 'مواطن'
  if (!isNumber(user.level)) user.level = 0
  if (!isNumber(user.warn)) user.warn = 0
  if (!('name' in user)) user.name = m.name
  if (!('premium' in user)) user.premium = false
  if (!isNumber(user.premiumTime)) user.premiumTime = 0
  if (!('registered' in user)) user.registered = false
  if (!('muto' in user)) user.muto = false
  if (!('banned' in user)) user.banned = false
  if (!('BannedReason' in user)) user.BannedReason = ''
  if (!isNumber(user.afk)) user.afk = -1
  if (!isNumber(user.lastseen)) user.lastseen = 0
  if (!isNumber(user.joincount)) user.joincount = 1
} else
  global.db.data.users[m.sender] = {
    name: m.name,
    exp: 0,
    money: 150,
    level: 0,
    role: '*NOVATO(A)* 🪤',
    limit: 15,
    warn: 0,
    premium: false,
    premiumTime: 0,
    registered: false,
    muto: false,
    banned: false,
    BannedReason: '',
    afk: -1,
    lastseen: 0,
    joincount: 1,
  }

let akinator = global.db.data.users[m.sender].akinator
if (typeof akinator !== 'object') global.db.data.users[m.sender].akinator = {}
if (akinator) {
  if (!('sesi' in akinator)) akinator.sesi = false
  if (!('server' in akinator)) akinator.server = null
  if (!('frontaddr' in akinator)) akinator.frontaddr = null
  if (!('session' in akinator)) akinator.session = null
  if (!('signature' in akinator)) akinator.signature = null
  if (!('question' in akinator)) akinator.question = null
  if (!('progression' in akinator)) akinator.progression = null
  if (!('step' in akinator)) akinator.step = null
  if (!('soal' in akinator)) akinator.soal = null
} else
  global.db.data.users[m.sender].akinator = {
    sesi: false,
    server: null,
    frontaddr: null,
    session: null,
    signature: null,
    question: null,
    progression: null,
    step: null,
    soal: null
  }
let chat = global.db.data.chats[m.chat]
if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}

if (chat) {
if (!('isBanned' in chat)) chat.isBanned = false
if (!('welcome' in chat)) chat.welcome = true
if (!('detect' in chat)) chat.detect = false
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!('sBye' in chat)) chat.sBye = ''
if (!('sPromote' in chat)) chat.sPromote = ''
if (!('sDemote' in chat)) chat.sDemote = ''
if (!('sCondition' in chat)) chat.sCondition = ''
if (!('sAutorespond' in chat)) chat.sAutorespond = ''
if (!('delete' in chat)) chat.delete = false
if (!('modohorny' in chat)) chat.modohorny = true
if (!('stickers' in chat)) chat.stickers = false
if (!('autosticker' in chat)) chat.autosticker = false
if (!('audios' in chat)) chat.audios = true
if (!('antiver' in chat)) chat.antiver = false
if (!('antiPorn' in chat)) chat.antiPorn = true
if (!('antiLink' in chat)) chat.antiLink = false
if (!('antiLink2' in chat)) chat.antiLink2 = false
if (!('antiTiktok' in chat)) chat.antiTiktok = false
if (!('antiYoutube' in chat)) chat.antiYoutube = false
if (!('antiTelegram' in chat)) chat.antiTelegram = false
if (!('antiFacebook' in chat)) chat.antiFacebook = false
if (!('antiInstagram' in chat)) chat.antiInstagram = false
if (!('antiTwitter' in chat)) chat.antiTwitter = false
if (!('antiDiscord' in chat)) chat.antiDiscord = false
if (!('antiThreads' in chat)) chat.antiThreads = false
if (!('antiTwitch' in chat)) chat.antiTwitch = false
if (!('antifake' in chat)) chat.antifake = false
if (!('reaction' in chat)) chat.reaction = true
if (!('viewonce' in chat)) chat.viewonce = false
if (!('modoadmin' in chat)) chat.modoadmin = false
if (!('autorespond' in chat)) chat.autorespond = true
if (!('antitoxic' in chat)) chat.antitoxic = true
if (!('game' in chat)) chat.game = true
if (!('game2' in chat)) chat.game2 = true
if (!('simi' in chat)) chat.simi = false
if (!('antiTraba' in chat)) chat.antiTraba = true
if (!('primaryBot' in chat)) chat.primaryBot = null
if (!('autolevelup' in chat)) chat.autolevelup = true
if (!isNumber(chat.expired)) chat.expired = 0
if (!('horarioNsfw' in chat)) {
chat.horarioNsfw = {
inicio: '00:00',
fin: '23:59'
}
}
} else
global.db.data.chats[m.chat] = {
isBanned: false,
welcome: true,
detect: true,
sWelcome: '',
sBye: '',
sPromote: '',
sDemote: '',
sCondition: '',
sAutorespond: '',
delete: false,
modohorny: true,
stickers: false,
autosticker: false,
audios: false,
antiver: true,
antiPorn: true,
antiLink: false,
antiLink2: false,
antiTiktok: false,
antiYoutube: false,
antiTelegram: false,
antiFacebook: false,
antiInstagram: false,
antiTwitter: false,
antiDiscord: false,
antiThreads: false,
antiTwitch: false,
antifake: false,
reaction: true,
viewonce: false,
modoadmin: false,
autorespond: true,
antitoxic: true,
game: true,
game2: true,
simi: false,
antiTraba: true,
primaryBot: null,
autolevelup: true,
expired: 0,
horarioNsfw: {
inicio: '00:00',
fin: '23:59'
}
}
let settings = global.db.data.settings[this.user.jid]
if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
if (settings) {
if (!('self' in settings)) settings.self = false
if (!('autoread' in settings)) settings.autoread = false
if (!('autoread2' in settings)) settings.autoread2 = false
if (!('restrict' in settings)) settings.restrict = false
if (!('temporal' in settings)) settings.temporal = false
if (!('anticommand' in settings)) settings.anticommand = false
if (!('antiPrivate' in settings)) settings.antiPrivate = false
if (!('antiCall' in settings)) settings.antiCall = true
if (!('antiSpam' in settings)) settings.antiSpam = true
if (!('modoia' in settings)) settings.modoia = false
if (!('jadibotmd' in settings)) settings.jadibotmd = true
if (!('prefix' in settings)) settings.prefix = opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®&.\\-.@'
} else
global.db.data.settings[this.user.jid] = {
self: false,
autoread: false,
autoread2: false,
restrict: false,
temporal: false,
antiPrivate: false,
antiCall: true,
antiSpam: true,
modoia: false,
anticommand: false,
prefix: opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®&.\\-.@',
jadibotmd: true
}
} catch (e) {
console.error(e)
}

var settings = global.db.data.settings[this.user.jid]
let prefix
const defaultPrefix = '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®&.\\-.@'
if (settings.prefix) {
if (settings.prefix.includes(',')) {
const prefixes = settings.prefix.split(',').map((p) => p.trim())
prefix = new RegExp('^(' + prefixes.map((p) => p.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&')).join('|') + ')')
} else if (settings.prefix === defaultPrefix) {
prefix = new RegExp('^[' + settings.prefix.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&') + ']')
} else {
prefix = new RegExp('^' + settings.prefix.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&'))
}
} else {
prefix = new RegExp('')
}
const detectwhat = m.sender.includes('@lid') ? '@lid' : '@s.whatsapp.net'
const isROwner = [...global.owner.map((number) => number)].map((v) => v.replace(/[^0-9]/g, '') + detectwhat).includes(m.sender)
const isOwner = isROwner || m.fromMe
const isMods = isOwner || global.mods.map((v) => v.replace(/[^0-9]/g, '') + detectwhat).includes(m.sender)
const isPrems = isROwner || global.db.data.users[m.sender].premiumTime > 0

if (opts['queque'] && m.text && !(isMods || isPrems)) {
let queque = this.msgqueque,
time = 1000 * 5
const previousID = queque[queque.length - 1]
queque.push(m.id || m.key.id)
setInterval(async function () {
if (queque.indexOf(previousID) === -1) clearInterval(this)
await delay(time)
}, time)
}

if (
m.id.startsWith('EVO') ||
m.id.startsWith('Lyru-') ||
m.id.startsWith('EvoGlobalBot-') ||
(m.id.startsWith('BAE5') && m.id.length === 16) ||
m.id.startsWith('B24E') ||
(m.id.startsWith('8SCO') && m.id.length === 20) ||
m.id.startsWith('FizzxyTheGreat-')
)
return

if (opts['nyimak']) return
if (!isROwner && opts['self']) return
if (opts['pconly'] && m.chat.endsWith('g.us')) return
if (opts['gconly'] && !m.chat.endsWith('g.us')) return
if (opts['swonly'] && m.chat !== 'status@broadcast') return
if (typeof m.text !== 'string') m.text = ''

/// ========== معالج أزرار القوالب (templateButtonReplyMessage) ==========
try {
    let buttonId = null;

    if (m.message?.buttonsResponseMessage) {
        const btnMsg = m.message.buttonsResponseMessage;
        buttonId = btnMsg.selectedButtonId;
    }
    else if (m.message?.templateButtonReplyMessage) {
        const templateMsg = m.message.templateButtonReplyMessage;
        buttonId = templateMsg.selectedId || templateMsg.selectedDisplayText;
    }
    else if (m.message?.interactiveResponseMessage) {
        const intMsg = m.message.interactiveResponseMessage;
        
        if (intMsg.nativeFlowResponseMessage) {
            const native = intMsg.nativeFlowResponseMessage;
            buttonId = native.id;
            if (!buttonId && native.paramsJson) {
                try {
                    const params = JSON.parse(native.paramsJson);
                    buttonId = params.id || params.selected_id;
                } catch (e) {}
            }
        }
        
        if (!buttonId && intMsg.listResponseMessage) {
            const listMsg = intMsg.listResponseMessage;
            buttonId = listMsg.singleSelectReply?.selectedRowId;
            if (!buttonId) {
                buttonId = listMsg.title || listMsg.description;
            }
        }
    }

    if (buttonId) {
        console.log('[BUTTON] Pressed:', buttonId);
        let finalId = buttonId.trim();
        if (!finalId.startsWith('.')) {
            finalId = '.' + finalId;
        }
        finalId = finalId.replace(/^\.\./, '.');
        m.text = finalId;
        m.isCommand = true;
        await this.sendMessage(m.chat, { react: { text: '✅', key: m.key } }).catch(() => {});
    }
    
} catch (err) {
    console.error('[BUTTON HANDLER ERROR]', err);
}

m.exp += Math.ceil(Math.random() * 10)

// ============== [ تسجيل آخر 30 رسالة ] ==============
if (!global.lastMessages) global.lastMessages = []

global.lastMessages.push({
    sender: m.sender,
    senderName: m.pushName || m.name || 'مجهول',
    text: m.text || m.body || m.message?.conversation || '',
    body: m.body || '',
    isGroup: m.isGroup,
    chat: m.chat,
    time: Date.now()
})

if (global.lastMessages.length > 30) {
    global.lastMessages.shift()
}
let usedPrefix
let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

const groupMetadata = m.isGroup
? (global.cachedGroupMetadata
? await global.cachedGroupMetadata(m.chat).catch((_) => null)
: await this.groupMetadata(m.chat).catch((_) => null)) || {}
: {}
const participants = Array.isArray(groupMetadata?.participants) ? groupMetadata.participants : []

const decode = (j) => this.decodeJid(j)
const norm = (j) => jidNormalizedUser(decode(j))
const numOnly = (j) =>
String(decode(j))
.split('@')[0]
.replace(/[^0-9]/g, '')

const meIdRaw = this.user?.id || this.user?.jid
const meLidRaw = (this.user?.lid || conn?.user?.lid || '').toString().replace(/:.*/, '') || null
const botNum = numOnly(meIdRaw)

const botCandidates = [
decode(meIdRaw),
jidNormalizedUser(decode(meIdRaw)),
botNum,
meLidRaw && `${meLidRaw}@lid`,
meLidRaw && jidNormalizedUser(`${meLidRaw}@lid`),
meLidRaw && `${meLidRaw}@s.whatsapp.net`
].filter(Boolean)

const senderCandidates = [decode(m.sender), jidNormalizedUser(decode(m.sender)), numOnly(m.sender)]

const participantsMap = {}
for (const p of participants) {
const raw = p.jid || p.id
const dj = decode(raw)
const nj = jidNormalizedUser(dj)
const no = numOnly(dj)
participantsMap[dj] = p
participantsMap[nj] = p
participantsMap[no] = p
}

const pick = (cands) => {
for (const k of cands) if (participantsMap[k]) return participantsMap[k]
return participants.find((p) => cands.some((c) => areJidsSameUser(norm(p.jid || p.id), jidNormalizedUser(decode(c))))) || null
}

const user = m.isGroup ? pick(senderCandidates) || {} : {}
const bot = m.isGroup ? pick(botCandidates) || {} : {}

const isRAdmin = user?.admin === 'superadmin'
const isAdmin = isRAdmin || user?.admin === 'admin' || user?.admin === true
const isBotAdmin = bot?.admin === 'admin' || bot?.admin === 'superadmin' || bot?.admin === true

m.isWABusiness = global.conn.authState?.creds?.platform === 'smba' || global.conn.authState?.creds?.platform === 'smbi'
m.isChannel = m.chat.includes('@newsletter') || m.sender.includes('@newsletter')

const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')

for (let name in global.plugins) {
let plugin = global.plugins[name]
if (!plugin) continue
if (plugin.disabled) continue

const __filename = join(___dirname, name)

if (typeof plugin.all === 'function') {
try {
await plugin.all.call(this, m, {
chatUpdate,
__dirname: ___dirname,
__filename
})
} catch (e) {
console.error(e)
for (let [jid] of global.owner.filter((number, _, isDeveloper) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
if (data.exists)
m.reply(
`${lenguajeGB['smsCont1']()}\n\n${lenguajeGB['smsCont2']()}\n*_${name}_*\n\n${lenguajeGB['smsCont3']()}\n*_${m.sender}_*\n\n${lenguajeGB['smsCont4']()}\n*_${m.text}_*\n\n${lenguajeGB['smsCont5']()}\n\`\`\`${format(e)}\`\`\`\n\n${lenguajeGB['smsCont6']()}`.trim(),
data.jid
)
}
}
}

if (!opts['restrict']) {
if (plugin.tags && plugin.tags.includes('admin')) {
continue
}
}

const str2Regex = (str) => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
let _prefix = plugin.customPrefix ? plugin.customPrefix : this.prefix ? this.prefix : prefix

let matchCandidates =
_prefix instanceof RegExp
? [[_prefix.exec(m.text), _prefix]]
: Array.isArray(_prefix)
? _prefix.map((p) => {
let re = p instanceof RegExp ? p : new RegExp(str2Regex(p))
return [re.exec(m.text), re]
})
: typeof _prefix === 'string'
? [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]]
: [[null, null]]

let match = matchCandidates.find((p) => p[0])

if (typeof plugin.before === 'function') {
if (
await plugin.before.call(this, m, {
match,
conn: this,
participants,
groupMetadata,
user,
bot,
isROwner,
isOwner,
isRAdmin,
isAdmin,
isBotAdmin,
isPrems,
chatUpdate,
__dirname: ___dirname,
__filename
})
)
continue
}

if (typeof plugin !== 'function') continue

if (!match) continue

usedPrefix = (match[0] || [])[0] || ''
let noPrefix = m.text.slice(usedPrefix.length)
let [command, ...args] = noPrefix.trim().split(/\s+/).filter(Boolean)
args = args || []
let _args = noPrefix.trim().split(/\s+/).slice(1)
let text = _args.join(' ')
command = (command || '').toLowerCase()

let fail = plugin.fail || global.dfail
let isAccept =
plugin.command instanceof RegExp
? plugin.command.test(command)
: Array.isArray(plugin.command)
? plugin.command.some((cmd) => (cmd instanceof RegExp ? cmd.test(command) : cmd === command))
: typeof plugin.command === 'string'
? plugin.command === command
: false

if (!isAccept) continue
m.plugin = name

if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
if (!['owner-unbanchat.js'].includes(name) && chat && chat.isBanned && !isROwner) return
if (
name != 'owner-unbanchat.js' &&
name != 'owner-exec.js' &&
name != 'owner-exec2.js' &&
name != 'tool-delete.js' &&
chat?.isBanned &&
!isROwner
)
return
if (m.text && user.banned && !isROwner) {
if (user.antispam > 2) return
m.reply(
`\n╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☹
┆ 🚫 *تم حظرك، لا يمكنك استخدام الأوامر*
┆ 📑 *السبب: ${user.messageSpam === 0 ? 'غير محدد' : user.messageSpam}*
┆ ⚠️ \`\`\`إذا كان هذا البوت حساب رسمي ولديك دليل يثبت أن هذه الرسالة خطأ،
┆ يمكنك تقديم حالتك على:\`\`\`
┆ 👉 *${ig}*
┆ 👉 ${asistencia}
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄ • • • ┄┄┄┄┄┄┄┄┄┄┄┄┄┄ ☹`
)
user.antispam++
return
}
if (user.antispam2 && isROwner) return
let time = global.db.data.users[m.sender].spam + 3000
if (new Date() - global.db.data.users[m.sender].spam < 3000) {
console.log('[ SPAM ]')
continue
}
global.db.data.users[m.sender].spam = new Date() * 1
}

let hl = _prefix
let adminMode = global.db.data.chats[m.chat].modoadmin
let gata = `${plugin.botAdmin || plugin.admin || plugin.group || plugin || noPrefix || hl || m.text.slice(0, 1) == hl || plugin.command}`
if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && gata) continue

if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) {
fail('owner', m, this)
continue
}
if (plugin.rowner && !isROwner) {
fail('rowner', m, this)
continue
}
if (plugin.owner && !isOwner) {
fail('owner', m, this)
continue
}
if (plugin.mods && !isMods) {
fail('mods', m, this)
continue
}
if (plugin.premium && !isPrems) {
fail('premium', m, this)
continue
}
if (plugin.group && !m.isGroup) {
fail('group', m, this)
continue
} else if (plugin.botAdmin && !isBotAdmin) {
fail('botAdmin', m, this)
continue
} else if (plugin.admin && !isAdmin) {
fail('admin', m, this)
continue
}
if (plugin.private && m.isGroup) {
fail('private', m, this)
continue
}
if (plugin.register == true && _user.registered == false) {
fail('unreg', m, this)
continue
}

m.isCommand = true
let xp = 'exp' in plugin ? parseInt(plugin.exp) : 10
if (xp > 2000) {
m.reply('Exp limit')
continue
}

if (!isPrems && plugin.money && global.db.data.users[m.sender].money < plugin.money * 1) {
this.sendMessage(
m.chat,
{
text: '🜲⃝☠️ *⧼ 𝑷𝑹𝑶𝑻𝑶𝑻𝒀𝑷𝑬 ⧽ v2*',
contextInfo: {
externalAdReply: {
mediaUrl: null,
mediaType: 1,
description: null,
title: '⧼ 𝑷𝑹𝑶𝑻𝑶𝑻𝒀𝑷𝑬 ⧽ v2',
body: ' 𖤐⃝🩸 BLACKLIGHT CORE ACTIVATED ',
previewType: 0,
thumbnail: global.gataImg,
sourceUrl: global.soporteGB
}
}
},
{quoted: m}
)
continue
}

m.exp += xp
if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
this.sendMessage(
m.chat,
{
text: `${lenguajeGB['smsCont7']()} *${usedPrefix}buy*`,
contextInfo: {
externalAdReply: {
mediaUrl: null,
mediaType: 1,
description: null,
title: '⧼ 𝑷𝑹𝑶𝑻𝑶𝑻𝒀𝑷𝑬 ⧽ v2',
body: ' 𖤐⃝🩸 BLACKLIGHT CORE ACTIVATED ',
previewType: 0,
thumbnail: global.gataImg,
sourceUrl: global.soporteGB
}
}
},
{quoted: m}
)
continue
}
if (plugin.level > _user.level) {
this.sendMessage(
m.chat,
{
text: `${lenguajeGB['smsCont9']()} *${plugin.level}* ${lenguajeGB['smsCont10']()} *${_user.level}* ${lenguajeGB['smsCont11']()} *${usedPrefix}nivel*`,
contextInfo: {
externalAdReply: {
mediaUrl: null,
mediaType: 1,
description: null,
title: '⧼ 𝑷𝑹𝑶𝑻𝑶𝑻𝒀𝑷𝑬 ⧽ v2',
body: ' 𖤐⃝🩸 BLACKLIGHT CORE ACTIVATED ',
previewType: 0,
thumbnail: global.gataImg,
sourceUrl: global.soporteGB
}
}
},
{quoted: m}
)
continue
}

let extra = {
match,
usedPrefix,
noPrefix,
_args,
args,
command,
text,
conn: this,
participants,
groupMetadata,
user,
bot,
isROwner,
isOwner,
isRAdmin,
isAdmin,
isBotAdmin,
isPrems,
chatUpdate,
__dirname: ___dirname,
__filename
}
try {
await plugin.call(this, m, extra)
if (!isPrems) m.limit = m.limit || plugin.limit || false
m.money = m.money || plugin.money || false
} catch (e) {
m.error = e
console.error(e)
if (e) {
let text = format(e) || 'Error desconocido'
for (let api in global.APIs) {
let key = global.APIs[api].key
if (key) text = text.replace(new RegExp(key, 'g'), 'Admin')
}
if (e.name)
for (let [jid] of global.owner.filter((number, _, isDeveloper) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
if (data.exists)
m.reply(
`${lenguajeGB['smsCont1']()}\n\n${lenguajeGB['smsCont2']()}\n*_${name}_*\n\n${lenguajeGB['smsCont3']()}\n*_${m.sender}_*\n\n${lenguajeGB['smsCont4']()}\n*_${m.text}_*\n\n${lenguajeGB['smsCont5']()}\n\`\`\`${format(e)}\`\`\`\n\n${lenguajeGB['smsCont6']()}`.trim(),
data.jid
)
}
m.reply(text)
}
} finally {
if (typeof plugin.after === 'function') {
try {
await plugin.after.call(this, m, extra)
} catch (e) {
console.error(e)
}
}
if (m.limit) m.reply(+m.limit + lenguajeGB.smsCont8())
}
if (m.money) m.reply(+m.money + ' 🜲⃝🩸 PROTO TYPE ')
break
}
} catch (e) {
console.error(e)
} finally {
if (opts['queque'] && m.text) {
const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
if (quequeIndex !== -1) this.msgqueque.splice(quequeIndex, 1)
}
let user,
stats = global.db.data.stats
if (m) {
let utente = global.db.data.users[m.sender]
if (utente.muto == true) {
let bang = m.key.id
let cancellazzione = m.key.participant
await conn.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: bang,
participant: cancellazzione
}
})
}
if (m.sender && (user = global.db.data.users[m.sender])) {
user.exp += m.exp
user.limit -= m.limit * 1
user.money -= m.money * 1
}

let stat
if (m.plugin) {
let now = +new Date()
if (m.plugin in stats) {
stat = stats[m.plugin]
if (!isNumber(stat.total)) stat.total = 1
if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
if (!isNumber(stat.last)) stat.last = now
if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
} else
stat = stats[m.plugin] = {
total: 1,
success: m.error != null ? 0 : 1,
last: now,
lastSuccess: m.error != null ? 0 : now
}
stat.total += 1
stat.last = now
if (m.error == null) {
stat.success += 1
stat.lastSuccess = now
}
}
}

try {
if (!opts['noprint']) await (await import('./core/print.js')).default(m, this)
} catch (e) {
console.log(m, m.quoted, e)
}
let settingsREAD = global.db.data.settings[this.user.jid] || {}
if (opts['autoread']) await this.readMessages([m.key])
if (settingsREAD.autoread2) await this.readMessages([m.key])
}
}

export async function participantsUpdate({id, participants, action}) {
if (opts['self']) return
if (this.isInit) return
if (global.db.data == null) await loadDatabase()
let chat = global.db.data.chats[id] || {}
let text = ''

// تم إزالة الترحيب التلقائي - تم نقله إلى أمر منفصل

switch (action) {
case 'promote':
case 'daradmin':
case 'darpoder':
text = chat.sPromote || this.spromote || conn.spromote || '@user is now Admin'
break
case 'demote':
case 'quitarpoder':
case 'quitaradmin':
if (!text) text = chat.sDemote || this.sdemote || conn.sdemote || '@user is no longer Admin'
text = text.replace('@user', '@' + participants[0].split('@')[0])
if (chat.detect) break
default:
break
}

if (text) {
await this.sendMessage(id, { text, mentions: this.parseMention(text) })
}
}

export async function groupsUpdate(groupsUpdate) {
if (opts['self'] && !isOwner && !isROwner) return
for (const groupUpdate of groupsUpdate) {
const id = groupUpdate.id
if (!id) continue
let chats = global.db.data?.chats?.[id],
text = ''
if (!chats?.detect) continue
if (!text) continue
await this.sendMessage(id, {text, mentions: this.parseMention(text)})
}
}

export async function callUpdate(callUpdate) {
let isAnticall = global.db.data.settings[this.user.jid].antiCall
if (!isAnticall) return
for (let nk of callUpdate) {
if (nk.isGroup == false) {
if (nk.status == 'offer') {
let callmsg = await this.reply(
nk.from,
`${lenguajeGB['smsCont15']()} *@${nk.from.split('@')[0]}*, ${nk.isVideo ? lenguajeGB.smsCont16() : lenguajeGB.smsCont17()} ${lenguajeGB['smsCont18']()}`,
false,
{mentions: [nk.from]}
)
await this.updateBlockStatus(nk.from, 'block')
}
}
}
}

export async function deleteUpdate(message) {
try {
const {fromMe, id, participant, remoteJid} = message
if (fromMe) return
let msg = this.serializeM(this.loadMessage(id))
console.log(msg)
let chat = global.db.data.chats[msg?.chat] || {}
if (!chat?.delete) return
if (!msg) return
let isGroup = remoteJid.endsWith('@g.us')
let isPrivate = !isGroup && remoteJid.endsWith('@s.whatsapp.net')
if (!isGroup && !isPrivate) return
const antideleteMessage = `*╭━━⬣ ANTI-DELETE ⬣━━ 🐱*
*┃📑 Mensaje eliminado por:* @${participant.split`@`[0]}
*┃💬 Mensaje:* ${msg.text}
*╰━━━⬣ ANTI-DELETE ⬣━━╯*`.trim()
await this.sendMessage(msg.chat, {text: antideleteMessage, mentions: [participant]}, {quoted: msg})
this.copyNForward(msg.chat, msg).catch((e) => console.log(e, msg))
} catch (e) {
console.error(e)
}
}

global.dfail = async (type, m, conn) => {
  let msg = {
    rowner: '🜲⃝☠️ *آسف~! هذه الوظيفة مخصصة فقط للمطور* 🔥',
    owner: '🜲⃝☠️ *هذا الأمر متاح فقط للمطور* ⚔️',
    mods: '🜲⃝☠️ *هذا الأمر محجوز فقط لكبار القادة* 💀',
    premium: '🜲⃝☠️ *هذه الميزة متاحة فقط للمحاربين المتميزين (Premium)* ✨\n\n🔥 *للحصول على الترقية:*\n> *.شراءبريميوم 2 ايام*',
    group: '🜲⃝☠️ *هذا الأمر يعمل فقط داخل الجروبات* 👥',
    private: '🜲⃝☠️ *هذا الأمر مخصص للمحادثات الخاصة فقط* 💌',
    admin: '🜲⃝☠️ *فقط المشرفين يمكنهم استخدام هذا الأمر* 🛡️',
    botAdmin: '🜲⃝☠️ *يجب أن تكون لي صلاحيات المشرف لأمرك هذا.*\n\n⚔️ *امنحني رتبة مشرف لتنفيذ الأوامر*',
    unreg: `🜲⃝☠️ *يبدو أنك لست ضمن قواتي المسجلة بعد* 😾\n⚔️ *سجل بياناتك باستخدام:*\n */تسجيل الاسم.العمر*\n\n🔥 *مثال:*\n */تسجيل بروتوتايب.1000*`,
    restrict: '🜲⃝☠️ *هذه الميزة معطلة حالياً* 💤'
  }[type]

  if (!msg) return

  try {
    const imageUrl = ''
    const response = await fetch(imageUrl)
    const imageBuffer = Buffer.from(await response.arrayBuffer())
    await conn.sendMessage(m.chat, {
      text: msg,
      contextInfo: {
        externalAdReply: {
          title: "🜲⃝☠️ ⧼ 𝑷𝑹𝑶𝑻𝑶𝑻𝒀𝑷𝑬 ⧽ v2 🜲⃝☠️",
          body: "⚝ 𖤐⃝🩸 BLACKLIGHT CORE ACTIVATED ⚝",
          thumbnail: imageBuffer,
          mediaType: 1,
          mediaUrl: "https://whatsapp.com/channel/0029VbCJtCILI8YQz9VFQQ2w",
          sourceUrl: "https://whatsapp.com/channel/0029VbCJtCILI8YQz9VFQQ2w"
        }
      }
    }, { quoted: m })
  } catch (err) {
    return conn.sendMessage(m.chat, { text: msg }, { quoted: m })
  }
}