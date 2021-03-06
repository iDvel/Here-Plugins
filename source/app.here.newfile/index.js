
here.onLoad(() => {
    const fileName = "NewFile.txt"
    const filePath = `~/Desktop/${fileName}`

    // Mini Window
    here.setMiniWindow({
        title: "Create a New File",
        detail: filePath,
        onClick: () => {
            here.exec(`touch ${filePath}`)
            .then(() => {
                here.exec(`open ${filePath}`)
            })
        }
    })
})