import https from "https";

export async function getRequest(hostname: string): Promise<any> {
  const response = await fetch(hostname);
  const code = await response.json();
  const status = code.statusCode;
  console.log(status);
  return status;
}

const test = getRequest("www.finn.no");

console.log(test);
