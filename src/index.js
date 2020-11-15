const server = require("./server.js");

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
