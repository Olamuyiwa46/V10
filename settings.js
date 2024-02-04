//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: Olamuyiwa46" //ur github or insta name
global.location = "Nigeria, Lagos, Abuja" //ur location

//new
global.botname = '🤪𝑪𝑨𝑳𝑳 𝑴𝑯𝑬 𝑩𝑼𝑴𝑩𝑼𝑴🤪' //ur bot name
global.ownernumber = '2349010895477' //ur owner number
global.ownername = '🤪𝑪𝑨𝑳𝑳 𝑴𝑯𝑬 𝑩𝑼𝑴𝑩𝑼𝑴🤪' //ur owner name
global.websitex = "https://chat.whatsapp.com/EduR0psW2l41eonnvegRuk"
global.wagc = "https://chat.whatsapp.com/EduR0psW2l41eonnvegRuk"
global.themeemoji = '🤪'
global.wm = "𝑪𝑨𝑳𝑳 𝑴𝑯𝑬 𝑩𝑼𝑴𝑩𝑼𝑴 Inc."
global.botscript = 'https://github.com/Ednut001/ednutBot-MD10' //script link
global.packname = "Sticker By"
global.author = "🤪𝑪𝑨𝑳𝑳 𝑴𝑯𝑬 𝑩𝑼𝑴𝑩𝑼𝑴🤪"
global.creator = "2349010895477@s.whatsapp.net"
global.xprefix = '?'
global.premium = ["2349010895477"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v2' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done bruh✓',
    error: 'Error!',
    success: 'made by a legend named ednut🦄!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
