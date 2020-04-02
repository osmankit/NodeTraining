var cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`); //get current process ID
    // get the machine's CPUs count
    var cpuCount = os.cpus().length;
    console.log("Total number of cpus available: " + cpuCount);
    console.log("MAster Process id - ", process.pid);

    // Create worker for each CPU
    for (var i = 0; i < cpuCount; i++) {
        cluster.fork();
    }
} else {
    console.log("Worker Process id - ", process.pid);
    module.exports = process.pid;
    require('./server');
}