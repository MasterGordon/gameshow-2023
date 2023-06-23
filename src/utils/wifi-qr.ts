export interface Config {
  ssid: string;
  password: string;
  encryption: 'WPA' | 'WEP' | 'None';
  hiddenSSID: boolean;
}

export function generateWiFiQRString(input: Config) {
  const ssid: string = mecardFormat(input.ssid);
  const password: string = mecardFormat(input.password);

  let retVal = `WIFI:S:${ssid};P:${password};H:${input.hiddenSSID};`;
  if (input.encryption !== 'None') {
    retVal += `T:${input.encryption};`;
  }

  return retVal;
}

function mecardFormat(input: string): string {
  input = input.replace(/\\/g, '\\\\');
  input = input.replace(/"/g, '\\"');
  input = input.replace(/;/g, '\\;');
  input = input.replace(/,/g, '\\,');
  input = input.replace(/:/g, '\\:');
  return input;
}
