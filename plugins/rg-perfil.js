import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
var handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => imagen1)
let { premium, level, cookies, exp, lastclaim, registered, regTime, age, role } = global.db.data.users[m.sender]
let username = conn.getName(who)
let noprem = `
 *PERFIL DE USUARIO*

☁️ *Nombre:* ${username}
💥 *Tag:* @${who.replace(/@.+/, '')}
🌀 *Registrado:* ${registered ? '✅': '❌'}

👑 *RECURSOS*

💥 *Nivel:* ${level}
💫 *Experiencia:* ${exp}
✨️ *Rango:* ${role}

💖 *Premium:* ${premium ? '✅': '❌'}
`.trim()
let prem = `╭──⪩ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ⪨
│⧼👤⧽ *ᴜsᴜᴀʀɪᴏ:* 「${username}」
│⧼💌⧽ *ʀᴇɢɪsᴛʀᴀᴅᴏ:* ${registered ? '✅': '❌'}
│⧼🔱⧽ *ʀᴏʟ:* Vip 👑
╰───⪨

╭────⪩ 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒 ⪨
│⧼🔰⧽ *ɴɪᴠᴇʟ:* ${level}
│⧼💫⧽ *ᴇxᴘᴇʀɪᴇɴᴄɪᴀ:* ${exp}
│⧼⚜️⧽ *ʀᴀɴɢᴏ:* ${role}
╰───⪨ Sһᥲძ᥆ᥕ B᥆𝗍 ⪩`.trim()
conn.sendFile(m.chat, pp, 'perfil.jpg', `${premium ? prem.trim() : noprem.trim()}`, m, rcanal, { mentions: [who] })
}
handler.help = ['profile']
handler.register = true
handler.tags = ['rg']
handler.command = ['profile', 'perfil']
export default handler