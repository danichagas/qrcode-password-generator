import prompt from "prompt"
import mainPrompt from "./prompts/prompt.js"

async function main() {
  prompt.get(mainPrompt, async (err, result) => {
    if (result.select == 1) console.log("QRcode sendo gerado")
  })

  prompt.start()
}
main()