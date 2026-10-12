const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
const { handleCommand } = require('./commands');
const pino = require('pino');

async function startPhantomBot() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info');
    const { version } = await fetchLatestBaileysVersion();

    const sock = makeWASocket({
        version,
        auth: state,
        printQRInTerminal: false,
        logger: pino({ level: 'silent' }),
        browser: ['Phantom-Bot', 'Safari', '3.0.0']
    });

    if (!sock.authState.creds.registered) {
        const phoneNumber = "212714962099";
        setTimeout(async () => {
            try {
                let code = await sock.requestPairingCode(phoneNumber);
                console.log(`\n============================`);
                console.log(`🔑 PHANTOM PAIRING CODE: ${code?.match(/.{1,4}/g)?.join('-') || code}`);
                console.log(`============================\n`);
            } catch (err) {
                console.error("❌ Pair Code Request Error:", err);
            }
        }, 3000);
    }

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const shouldReconnect = lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('⚠️ Reconnecting Phantom Core...', shouldReconnect);
            if (shouldReconnect) {
                startPhantomBot();
            }
        } else if (connection === 'open') {
            console.log('⚡ PHANTOM-BOT IS ONLINE & FULLY DOMINANT IN GROUPS!');
        }
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('messages.upsert', async (m) => {
        try {
            const msg = m.messages[0];
            if (!msg.message || msg.key.fromMe) return;

            const chatId = msg.key.remoteJid;
            
            // العمل حصراً داخل المجموعات وتجاهل المحادثات الخاصة تماماً
            const isGroup = chatId.endsWith('@g.us');
            if (!isGroup) return;

            const messageText = msg.message.conversation || 
                                msg.message.extendedTextMessage?.text || 
                                msg.message.imageMessage?.caption || '';

            const sender = msg.key.participant || chatId;

            await handleCommand(sock, chatId, messageText, sender, isGroup, msg);
        } catch (error) {
            console.error('❌ Message Handler Error:', error);
        }
    });
}

startPhantomBot();