import prompt from "prompt"
import mainPrompt from "./prompts/prompt.js"
import createQrcode from "./services/qrcode/create.js"

async function main() {
  prompt.get(mainPrompt, async (err, result) => {
    if (result.select == 1) await createQrcode()
  })

  prompt.start()
}
main()