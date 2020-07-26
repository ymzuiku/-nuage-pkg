// yarn add mongodb @types/mongodb
import { connect, MongoClient, MongoClientCommonOption, ObjectId } from "mongodb";
import fs from "fs-extra";

/* create env.json file:
{
  "mongo": {
    "host": [
      "127.0.0.1:5701",
      "127.0.0.1:5702",
      "127.0.0.1:5703"
    ],
    "auth": {
      "user": "pillar",
      "password": "xxxxxxxxxx"
    }
  }
}
*/

let env: any;
if (fs.existsSync("./env.local.json")) {
  env = require("./env.local.json");
} else {
  env = require("./env.json");
}

export async function mgo(db: string, options?: MongoClientCommonOption) {
  if (!mgo.client) {
    mgo.client = await connect(`mongodb://${env.mongo.host.join(",")}?w=majority`, {
      auth: env.mongo.auth,
      connectTimeoutMS: 1000,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  return mgo.client.db(db, options);
}

mgo.client = (null as any) as MongoClient;
mgo.id = (id?: string) => {
  return new ObjectId(id);
};
