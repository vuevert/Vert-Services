/* tslint:disable */

import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import {Timer} from '../src/libs/srv.timer'

declare namespace VertServices {
  /**
   * Http Service.
   *
   * @class Http
   */
  class Http {
    private _$http: AxiosInstance
    private $http (): AxiosInstance
    private init ()

    /**
     * Add an interceptor for all requests.
     *
     * @static
     * @param {IInterceptor} interceptor
     */
    static addGlobalRequestInterceptor (interceptor: IInterceptor)

    /**
     * Add an interceptor for all responses.
     *
     * @static
     * @param {IInterceptor} inteceptor
     */
    static addGlobalResponseInterceptor (inteceptor: IInterceptor)

    /**
     * Make a get request.
     *
     * @param {string} url
     * @param {AxiosRequestConfig} [config]
     * @template T
     * @returns
     * @memberof Http
     */
    get <T = any> (url: string, config?: AxiosRequestConfig)

    /**
     * Make a post request.
     *
     * @param {string} url
     * @param {*} [data]
     * @param {AxiosRequestConfig} [config]
     * @template T
     * @returns
     * @memberof Http
     */
    post <T = any> (url: string, data?: any, config?: AxiosRequestConfig)

    /**
     * Make a request by using config.
     *
     * @param {AxiosRequestConfig} config
     * @return {AxiosPromise<any>}
     */
    request (config: AxiosRequestConfig)

    /**
     * Add an interceptor for requests.
     *
     * @param {((value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>)} [onFulfilled]
     * @param {(error: any) => any} [onRejected]
     * @returns {number}
     * @memberof Http
     */
    addRequestInterceptor (
      onFulfilled?: (value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>,
      onRejected?: (error: any) => any
    ): number

    /**
     * Add an interceptor for responses.
     *
     * @param {((value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>)} [onFulfilled]
     * @param {(error: any) => any} [onRejected]
     * @returns {number}
     * @memberof Http
     */
    addResponseInterceptor (
      onFulfilled?: (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>,
      onRejected?: (error: any) => any
    ): number
  }

  interface IInterceptor {
    onFulfilled?: (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>
    onRejected?: (error: any) => any
  }

  /**
   * LocalStorage Service.
   *
   * @description
   * LocalStorage service provides a set of functions to control local storage.
   *
   * @class LocalStorage
   */
  class LocalStorage {
    private prefix: string

    /**
     * Get target item from local storage.
     *
     * @param {string} keyName
     * @return {string}
     */
    getItem (keyName: string): string

    /**
     * Set an item to local storage.
     *
     * @param {string} keyName
     * @param {string} data
     */
    setItem (keyName: string, data: string)
  }

  /**
   * Logger Service.
   *
   * @description
   * Class that can be a log provider.
   *
   * @class Logger
   */
  class Logger {
    private logPool: ILog[]
    private addLog (log: ILog)
    debug (...content): ILog
    log (...content): ILog
    info (...content): ILog
    warn (...content): ILog
    error (...content): ILog
    getLogs (): ILog[]
  }

  enum LogLevel {
    debug = 'Debug',
    info = 'Info',
    warn = 'Warn',
    error = 'Error'
  }

  interface ILog {
    date: Date
    level: LogLevel
    content: any
  }

  /**
   * QS Service.
   *
   * @description
   * This service is used to serialize object to query string.
   *
   * @class Qs
   */
  class Qs {
    parse (str: string, ...args): {[key: string]: string}
    stringify (obj: {}, ...args): string
  }

  /**
   * Timer Service.
   *
   * @description
   * Timer provides a set of functions to use timer-related function.
   */
  class Timer {
    setTimeout (callback: () => void, timeout: number)
    setInterval (callback: () => void, interval: number)
    nextTick (callback: () => void)
    nextJob (callback: () => any)
  }
}

export = VertServices
