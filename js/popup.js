new QRCode(document.querySelector('#qr-code'), {width: 200, height: 200}).makeCode(chrome.extension.getBackgroundPage().window.href);

