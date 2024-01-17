import Fastify, { type FastifyInstance, type FastifyReply, type FastifyRequest } from "fastify";
const fastify: FastifyInstance = Fastify({
    logger: true
})

fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return {
        msg: "hello world"
    }
})

try {
    await fastify.listen({ port: 3000})
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}