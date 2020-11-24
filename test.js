const {
    createSession,
    closeSession,
    startWebDriver,
    stopWebDriver,
    client
  } = require('nightwatch-api');

  
async function setup(env = "default") {
    await startWebDriver({env});
    await createSession({env});
}

async function shutdown(env = "default") {
    await closeSession({env});
    await stopWebDriver({env});
}

async function test(){
    await client.url("https://www.google.com");
    console.log("visiting google.com");
};

(async function(){
    try {
        await setup();
        await test();
    } catch (error) {
        console.log(error.stack);
    } finally {
        await shutdown();
    }
})();