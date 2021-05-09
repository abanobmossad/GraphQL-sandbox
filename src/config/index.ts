import 'dotenv/config';

export default {
  port: parseInt(process.env.PORT, 10),
  logs: {
    level: process.env.LOG_LEVEL,
  },
};
