const { Approval } = require('./GlobalMain');
const firewall1 = global.firewall1 = new Approval({ fetchAllMembers: true })
const firewall2 = global.firewall2 = new Approval({ fetchAllMembers: true })
const firewall3 = global.firewall3 = new Approval({ fetchAllMembers: true })

require('mongoose').connect(require('./Approval/Settings/system').MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("[Mongoosee] Bağlantı Başarıyla Kuruldu!")
}).catch((err) => {
    console.log("MongoDB veritabanına bağlantı sağlanamadı!\n" + err, "error");
});

firewall1.komutYükle("owner")
firewall1.eventYükle("message")
firewall1.login(sistem.firewall1)
firewall2.login(sistem.firewall2)
firewall3.login(sistem.firewall3)
firewall2.RoleGuard()
firewall3.MemberGuard()
firewall1.ChannelGuard()
