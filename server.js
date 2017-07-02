#!/usr/bin/env node

const WebSocket = require('ws');
const prettyjson = require('prettyjson');

const wss = new WebSocket.Server({ port: 6969 });

wss.on('connection', ws =>
  ws.on('message', (message) => {
    try {
      const parsed = JSON.parse(message);
      parsed.requestHeaders = JSON.parse(parsed.requestHeaders);
      parsed.responseHeaders = JSON.parse(parsed.responseHeaders);
      console.log('\n\n────────────────────REQUEST START────────────────────\n\n');
      console.log(prettyjson.render(parsed));
      console.log('\n\n────────────────────REQUEST END────────────────────\n\n');
    } catch(e) {}
  })
);
