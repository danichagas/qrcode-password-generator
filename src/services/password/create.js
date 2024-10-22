import handle from "./handle.js";

async function createPassword() {
  console.log("password");
  const password = await handle();
  console.log(password);
}

export default createPassword;