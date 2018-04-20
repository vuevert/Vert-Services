import { Injectable } from '@vert/core'
import qs from 'qs'

/**
 * QS Service.
 *
 * @description
 * This service is used to serialize object to query string.
 *
 * @class Qs
 */
@Injectable()
class Qs {
  parse (str: string, ...args): {[key: string]: string} {
    return qs.parse(str, ...args)
  }

  stringify (obj: {}, ...args): string {
    return qs.stringify(obj, ...args)
  }
}

export {
  Qs
}
