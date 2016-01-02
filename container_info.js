const exec = require('child_process');

const getMyContainerIdCommand = 'cat /proc/self/cgroup | grep docker | tail -n 1'
const commandOutput = exec.execSync(getMyContainerIdCommand, {encoding: 'utf8'}) || "1:blkio:/docker/UNKNOWN\n";
const myContainerId = commandOutput.replace(/^.*docker\//, "").trim();

module.exports = {
    containerId: myContainerId,
    
    greetingString: "Hello from container " + myContainerId
};