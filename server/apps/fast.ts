// yarn add fastify fastify-static fastify-cors fastify-compress fastify-helmet

import { resolve } from "path";
import { fastify } from "fastify";
import fastifyStatic from "fastify-static";
import fastifyCors from "fastify-cors";
import fastifyCompress from "fastify-compress";
import fastfyHelment from "fastify-helmet";

const pwd = (...args: string[]) => resolve(process.cwd(), ...args);
export const fast = fastify({ logger: false });

// 开发环境打开 cors
if (true) {
  fast.register(fastifyCors);
}

fast.register(fastfyHelment);
fast.register(fastifyCompress);
fast.register(fastifyStatic, {
  root: pwd("./static"),
});

fast.get("/ping", async (req, reply) => {
  return { hello: "get" };
});

fast.post("/ping", async (req, reply) => {
  return { hello: "post" };
});

// Run the server!
export const fastStart = async (port: number) => {
  try {
    // eslint-disable-next-line no-console
    console.log("server listening: http://0.0.0.0:" + port);
    await fast.listen(port);
  } catch (err) {
    fast.log.error(err);
    process.exit(1);
  }
};
