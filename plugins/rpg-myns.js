import { createHash } from 'crypto';
import fs from 'fs';

let handler = async function (m, { conn }) {
  try {
    let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6);

    let who = m.mentionedJid && m.mentionedJid[0] 
      ? m.mentionedJid[0] 
      : m.fromMe 
        ? conn.user.jid 
        : m.sender;

    let txt = `*\`N Ú M E R O - S E R I A L\`*\n\n🆔 *${sn}*\n`;

    let userAvatar = await conn.profilePictureUrl(who, 'image').catch(() => 'https://i.ibb.co/QjgtQnR/file.jpg');

    const security = await new canvafy.Security()
      .setAvatar(userAvatar)
      .setBackground("image", "https://i.ibb.co/QjgtQnR/file.jpg")
      .setCreatedTimestamp(Date.now())
      .setSuspectTimestamp(31536000000)
      .setBorder("#f0f0f0")
      .setLocale("es")
      .setAvatarBorder("#f0f0f0")
      .setOverlayOpacity(0.9)
      .build();

   /* if (Buffer.isBuffer(security)) {
      await conn.sendFile(m.chat, security, 'security.png', txt, m, null, fake);
    } else {
      const securityImagePath = './temp/security-image.png';
      await fs.writeFile(securityImagePath, security);

      await conn.sendFile(m.chat, securityImagePath, 'security.png', txt, m, null, fake);/*
    }
  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, 'Ocurrió un error al generar el número de serie.', m);
  }
};

handler.help = ['sn'];
handler.tags = ['rpg'];
handler.command = ['nserie', 'sn', 'mysn']; 
handler.register = true;

export default handler;