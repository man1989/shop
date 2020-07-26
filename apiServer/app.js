/*
This uses json-server, but with the module approach: https://github.com/typicode/json-server#module
Downside: You can't pass the json-server command line options.
Instead, can override some defaults by passing a config object to jsonServer.defaults();
You have to check the source code to set some items.
Examples:
Validation/Customization: https://github.com/typicode/json-server/issues/266
Delay: https://github.com/typicode/json-server/issues/534
ID: https://github.com/typicode/json-server/issues/613#issuecomment-325393041
Relevant source code: https://github.com/typicode/json-server/blob/master/src/cli/run.js
*/

/* eslint-disable no-console */
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "./data/db.json"));

// Can pass a limited number of options to this to override (some) defaults. See https://github.com/typicode/json-server#api
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser. Using JSON Server's bodyParser
server.use(jsonServer.bodyParser);

// Simulate delay on all requests
server.use(function(req, res, next) {
  setTimeout(next, 0);
});


server.get("/mens_outerwear/:name", (req, res, next)=>{
    const {mens_outerwear: data} = router.db.getState();
    const result = data.reduce((acc, val) => {
        if(val.name === req.params.name){
            Object.assign(acc, val);
        }
        return acc;
    }, {})
    res.json(result);
});

server.get("/mens_tshirts/:name", (req, res, next)=>{
  const {mens_tshirts: data} = router.db.getState();
  const result = data.reduce((acc, val) => {
      if(val.name === req.params.name){
          Object.assign(acc, val);
      }
      return acc;
  }, {})
  res.json(result);
});

server.get("/ladies_outerwear/:name", (req, res, next)=>{
  const {ladies_outerwear: data} = router.db.getState();
  const result = data.reduce((acc, val) => {
      if(val.name === req.params.name){
          Object.assign(acc, val);
      }
      return acc;
  }, {})
  res.json(result);
});

server.get("/ladies_tshirts/:name", (req, res, next)=>{
  const {ladies_tshirts: data} = router.db.getState();
  const result = data.reduce((acc, val) => {
      if(val.name === req.params.name){
          Object.assign(acc, val);
      }
      return acc;
  }, {})
  res.json(result);
});

// Use default router
server.use(router);

// Start server
const port = 8083;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});