const mainPrompt = [
  {
    name: "select",
    description: "Selecione 1 para gerar o seu QRcode ou 2 para gerar sua senha",
    pattern: /^[1-2]+$/,
    message: "Escolha apenas os números 1 e 2",
    required: true
  }
]

export default mainPrompt