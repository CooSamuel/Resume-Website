module.exports = {
  apps : [{
    name: 'SamuelCV',
    script: 'yarn serve',
    instances: 1,
    autorestart: true,
    max_memory_restart: '1G',
  }],
};
