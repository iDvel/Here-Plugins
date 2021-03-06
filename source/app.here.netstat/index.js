const os = require("os")
const _ = require("underscore")

function netUsage() {
    // console.debug("netUsage")
    os.netStat()
    .then((json) => {
        console.verbose(json)

        const deltain = json["deltain_string"].replace(/\s+/g, '').slice(0,-1) + '/s'
        const deltaout = json["deltaout_string"].replace(/\s+/g, '').slice(0,-1) + '/s'
        const totalin = json["totalin_string"]

        // Menu Bar
        here.setMenuBar({ title: `⇣${deltain} ⇡${deltaout}` })

        // Mini Window
        here.setMiniWindow({
            title: "Network Speed",
            detail: "Total Download: " + totalin,
            accessory: {
                title: "⇣" + deltain,
                detail: "⇡" + deltaout
            }
        })

        // Dock
        here.setDock({
            title: "⇣" + deltain,
            detail: "⇡" + deltaout
        })
    })
    .catch((error) => {
        console.error(JSON.stringify(error))
        here.setMiniWindow({ title: JSON.stringify(error) })
    })
}


here.onLoad(() => {
    netUsage()
    setInterval(netUsage, 3000);
})