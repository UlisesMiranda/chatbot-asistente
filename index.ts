import { Bot, messages } from '@botpress/sdk'
import {log} from "@botpress/sdk/dist/log";

const bot = new Bot({})

bot.message('', async ({ message, client, ctx }) => {
  log.info('Received message', message)

  await client.createMessage({
    conversationId: message.conversationId,
    userId: ctx.botId,
    tags: {},
    type: 'text',
    payload: {
      text: `I'm a stub bot. You said: ${message.payload}`,
    },
  })
  console.log('text message sent')
})

export default bot
