const { makeWASocket, downloadMediaMessage } = require("@whiskeysockets/baileys");

async function setupAntidelete(sock) {
    sock.ev.on("message-delete", async (msg) => {
        try {
            const chatId = msg.remoteJid;
            const messageId = msg.id;
            const deleter = msg.participant || chatId; // کاربری که پیام را حذف کرده است

            // شناسایی آی‌دی ربات
            const botJid = sock.user.id.split(":")[0] + "@s.whatsapp.net";
            if (deleter === botJid) return; // اگر پیام از طرف خود ربات حذف شده، نادیده گرفته شود

            // دریافت پیام حذف‌شده
            const deletedMessage = await sock.loadMessage(chatId, messageId).catch(() => null);
            if (!deletedMessage) return;

            // اطلاعات پیام حذف‌شده
            const sender = deletedMessage.key.participant || deletedMessage.key.remoteJid;
            const messageType = Object.keys(deletedMessage.message)[0];

            let messageContent = `🚨 *پیامی حذف شد!*\n\n`;
            messageContent += `👤 *حذف‌کننده:* @${deleter.split("@")[0]}\n`;
            messageContent += `📩 *فرستنده:* @${sender.split("@")[0]}\n`;

            // بررسی نوع پیام و ارسال مجدد آن
            if (messageType === "conversation" || messageType === "extendedTextMessage") {
                // پیام متنی
                const text = deletedMessage.message.conversation || deletedMessage.message.extendedTextMessage?.text;
                messageContent += `📝 *متن پیام:* ${text}\n`;
                await sock.sendMessage(chatId, { text: messageContent, mentions: [deleter, sender] });
            } 
            else if (messageType.includes("Message")) {
                // رسانه‌ای (عکس، ویدیو، استیکر، سند و ...)
                const buffer = await downloadMediaMessage(deletedMessage, "buffer");
                let caption = "";

                if (messageType === "imageMessage") caption = deletedMessage.message.imageMessage?.caption || "بدون کپشن";
                if (messageType === "videoMessage") caption = deletedMessage.message.videoMessage?.caption || "بدون کپشن";

                await sock.sendMessage(chatId, {
                    [messageType.replace("Message", "")]: buffer,
                    caption: messageContent + (caption ? `\n📝 *کپشن:* ${caption}` : ""),
                    mentions: [deleter, sender]
                });
            } 
        } catch (error) {
            console.error("❌ خطا در Antidelete:", error);
        }
    });
}

module.exports = { setupAntidelete };
