/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '5ec207d553',
}

// Other
global.owner = ['558287515844','558287515844']
global.premium = ['558287515844']
global.packname = 'ｌｏｆｙ- ｂｏｔ'
global.author = 'ウェンデル'
global.sessionName = 'session'
global.prefix = '/'
global.sp = '⭔'
global.mess = {
    success: '✓ Pronto',
    admin: 'So o adm pode usar 🤨!',
    botAdmin: 'O bot deve ser administrador primeiro🥺!',
    owner: 'So meu dono pode usar',
    group: 'Apenas para grupos!',
    private: 'So no pv 😳!',
    bot: 'Oxi 🤨',
    wait: 'Aguarde...',
    endLimit: 'Seu limite diário expirou, o limite será redefinido a cada 12 horas',
}
global.limitawal = {
    premium: 20,
    free: 10
}
global.thumb = fs.readFileSync('./lib/menu.jpeg')
global.visoka = { url: 'https://telegra.ph/file/836db4b72230f186a2ac3.gif' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
