// Código creado por WillZek wa.me/50557865603
import fs from 'fs';
import path from 'path';
let handler = async (m, { conn, usedPrefix }) => {
let who;
// Verificamos si se menciona a alguien o se cita un mensaje
if (m.mentionedJid && m.mentionedJid.length > 0) {
who = m.mentionedJid[0]; // Si hay mención, usamos esa
} else if (m.quoted) {
who = m.quoted.sender; // Si se cita un mensaje, usamos el emisor de ese mensaje
} else {
who = m.sender; // En caso contrario, usamos el emisor
}
let name = conn.getName(who); // Nombre de la persona mencionada o del emisor
let name2 = conn.getName(m.sender); // Nombre del usuario que envía el comando
m.react('🫦');
// Comprobamos si el comando es .precios1
if (m.body === '.precios1') {
// Mensaje que se enviará
let str = `\`${name2}\` pidió precios.`;
// Reemplaza la URL con la imagen que deseas enviar
const imageUrl = 'https://i.ibb.co/TcTRpHW/file.jpg';
// Enviamos el mensaje con la imagen y el mensaje correspondiente
await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: str }, { quoted: m });
}
}
handler.help = ['precios1'];
handler.tags = ['info'];
handler.command = ['precios1'];
handler.group = true;
export default handler;