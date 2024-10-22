const promptSchemaQRCode = [
  {
    name: "link",
    description: "Digite o link para gerar o QR CODE",
  },
  {
    name: "type",
    description: "Escolha entre o tipo de QRcode (1- NORMAL ou (2- TERMINAL",
    pattern: /^[1-2]+$/,
    message: "Escolha apenas entre 1 e 2",
    required: true,
  },
];

export default promptSchemaQRCode;