const server = require("./api/server")

const port = process.env.PORT || 4000

server.listen(4000, () => {
    console.log(`Server running at http://localhost:${port}`)
})
