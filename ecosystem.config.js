module.exports = {
  apps : [{
    name: 'Serve',
    script: 'yarn serve',
    instances: 1,
    autorestart: true,
    max_memory_restart: '1G',
  }],
};
