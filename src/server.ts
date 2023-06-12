import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorlogger, logger } from './shared/logger';

async function dbConnect() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connected successfully')

    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error(error)
  }
}

dbConnect()
