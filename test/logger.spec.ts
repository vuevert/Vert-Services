import { Injector } from '@vert/core'
import { Logger } from '../src'

describe('Log Service testing.', () => {
  let logger: Logger
  beforeAll(() => {
    const injector = Injector.create()
    injector.addSingleton(Logger)
    logger = injector.get(Logger)
  })

  test('Info logger should work.', () => {
    const infoLog = logger.info('Get information:', { name: 'LancerComet' })
    expect(infoLog.level).toEqual('Info')
    expect(infoLog.date instanceof Date).toEqual(true)
    expect(Array.isArray(infoLog.content)).toEqual(true)
  })

  test('Warn logger should work.', () => {
    const warnLog = logger.warn(
      'You should provide your username before login.',
      new Error('No username is provided.')
    )
    expect(warnLog.level).toEqual('Warn')
    expect(warnLog.date instanceof Date).toEqual(true)
    expect(Array.isArray(warnLog.content)).toEqual(true)
  })

  test('Error logger should work.', () => {
    const errorLog = logger.error(
      'Password is undefined',
      new TypeError('Password is undefined')
    )
    expect(errorLog.level).toEqual('Error')
    expect(errorLog.date instanceof Date).toEqual(true)
    expect(Array.isArray(errorLog.content)).toEqual(true)
  })

  test('Logger count should be 3.', () => {
    const logs = logger.getLogs()
    expect(logs.length).toEqual(3)
  })
})
