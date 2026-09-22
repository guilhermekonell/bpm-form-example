const os = require("os");
const argv = require("yargs").argv;
const cli = require("@angular/cli").default;

const { useSsl = false } = argv;

const HOST = `${os.hostname().toLowerCase()}.interno.senior.com.br`;

const port = process.env.PORT || "4201";

cli({
  cliArgs: [
    "serve",
    "--open",
    "--host", HOST,
    "--port", port,
    "--ssl", useSsl,
    "--disable-host-check"
  ]
});

