export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // If requesting the streamer dashboard
    if (url.pathname === "/stream.html" || url.pathname === "/stream") {
      return env.ASSETS.fetch(new Request(new URL("/stream.html", request.url)));
    }

    // Default route to index.html for viewers
    return env.ASSETS.fetch(request);
  }
};