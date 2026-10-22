import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

global.owner = [
'201108056061', 
]

global.mods = []
global.prems = []

global.prototypeJadibts = true

global.isBaileysFail = false

global.obtenerQrWeb = 0
global.keepAliveRender = 0

global.botNumberCode = ''
global.confirmCode = ''
global.baileys = '@whiskeysockets/baileys'
global.apis = 'https://api.delirius.store'

global.APIs = {
lolhuman: {url: 'https://api.lolhuman.xyz/api', key: 'PrototypeKey'},
stellar: {url: 'https://api.stellarwa.xyz', key: 'Prototype'},
skizo: {url: 'https://skizo.tech/api', key: 'Prototype'},
alyachan: {url: 'https://api.alyachan.dev/api', key: null},
exonity: {url: 'https://exonity.tech/api', key: 'Prototype'},
ryzendesu: {url: 'https://api.ryzendesu.vip/api', key: null},
neoxr: {url: 'https://api.neoxr.eu/api', key: 'Prototype'},
davidcyriltech: {url: 'https://api.davidcyriltech.my.id', key: null},
dorratz: {url: 'https://api.dorratz.com', key: null},
siputzx: {url: 'https://api.siputzx.my.id/api', key: null},
vreden: {url: 'https://api.vreden.web.id/api', key: null},
fgmods: {url: 'https://api.fgmods.xyz/api', key: 'prototype'},
popcat: {url: 'https://api.popcat.xyz', key: null}
}

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

global.official = [
['593968263524', 'PROTOTYPE Dev 💻', 1],
['573147616444', 'Official Developer 💻', 1],
['5521989092076', 'Official Developer 💻', 1]
]

global.mail = ''
global.desc = ''
global.desc2 = ''
global.country = ''

global.packname = '╭ PROTOTYPE-MD\n┃\n┃ Telegram: @prototype\n┃\n┃ YouTube: @prototype\n┃\n┃ Instagram: @prototype\n╰━━━━━━━━•'
global.author = '╭ PROTOTYPE ✓\n┃\n┃ GitHub: Prototype\n┃\n┃ Advanced WhatsApp Bot\n┃\n┃ Support\n┃ PayPal: @Prototype\n╰━━━━━━━━•'

global.vs = '2.0.0'
global.vsJB = '5.0 (Beta)'
global.gt = 'PROTOTYPE-MD'
global.imagen = fs.readFileSync('./M.jpg')

global.rg = '╰⊱✅⊱ *RESULT* ⊱✅⊱╮\n\n'
global.resultado = rg

global.ag = '╰⊱⚠️⊱ *WARNING* ⊱⚠️⊱╮\n\n'
global.advertencia = ag

global.iig = '╰⊱❕⊱ *INFORMATION* ⊱⊱╮\n\n'
global.informacion = iig

global.fg = '╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n'
global.fallo = fg

global.mg = '╰⊱❗️⊱ *WRONG USE* ⊱❗️⊱╮\n\n'
global.mal = mg

global.eeg = '╰⊱📩⊱ *REPORT* ⊱📩⊱╮\n\n'
global.envio = eeg

global.eg = '╰⊱💚⊱ *SUCCESS* ⊱💚⊱╮\n\n'
global.exito = eg

global.wm = 'PROTOTYPE-MD : PRO'
global.igfg = 'PROTOTYPE-MD'
global.nomorown = '593993684821'
global.pdoc = [
'application/vnd.openxmlformats-officedocument.presentationml.presentation',
'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'application/vnd.ms-excel',
'application/msword',
'application/pdf',
'text/rtf'
]

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]

global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '

global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'

global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'

global.comienzo = '• • ◕◕════'
global.fin = ' • •'

global.botdate = `⫹⫺ Date : ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`
global.bottime = `TIME : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`
global.fgif = {
key: {
participant: '0@s.whatsapp.net'
},
message: {
videoMessage: {
title: wm,
h: 'Hmm',
seconds: '999999999',
gifPlayback: 'true',
caption: bottime,
}
}
}

global.multiplier = 85

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '🧬 Level : Level',
limit: lenguajeGB.eDiamante(),
exp: lenguajeGB.eExp(),
bank: '🏦 Bank : Bank',
diamond: lenguajeGB.eDiamantePlus(),
health: '❤️ Health : Health',
kyubi: lenguajeGB.eMagia(),
joincount: lenguajeGB.eToken(),
emerald: lenguajeGB.eEsmeralda(),
stamina: lenguajeGB.eEnergia(),
role: '💪 Role',
premium: '🎟️ Premium',
pointxp: '📧 Point Xp : Point Xp',
gold: lenguajeGB.eOro(),
trash: lenguajeGB.eBasura(),
crystal: '🔮 Crystal : Crystal',
intelligence: '🧠 Intelligence : Intelligence',
string: lenguajeGB.eCuerda(),
keygold: '🔑 Key Gold : Key Gold',
keyiron: '🗝️ Key Iron : Key Iron',
emas: lenguajeGB.ePinata(),
fishingrod: '🎣 Fishing Rod : Fishing Rod',
gems: '🍀 Gems : Gems',
magicwand: '⚕️ Magic Wand : Magic Wand',
mana: '🪄 Spell : Spell',
agility: '🤸‍♂️ Agility : Agility',
darkcrystal: '♠️ Dark Glass : Dark Glass',
iron: lenguajeGB.eHierro(),
rock: lenguajeGB.eRoca(),
potion: lenguajeGB.ePocion(),
superior: '💼 Superior : Superior',
robo: '🚔 Robo : Robo',
upgrader: '🧰 Upgrade : Upgrade',
wood: lenguajeGB.eMadera(),
strength: '🦹‍ ♀️ Strength : Strength',
arc: '🏹 Arc : Arc',
armor: '🥼 Armor : Armor',
bow: '🏹 Super Bow : Super Bow',
pickaxe: '⛏️ Peak : Peak',
sword: lenguajeGB.eEspada(),
common: lenguajeGB.eCComun(),
uncoommon: lenguajeGB.ePComun(),
mythic: lenguajeGB.eCMistica(),
legendary: lenguajeGB.eClegendaria(),
petFood: lenguajeGB.eAMascots(),
pet: lenguajeGB.eCMascota(),
bibitanggur: lenguajeGB.eSUva(),
bibitapel: lenguajeGB.eSManzana(),
bibitjeruk: lenguajeGB.eSNaranja(),
bibitmangga: lenguajeGB.eSMango(),
bibitpisang: lenguajeGB.eSPlatano(),
ayam: '🐓 Chicken : Chicken',
babi: '🐖 Pig : Pig',
Jabali: '🐗 Wild Boar : Wild Boar',
bull: '🐃 Bull : Bull',
buaya: '🐊 Alligator : Alligator',
cat: lenguajeGB.eGato(),
centaur: lenguajeGB.eCentauro(),
chicken: '🐓 Chicken : Chicken',
cow: '🐄 Cow : Cow',
dog: lenguajeGB.ePerro(),
dragon: lenguajeGB.eDragon(),
elephant: '🐘 Elephant : Elephant',
fox: lenguajeGB.eZorro(),
giraffe: '🦒 Giraffe : Giraffe',
griffin: lenguajeGB.eAve(),
horse: lenguajeGB.eCaballo(),
kambing: '🐐 Goat : Goat',
kerbau: '🐃 Buffalo : Buffalo',
lion: '🦁 Lion : Lion',
money: lenguajeGB.eGataCoins(),
monyet: '🐒 Monkey : Monkey',
panda: '🐼 Panda',
snake: '🐍 Snake : Snake',
phonix: '🕊️ Phoenix : Phoenix',
rhinoceros: '🦏 Rhinoceros : Rhinoceros',
wolf: lenguajeGB.eLobo(),
tiger: '🐅 Tiger : Tiger',
cumi: '🦑 Squid : Squid',
udang: '🦐 Shrimp : Shrimp',
ikan: '🐟 Fish : Fish',
fideos: '🍝 Noodles : Noodles',
ramuan: '🧪 Ingredients : Ingredients',
knife: '🔪 Knife : Knife'
}
let results = Object.keys(emot)
.map((v) => [v, new RegExp(v, 'gi')])
.filter((v) => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}
}

global.rpgg = {
emoticon(string) {
string = string.toLowerCase()
let emott = {
level: '🧬',
limit: '💎',
exp: '⚡',
bank: '🏦',
diamond: '💎+',
health: '❤️',
kyubi: '🌀',
joincount: '🪙',
emerald: '💚',
stamina: '✨',
role: '💪',
premium: '🎟️',
pointxp: '📧',
gold: '👑',
trash: '🗑',
crystal: '🔮',
intelligence: '🧠',
string: '🕸️',
keygold: '🔑',
keyiron: '🗝️',
emas: '🪅',
fishingrod: '🎣',
gems: '🍀',
magicwand: '⚕️',
mana: '🪄',
agility: '🤸‍♂️',
darkcrystal: '♠️',
iron: '⛓️',
rock: '🪨',
potion: '🥤',
superior: '💼',
robo: '🚔',
upgrader: '🧰',
wood: '🪵',
strength: '🦹‍ ♀️',
arc: '🏹',
armor: '🥼',
bow: '🏹',
pickaxe: '⛏️',
sword: '⚔️',
common: '📦',
uncoommon: '🥡',
mythic: '🗳️',
legendary: '🎁',
petFood: '🍖',
pet: '🍱',
bibitanggur: '🍇',
bibitapel: '🍎',
bibitjeruk: '🍊',
bibitmangga: '🥭',
bibitpisang: '🍌',
ayam: '🐓',
babi: '🐖',
Jabali: '🐗',
bull: '🐃',
buaya: '🐊',
cat: '🐈',
centaur: '🐐',
chicken: '🐓',
cow: '🐄',
dog: '🐕',
dragon: '🐉',
elephant: '🐘',
fox: '🦊',
giraffe: '🦒',
griffin: '🦅',
horse: '🐎',
kambing: '🐐',
kerbau: '🐃',
lion: '🦁',
money: '🐱',
monyet: '🐒',
panda: '🐼',
snake: '🐍',
phonix: '🕊️',
rhinoceros: '🦏',
wolf: '🐺',
tiger: '🐅',
cumi: '🦑',
udang: '🦐',
ikan: '🐟',
fideos: '🍝',
ramuan: '🧪',
knife: '🔪'
}
let results = Object.keys(emott)
.map((v) => [v, new RegExp(v, 'gi')])
.filter((v) => v[1].test(string))
if (!results.length) return ''
else return emott[results[0][0]]
}
}

global.rpgshop = {
emoticon(string) {
string = string.toLowerCase()
let emottt = {
exp: lenguajeGB.eExp(),
limit: lenguajeGB.eDiamante(),
diamond: lenguajeGB.eDiamantePlus(),
joincount: lenguajeGB.eToken(),
emerald: lenguajeGB.eEsmeralda(),
berlian: lenguajeGB.eJoya(),
kyubi: lenguajeGB.eMagia(),
gold: lenguajeGB.eOro(),
money: lenguajeGB.eGataCoins(),
tiketcoin: lenguajeGB.eGataTickers(),
stamina: lenguajeGB.eEnergia(),
potion: lenguajeGB.ePocion(),
aqua: lenguajeGB.eAgua(),
trash: lenguajeGB.eBasura(),
wood: lenguajeGB.eMadera(),
rock: lenguajeGB.eRoca(),
batu: lenguajeGB.ePiedra(),
string: lenguajeGB.eCuerda(),
iron: lenguajeGB.eHierro(),
coal: lenguajeGB.eCarbon(),
botol: lenguajeGB.eBotella(),
kaleng: lenguajeGB.eLata(),
kardus: lenguajeGB.eCarton(),
eleksirb: lenguajeGB.eEletric(),
emasbatang: lenguajeGB.eBarraOro(),
emasbiasa: lenguajeGB.eOroComun(),
rubah: lenguajeGB.eZorroG(),
sampah: lenguajeGB.eBasuraG(),
serigala: lenguajeGB.eLoboG(),
kayu: lenguajeGB.eMaderaG(),
sword: lenguajeGB.eEspada(),
umpan: lenguajeGB.eCarnada(),
healtmonster: lenguajeGB.eBillete(),
emas: lenguajeGB.ePinata(),
pancingan: lenguajeGB.eGancho(),
pancing: lenguajeGB.eCanaPescar(),
common: lenguajeGB.eCComun(),
uncoommon: lenguajeGB.ePComun(),
mythic: lenguajeGB.eCMistica(),
pet: lenguajeGB.eCMascota(),
gardenboxs: lenguajeGB.eCJardineria(),
legendary: lenguajeGB.eClegendaria(),
anggur: lenguajeGB.eUva(),
apel: lenguajeGB.eManzana(),
jeruk: lenguajeGB.eNaranja(),
mangga: lenguajeGB.eMango(),
pisang: lenguajeGB.ePlatano(),
bibitanggur: lenguajeGB.eSUva(),
bibitapel: lenguajeGB.eSManzana(),
bibitjeruk: lenguajeGB.eSNaranja(),
bibitmangga: lenguajeGB.eSMango(),
bibitpisang: lenguajeGB.eSPlatano(),
centaur: lenguajeGB.eCentauro(),
griffin: lenguajeGB.eAve(),
kucing: lenguajeGB.eGato(),
naga: lenguajeGB.eDragon(),
fox: lenguajeGB.eZorro(),
kuda: lenguajeGB.eCaballo(),
phonix: lenguajeGB.eFenix(),
wolf: lenguajeGB.eLobo(),
anjing: lenguajeGB.ePerro(),
petFood: lenguajeGB.eAMascots(),
makanancentaur: lenguajeGB.eCCentauro(),
makanangriffin: lenguajeGB.eCAve(),
makanankyubi: lenguajeGB.eCMagica(),
makanannaga: lenguajeGB.eCDragon(),
makananpet: lenguajeGB.eACaballo(),
makananphonix: lenguajeGB.eCFenix()
}
let results = Object.keys(emottt)
.map((v) => [v, new RegExp(v, 'gi')])
.filter((v) => v[1].test(string))
if (!results.length) return ''
else return emottt[results[0][0]]
}
}

global.rpgshopp = {
emoticon(string) {
string = string.toLowerCase()
let emotttt = {
exp: '⚡',
limit: '💎',
diamond: '💎+',
joincount: '🪙',
emerald: '💚',
berlian: '♦️',
kyubi: '🌀',
gold: '👑',
money: '🐱',
tiketcoin: '🎫',
stamina: '✨',
potion: '🥤',
aqua: '💧',
trash: '🗑',
wood: '🪵',
rock: '🪨',
batu: '🥌',
string: '🕸️',
iron: '⛓️',
coal: '⚱️',
botol: '🍶',
kaleng: '🥫',
kardus: '🪧',
eleksirb: '💡',
emasbatang: '〽️',
emasbiasa: '🧭',
rubah: '🦊🌫️',
sampah: '🗑🌫️',
serigala: '🐺🌫️',
kayu: '🛷',
sword: '⚔️',
umpan: '🪱',
healtmonster: '💵',
emas: '🪅',
pancingan: '🪝',
pancing: '🎣',
common: '📦',
uncoommon: '🥡',
mythic: '🗳️',
pet: '📫',
gardenboxs: '💐',
legendary: '🎁',
anggur: '🍇',
apel: '🍎',
jeruk: '🍊',
mangga: '🥭',
pisang: '🍌',
bibitanggur: '🌾🍇',
bibitapel: '🌾🍎',
bibitjeruk: '🌾🍊',
bibitmangga: '🌾🥭',
bibitpisang: '🌾🍌',
centaur: '🐐',
griffin: '🦅',
kucing: '🐈',
naga: '🐉',
fox: '🦊',
kuda: '🐎',
phonix: '🕊️',
wolf: '🐺',
anjing: '🐶',
petFood: '🍖',
makanancentaur: '🐐🥩',
makanangriffin: '🦅🥩',
makanankyubi: '🌀🥩',
makanannaga: '🐉🥩',
makananpet: '🍱🥩',
makananphonix: '🕊️🥩'
}
let results = Object.keys(emotttt)
.map((v) => [v, new RegExp(v, 'gi')])
.filter((v) => v[1].test(string))
if (!results.length) return ''
else return emotttt[results[0][0]]
}
}

// ========== ✅ القنوات التي يتابعها البوت الفرعي ==========
// تم تعديلها لقناتين فقط
global.ch = {
  ch1: '120363426261588703@newsletter',  // ⧼ 𝑷𝑹𝑶𝑻𝑶𝑻𝒀𝑷𝑬 ⧽Xcodes
  ch2: '120363408060822145@newsletter'   // ⧼ 𝑷𝑹𝑶𝑻𝑶𝑻𝒀𝑷𝑬 ⧽╳ 𝗕𝗢𝗧𝗦 •
}
// =====================================================

global.yt = 'https://youtube.com/@prototype'
global.ig = 'https://www.instagram.com/prototype'
global.md = 'https://github.com/PROTOTYPE/PROTOTYPE-MD'
global.fb = 'https://www.facebook.com/groups/prototype'
global.tk = 'https://www.tiktok.com/@prototype'
global.ths = 'https://www.threads.net/@prototype'
global.paypal = 'https://paypal.me/Prototype'
global.asistencia = 'https://wa.me/message/xxxxxxxxx'
global.all = 'https://www.atom.bio/Prototype'
global.canal1 = 'https://whatsapp.com/channel/xxxxxxxxx'
global.canal2 = 'https://whatsapp.com/channel/xxxxxxxxx'
global.canal3 = 'https://whatsapp.com/channel/xxxxxxxxx'
global.canal4 = 'https://t.me/prototype'

global.soporteGB = 'https://chat.whatsapp.com/xxxxxxxxx'
global.grupo1 = 'https://chat.whatsapp.com/xxxxxxxxx'
global.grupo2 = 'https://chat.whatsapp.com/xxxxxxxxx'
global.grupo_collab1 = 'https://chat.whatsapp.com/xxxxxxxxx'
global.grupo_collab2 = 'https://chat.whatsapp.com/xxxxxxxxx'
global.grupo_collab3 = 'https://chat.whatsapp.com/xxxxxxxxx'
global.grupo_collab4 = 'https://chat.whatsapp.com/xxxxxxxxx'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)
})