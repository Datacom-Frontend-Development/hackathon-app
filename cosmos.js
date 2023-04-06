const { CosmosClient } = require("@azure/cosmos");

const endpoint = "your-cosmos-db-account-url";
const key = "your-cosmos-db-account-key-or-token";

const client = new CosmosClient({ endpoint, key });
