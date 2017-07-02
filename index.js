import XHRInterceptor from 'react-native/Libraries/Network/XHRInterceptor';

function convertURLStringToHash(data) {
  const formattedData = {};
  const dataArr = data.split('&');
  dataArr.forEach(d => {
    const item = d.split('=');
    const key = item[0];
    const value = item[1];
    formattedData[key] = value;
  });

  return formattedData;
}

export function start(config = {
  host: 'localhost',
  port: 6969,
}) {
  const ws = new WebSocket(`ws://${config.host}:${config.port}`);

  const defaultMessage = {
    requestHeaders: {},
    responseHeaders: {},
  };

  let message = defaultMessage;

  XHRInterceptor.setOpenCallback((protocol, url) => {
    message.protocol = protocol;
    message.url = url;
  });

  XHRInterceptor.setSendCallback((d) => {
    try {
      message.data = convertURLStringToHash(d);
    } catch (e) {
      if (d) {
        message.data = d;
      }
    }
  });
  XHRInterceptor.setRequestHeaderCallback((header, value) => {
    message.requestHeaders[header] = value;
  });
  XHRInterceptor.setHeaderReceivedCallback((header, value) => {
    message.responseHeaders[header] = value;
  });
  XHRInterceptor.setResponseCallback((status, _, payload) => {
    message.response = JSON.parse(payload);
    message.requestHeaders = JSON.stringify(message.requestHeaders);
    message.responseHeaders = JSON.stringify(message.responseHeaders);
    ws.send(JSON.stringify(message));
    message = defaultMessage;
  });

  XHRInterceptor.enableInterception();
}

export function stop() {
  XHRInterceptor.disableInterception();
}
