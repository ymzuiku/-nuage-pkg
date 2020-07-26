import { mgo } from "./apps/mgo";
import { fast, fastStart } from "./apps/fast";

fast.get("/hello", async (req, rep) => {
  const db = await mgo("ts-move");
  const users = db.collection("users");
  const res = await users.insert({ hello: "hello" }, { w: "majority", wtimeout: 5000, j: true });
  return res;
});

fastStart(4100);
