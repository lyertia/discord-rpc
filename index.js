var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Gözükecek şey burada yazıyorrrrrr",
assets : {
large_image : "Discord Developer Portal'da eklediğimiz resmin ismi.",
large_text : "Discord botları için DM." // bu gözükmeyebilir!!
},
buttons : [{label : "Discord" , url : "https://discord.gg/UkmEhtU3x3"},{label : "Github",url : "https://github.com/lyertia"}] //kendinize göre yazın
}
})
})
client.login({ clientId : "Discord Developer Portal'da oluşturduğumuz aplikasyon id'si" }).catch(console.error);
