import type { NitroErrorHandler } from 'nitropack'

export default <NitroErrorHandler>function (error, event) {
  const { statusCode, statusMessage, message } = error

  event.node.res.writeHead(statusCode, statusMessage)
  event.node.res.end(JSON.stringify({ statusCode, message }))
}
