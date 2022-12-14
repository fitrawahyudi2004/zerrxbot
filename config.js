

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// Wajib diisi ya kak!, kalo ga punya biarin aja, biar ada creditsnya :v
global.sig = 'https://www.instagram.com/fitra_wahyudi_'
global.sgh = 'https://github.com/fitrawahyudi2004'
global.sgc = 'https://chat.whatsapp.com/FF1Bd1U0FHu42rfz6uplbn'
global.sdc = " "
global.snh = 'https://nhentai.net/g/365296/'

/*============== PAYMENT ==============*/
global.pdana = '081262166032'
global.povo = '081262166032'
global.pgopay = '081262166032'
global.ppulsa = '081262166032'
global.ppulsa2 = '082164771271'
global.psaweria = '-'

/*============== NOMOR ==============*/
global.nomorbot = '6281377468079'
global.nomorown = '6281262166032'
global.namebot = 'Zerrx Botz'
global.nameown = 'Fitra Wahyudi'


/*============== STAFF ==============*/
global.owner = [
  ['6281262166032'],
  ['6281262166032', 'Fitra Wahyudi', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'APIKEY',
  'https://anabotofc.herokuapp.com/': 'APIKEY',
  'https://api.lolhuman.xyz': 'APIKEY',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'APIKEY',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'APIKEY',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/
global.wm = '                ??? Zerrx Botz ???' //Main Watermark
global.wm2 = 'Zerrx'
global.wm3 = 'Botz'
global.botdate = `?????? ????????????????: ${week} ${date}`
global.bottime = `???? ???? ???? ???? : ${wktuwib}`
global.titlebot = '???? ??? ???????????? Whatsapp ????????'
global.author = global.wm


/*============== LOGO ==============*/
global.thumb = 'https://i.postimg.cc/0yw4rS7y/ss.png' //Main Thumbnail
global.thumb2 = 'https://i.postimg.cc/0yw4rS7y/ss.png'
global.thumbbc = 'https://i.postimg.cc/Zqx80YRQ/1.webp' //For broadcast
global.giflogo = 'https://i.postimg.cc/Zqx80YRQ/1.webp'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

/*============== TEXT ==============*/
global.wait = '```????????????????????????????????????Loading...```'
global.eror = '```404 error```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://i.postimg.cc/Zqx80YRQ/1.webp'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = '?????????????????????' //top
global.dmenub = '??????' //body
global.dmenub2 = '???' //body for info cmd on Default menu
global.dmenuf = '????????????????????????????????????' //footer

// COMMAND MENU
global.dashmenu = '?????????????????????????????? *DASHBOARD* ??????????????????????????????'
global.cmenut = '????????????????????????'                       //top
global.cmenuh = '?????????????????????'                        //header
global.cmenub = '?????? '                            //body
global.cmenuf = '???????????????????????????????????????\n'                //footer
global.cmenua = '\n??? ???????????????????????????????????????????????????????????????????????????????????????????????? ???\n     ' //after
global.pmenus = '???'                              //pembatas menu selector

global.htki = '?????????????????????' // Hiasan Titile (KIRI)
global.htka = '?????????????????????' // Hiasan Title  (KANAN)
global.lopr = '???' //LOGO PREMIUM ON MENU.JS
global.lolm = '???' //LOGO FREE ON MENU.JS
global.htjava = '??????'    //hiasan Doang :v
global.hsquere = ['???','???','??????']

/*============== STICKER WM ==============*/
global.stickpack = '.'
global.stickauth = `??????\nZ\ne\nr\nr\nx\n-\nB\nO\nT\n???\n\n?????? Whatsapp BOT\nwa.me/${global.nomorbot}`

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '????',
      limit: '????',
      health: '??????',
      exp: '???',
      money: '????',
      bank: '????',
      potion: '????',
      diamond: '????',
      common: '????',
      uncommon: '???????',
      mythic: '????',
      legendary: '???????',
      superior: '????',
      pet: '????',
      trash: '????',
      armor: '????',
      sword: '??????',
      pickaxe: '??????',
      fishingrod: '????',
      wood: '????',
      rock: '????',
      string: '???????',
      horse: '????',
      cat: '????',
      dog: '????',
      fox: '????',
      petFood: '????',
      iron: '??????',
      gold: '????',
      emerald: '??????',
      upgrader: '????'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
