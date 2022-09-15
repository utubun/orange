import neo4j from 'neo4j-driver';

async function driverInfo (driver) {

  const { address, agent, protocolVersion } = await driver.getServerInfo();

  console.log(`
    Database 🍅\tConnected!\n
    Address 📡\t${address}\n
    Agent \t🕵\t${agent}\n
    Version 📜\t${protocolVersion}
  `)
}

export async function initDriver(uri, username, password) {

    const driver = await neo4j.driver(
      uri,
      neo4j.auth.basic(username, password)
    );

    driverInfo(driver);

    return driver;
  }