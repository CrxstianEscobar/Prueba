import { createHash } from 'crypto'
import fs from 'fs'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) return m.reply(`[ ℹ️ ] *Usted ya esta registrado.*\nPara registrarse de nuevo borre su registro con este comando.\n\n_${usedPrefix}unreg *<Numero de serie>*_`)
  if (!Reg.test(text)) return m.reply(`🤖 FORMATO INCORRECTO.\n\nUSO DEL COMANDO: *${usedPrefix + command} nombre.edad*\nEjemplo : *${usedPrefix + command} ${name2}.16*`)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply('🌙 El NOMBRE NO PUEDE ESTAR VACÍO.')
  if (!age) return m.reply('🌙 LA EDAD NO PUEDE ESTAR VACÍA.')
  if (name.length >= 100) return m.reply('🥷🏻 El NOMBRE ESTA MUY LARGO.' )
  age = parseInt(age)
  if (age > 100) return m.reply('👴🏻 WOW EL ABUELO QUIERE JUGAR AL BOT.')
  if (age < 5) return m.reply('🚼 EL BEBE QUIERE JUGAR JAJA. ')
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)
  let img = await (await fetch(`https://i.ibb.co/QjgtQnR/file.jpg`)).buffer()
  let txt = `\`𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊 - 𝙎𝙃𝘼𝘿𝙊𝙒\`\n\n`
      txt += `✧ *Nombre:* ${name}\n`
      txt += `✧ *Edad:* ${age} años\n`
      txt += `✧ *Serie:* ${sn}`
      txt += `> Escribe *${usedPrefix}profile* para ver tu perfil.`
await conn.sendAi(m.chat, botname, textbot, txt, img, img, canal, m)
await m.react('✅')
}
handler.help = ['reg'].map(v => v + ' *<nombre.edad>*')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler