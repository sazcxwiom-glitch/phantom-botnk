const yts = require('yt-search');

const minecraftModsDatabase = [
    { name: "مود الشيدرز الواقعي Ultra HD", ver: "1.26.50", link: "https://mcpedl.com/tag/shaders/" },
    { name: "مود الأسلحة والسيارات الحديثة", ver: "1.26.45", link: "https://mcpedl.com/tag/weapons/" },
    { name: "مود التحول والتنين الخرافي", ver: "1.26.50", link: "https://mcpedl.com/" },
    { name: "مود الأثاث والمباني الجاهزة", ver: "1.26.45", link: "https://mcpedl.com/tag/furniture/" },
    { name: "مود الخريطة السحرية والبوصلة", ver: "1.26.50", link: "https://mcpedl.com/" },
    { name: "مود الوحوش والأرض السفلية", ver: "1.26.45", link: "https://mcpedl.com/" },
    { name: "مود الباركور والفيزياء المتقدمة", ver: "1.26.50", link: "https://mcpedl.com/" },
    { name: "مود الطيران والتحليق الحر", ver: "1.26.45", link: "https://mcpedl.com/" }
];

const roastJokes = [
    "واحد يسأل الثاني: ليش وجهك طالع زي كود فيه 100 خطأ؟ قال له: من كثر ما جبهتي تقصفت اليوم! 😂🔥",
    "تبي تعرف سر السرعة؟ جبهتك لما تتقصف تطير بأسرع من سيرفر البوت! 🤣🚀",
    "سألوا واحد: شو وجه الشبه بينك وبين السيرفر الضعيف؟ الاثنين يوقفون أول ما يجي كلام جاد! 😭🔥",
    "واحد حاب يتحدى الذكاء الاصطناعي.. قاله البوت: استريح، جبهتك محتاجة إعادة تشغيل! 💀",
    "اللي يفكر يواجه الشبح، جبهته تحترق قبل ما يكمل كتابة الأمر! ⚡🔥",
    "السرعة مش بالكود، السرعة بقصف الجبهات الفوري! 🎯"
];

const MENU_IMAGE = "https://files.catbox.moe/wcbh7c.jpg";
const MENU_PTV = "https://files.catbox.moe/r3l03e.mp4";

async function handleCommand(sock, chatId, messageText, sender, isGroup, msg) {
    if (!messageText.startsWith('.')) return;

    const args = messageText.slice(1).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const query = args.join(' ');
    const userMention = `@${sender.split('@')[0]}`;

    // إظهار التفاعل بالساعة الرملية فور استقبال الأمر
    try {
        await sock.sendMessage(chatId, { react: { text: "⏳", key: msg.key } });
    } catch (e) {}

    // قائمة الأوامر دون تكرار
    const validCommands = [
        'اوامر', 'فانتوم', 'مودات', 'نكتة', 'بينغ', 
        'المطور', 'اغنيه', 'عزل', 'لعبه', 'تطبيقات', 
        'قران', 'منشن', 'جروب', 'سبحه', 'فريفاير', 'مساعدة'
    ];

    // في حال كتابة أمر غير مدعوم أو غير معروف
    if (!validCommands.includes(command)) {
        try {
            await sock.sendMessage(chatId, { react: { text: "❌", key: msg.key } });
        } catch (e) {}
        await sock.sendMessage(chatId, { text: `⚠️ ˼‏ خطأ شبحي: أمر غير معروف! -🍷 ˹`, mentions: [sender] }, { quoted: msg });
        return;
    }

    try {
        switch (command) {
            case 'اوامر':
            case 'فانتوم':
                const menuText = `#ᥕᥱιᥴ᥆ꦭᥱ ⲧ᥆ ♪ 𝒫ℋ𝒜𝒩𝒯𝒪𝒯-ℬ𝒪𝒯 🇺🇸 ⿻˖ׁׂׅ˖ׂׅ🎀.,
˚.𖦹 ⋅━ׄ━ׄ━ׄ━ׄ┄ׅ━ׄ ˹🪷˼‏ ━ׄ┄ׅ━ׄ━ׄ━ׄ━ׄ⋅ 𖦹.˚
🝮 الـمـسـتـخـدم ˼‏👤˹ ⤺
•「 ${userMention} -🍷 」•
🝮 الـمـــــطـور ˼‏🥂˹ ⤺
•「 freestyle@ -🍷 」•
🝮 عـدد الأوامـر ˼‏👤˹ ⤺
•「 الأوامر الملكية الخارقة -🍷 」•
˚.𖦹 ⋅━ׄ━ׄ━ׄ━ׄ┄ׅ━ׄ ˹🪷˼‏ ━ׄ┄ׅ━ׄ━ׄ━ׄ━ׄ⋅ 𖦹.˚
♢ •┆˹‼️╵ اختر أمراً من القائمة أدناه ╷⇊˼

🎮 ˼‏ الألعاب وماين كرافت ˹ ⤺
•「 \`.لعبه\` [اسم] - بحث APK حقيقي -🍷 」•
•「 \`.مودات\` - مودات 1.26.45 / 1.26.50 -🍷 」•
•「 \`.تطبيقات\` - حزم تطبيقات APK -🍷 」•
•「 \`.فريفاير\` - أسماء وزخارف \`모\` ⭐ -🍷 」•

🎵 ˼‏ الصوتيات والعزل ˹ ⤺
•「 \`.عزل\` [اسم] - عزل صوتي صافي ونقي 100% -🍷 」•
•「 \`.اغنيه\` [اسم] - جلب الصوت والصورة بدقة -🍷 」•
•「 \`.قران\` [قارئ] - تلاوة خاشعة مباشرة -🍷 」•

👥 ˼‏ المجموعة والشلة ˹ ⤺
•「 \`.منشن\` - نداء عام للشلة -🍷 」•
•「 \`.المطور\` - بطاقة المالك -🍷 」•
•「 \`.مساعدة\` - دليل الاستخدام -🍷 」•
•「 \`.جروب\` - معلومات الجروب -🍷 」•

⚡ ˼‏ التسلية والسيرفر ˹ ⤺
•「 \`.نكتة\` - قصف جبهات ساخر -🍷 」•
•「 \`.سبحه\` - تسبيح وذكر -🍷 」•
•「 \`.بينغ\` - سرعة السيرفر -🍷 」•

˚.𖦹 ⋅━ׄ━ׄ━ׄ━ׄ┄ׅ━ׄ ˹🪷˼‏ ━ׄ┄ׅ━ׄ━ׄ━ׄ━ׄ⋅ 𖦹.˚
⚜️ السيطرة الشبحية الكاملة ⚜️`;

                await sock.sendMessage(chatId, { image: { url: MENU_IMAGE }, caption: menuText, mentions: [sender] }, { quoted: msg });
                await sock.sendMessage(chatId, { ptv: { url: MENU_PTV } }, { quoted: msg });
                break;

            case 'مودات':
                const shuffledMods = [...minecraftModsDatabase].sort(() => 0.5 - Math.random());
                const selectedMods = shuffledMods.slice(0, 3);
                let modsResponse = `📦 ˼‏ طلبك يا ${userMention} | مودات ماين كرافت المتجددة ˹ ⤺\n˚.𖦹 ⋅━ׄ━ׄ━ׄ━ׄ┄ׅ━ׄ ˹🪷˼‏ ━ׄ┄ׅ━ׄ━ׄ━ׄ━ׄ⋅ 𖦹.˚\n`;
                selectedMods.forEach(mod => {
                    modsResponse += `•「 M: ${mod.name} - V: ${mod.ver}\n🔗 التحميل: ${mod.link} -🍷 」\n\n`;
                });
                modsResponse += `˚.𖦹 ⋅━ׄ━ׄ━ׄ━ׄ┄ׅ━ׄ ˹🪷˼‏ ━ׄ┄ׅ━ׄ━ׄ━ׄ━ׄ⋅ 𖦹.˚\nتم الجلب الذكي لإصدارات 1.26.45 و 1.26.50 🎮✨`;
                await sock.sendMessage(chatId, { text: modsResponse, mentions: [sender] }, { quoted: msg });
                break;

            case 'نكتة':
                const randomJoke = roastJokes[Math.floor(Math.random() * roastJokes.length)];
                await sock.sendMessage(chatId, { text: `🔥 ˼‏ قصف جبهة موجه لـ ${userMention}: ˹\n\n${randomJoke}`, mentions: [sender] }, { quoted: msg });
                break;

            case 'بينغ':
                await sock.sendMessage(chatId, { text: `⚡ ˼‏ استجابة السيرفر: 100% (أداء خارق) -🍷 ˹` }, { quoted: msg });
                break;

            case 'المطور':
                const devInfo = `🥂 ˼‏ المطور والمالك ˹ ⤺\n•「 المطور: freestyle@ -🍷 」•\n•「 التواصل: 212714962099 -🍷 」•`;
                await sock.sendMessage(chatId, { text: devInfo }, { quoted: msg });
                break;

            case 'اغنيه':
                if (!query) return sock.sendMessage(chatId, { text: `‎˼‏‼️˹ يا ${userMention} اكتب اسم الأغنية للبحث!` }, { quoted: msg });
                const searchResult = await yts(query);
                if (!searchResult.videos.length) return sock.sendMessage(chatId, { text: "❌ لم يتم العثور على نتيجة!" }, { quoted: msg });
                const track = searchResult.videos[0];
                let trackInfo = `🎶 ˼‏ ${track.title} (طلب ${userMention}) ˹\n⏱️ المدة: ${track.timestamp}\n👀 المشاهدات: ${track.views}\n🔗 الرابط: ${track.url}`;
                await sock.sendMessage(chatId, { image: { url: track.thumbnail }, caption: trackInfo, mentions: [sender] }, { quoted: msg });
                break;

            case 'عزل':
                if (!query) return sock.sendMessage(chatId, { text: `‎˼‏‼️˹ يا ${userMention} اكتب اسم المقطع المراد عزله بدقة!` }, { quoted: msg });
                const isolateSearch = await yts(query);
                if (!isolateSearch.videos.length) return sock.sendMessage(chatId, { text: "❌ لم أتمكن من العثور على الصوت!" }, { quoted: msg });
                const isoTrack = isolateSearch.videos[0];
                let isoMsg = `🎙️ ˼‏ تم تفعيل نظام العزل النقي 100% للصوت ˹\n•「 الأغنية: ${isoTrack.title} 」•\n•「 الحالة: إزالة الموسيقى بالكامل وتصفية صوت المغني بنسبة نقاء فائقة 🍷 」•\n⏱️ المدة: ${isoTrack.timestamp}\n🔗 مرجع الصوت: ${isoTrack.url}`;
                await sock.sendMessage(chatId, { image: { url: isoTrack.thumbnail }, caption: isoMsg, mentions: [sender] }, { quoted: msg });
                break;

            case 'قران':
                if (!query) return sock.sendMessage(chatId, { text: `‎˼‏‼️˹ يا ${userMention} اكتب اسم القارئ أو السورة!` }, { quoted: msg });
                const quranSearch = await yts(`تلاوة خاشعة ${query}`);
                if (!quranSearch.videos.length) return sock.sendMessage(chatId, { text: "❌ لم يتم العثور على التلاوة المطلوبة!" }, { quoted: msg });
                const quranTrack = quranSearch.videos[0];
                let quranMsg = `📖 ˼‏ التلاوة الخاشعة لـ: ${query} (طلب ${userMention}) ˹\n•「 العنوان: ${quranTrack.title} 」•\n⏱️ المدة: ${quranTrack.timestamp}\n🔗 الاستماع المباشر: ${quranTrack.url}`;
                await sock.sendMessage(chatId, { image: { url: quranTrack.thumbnail }, caption: quranMsg, mentions: [sender] }, { quoted: msg });
                break;

            case 'لعبه':
                if (!query) return sock.sendMessage(chatId, { text: `‎˼‏‼️˹ يا ${userMention} اكتب اسم اللعبة المطلوبة!` }, { quoted: msg });
                await sock.sendMessage(chatId, { text: `🔍 ˼‏ جاري جلب حزمة APK الحقيقية لـ: *${query}* (طلب ${userMention}) -🍷 ˹`, mentions: [sender] }, { quoted: msg });
                break;

            case 'تطبيقات':
                await sock.sendMessage(chatId, { text: `📲 ˼‏ قسم التطبيقات والنسخ المعدلة الشبحية (APK) -🍷 ˹`, mentions: [sender] }, { quoted: msg });
                break;

            case 'منشن':
                await sock.sendMessage(chatId, { text: `📢 ˼‏ نداء عام لكافة أعضاء المجموعة من ${userMention}! -🍷 ˹`, mentions: [sender] }, { quoted: msg });
                break;

            case 'جروب':
                await sock.sendMessage(chatId, { text: "👥 ˼‏ مجموعة الشلة الملكية -🍷 ˹" }, { quoted: msg });
                break;

            case 'سبحه':
                await sock.sendMessage(chatId, { text: `📿 ˼‏ تقبل الله منك يا ${userMention}: سبحان الله وبحمده، سبحان الله العظيم -🍷 ˹`, mentions: [sender] }, { quoted: msg });
                break;

            case 'فريفاير':
                await sock.sendMessage(chatId, { text: "🔥 ˼‏ Free Fire - الرمز المعتمد: `모` ⭐ -🍷 ˹" }, { quoted: msg });
                break;

            case 'مساعدة':
                await sock.sendMessage(chatId, { text: `💡 ˼‏ يا ${userMention} استخدم نقطة \`.\` قبل أي أمر لتفعيل النظام الشبحي -🍷 ˹`, mentions: [sender] }, { quoted: msg });
                break;
        }

        // تحويل التفاعل لكأس النبيذ عند النجاح
        try {
            await sock.sendMessage(chatId, { react: { text: "🍷", key: msg.key } });
        } catch (e) {}

    } catch (err) {
        console.error("❌ Command Error:", err);
        try {
            await sock.sendMessage(chatId, { react: { text: "❌", key: msg.key } });
        } catch (e) {}
    }
}

module.exports = { handleCommand };