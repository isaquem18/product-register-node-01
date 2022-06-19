import express from 'express';

const server = express();

server.use(express.json());

server.get('/', (req, res) => {

  return res.status(200).json({ message: 'server is on.'})
});

export { server };
