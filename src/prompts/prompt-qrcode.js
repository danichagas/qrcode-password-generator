const promptQrcode = [
  {
    name: "link",
    description: "Cole o link para gerar o QRcode", 
  },
  {
    name: "type",
    description: "Escolha entre o tipo (1- NORMAL ou 2- TERMINAL",
    pattern: /^[1-2]+$/,
    message: "Escolha apenas entre 1 e 2",
    required: true
  }
]

export default promptQrcode