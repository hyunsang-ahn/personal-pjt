module.exports = {
  apps: [{
    name: "personal-pjt",
    script: "./server.js",
    watch: ["server", "client"],
    // Delay between restart
    watch_delay: 1000,
    ignore_watch: ["node_modules"],
  }]
}
