module.exports = {
  apps : [{
    name: 'SamuelCV',
    script: 'npm run serve',
    instances: 1,
    autorestart: true,
    max_memory_restart: '1G',
  }],
};
