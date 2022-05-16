browser.proxy.onRequest.addListener(handleProxyRequest, { urls: ["*://*.crunchyroll.com/auth/v1/token"] });

function handleProxyRequest(requestInfo) {
	console.log("Token Proxied:", requestInfo.url);
	return { type: "socks", host: "_", port: 1080, username: "_", password: "_" }
}
