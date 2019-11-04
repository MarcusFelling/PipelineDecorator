import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        console.log('Running pipeline decorator');
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();