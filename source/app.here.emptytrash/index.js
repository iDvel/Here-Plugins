here.onLoad(() => {
    // Mini Window
    here.setMiniWindow({
        title: "Empty Trash",
        detail: "Clean up trash can.",
        onClick: () => {
            console.debug("Did click on miniwin cell")
            here.exec("osascript -e 'tell application \"Finder\" to empty trash'")
            .then((stdOut) => {
                // console.debug("stdOut: ", stdOut)
                if (stdOut != undefined && stdOut.length > 0) {
                    // Interactive command
                    // Treat it as an Error for now
                    console.error(`Error: ${stdOut}`)
                    here.hudNotification("Failed to empty trash")

                } else {
                    here.hudNotification("Files deleted")
                }
            })
            .catch((error) => {
                console.error(`Faild to execute command. Error: ${JSON.stringify(error)}`)
                here.hudNotification("Failed to empty trash")
            })
        }
    })
})