import qr from "qrcode-terminal"

async function handle(err, result) {
  if(err) {
    console.log("error on aplication!")
    return
  }

  const isSmall = result.type == 2
  qr.generate(result.link, {small: isSmall}, (qrcode) => {
    console.log("QRcode gerado com sucesso! \n")
    console.log(qrcode)
  })
}

export default handle