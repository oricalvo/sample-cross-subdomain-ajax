const {spawn} = require("build-utils/process");
const opener = require("opener");

const command = process.argv[2];
if(command == "start") {
    start();
}
else {
    console.error("Unknown command " + command);
}

function start() {
    spawn("node", ["proxy/main.js"], {detached: true, shell: true, wait: false, stdio: "ignore"});
    spawn("node", ["auth/main.js"], {detached: true, shell: true, wait: false, stdio: "ignore"});
    spawn("node", ["app/main.js"], {detached: true, shell: true, wait: false, stdio: "ignore"});

    opener("http://app.mysite.com:8080");
}
