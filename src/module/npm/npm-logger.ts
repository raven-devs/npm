import { CustomStringType } from '../../types/custom-string-type';

/**
 * Logger class description
 */
export class Logger {
  /**
   * log methdod description
   * @example
   * // log a message
   * Logger.log('this is a log message');
   * @throws {code: 500} Internal Server Error.
   * @deprecated this function is deprecated since v1.1.3
   */
  static log(...args: any[]): void {
    const customStr: CustomStringType = 'CustomStringType';
    console.log('customStr', customStr);
    console.log(...args);
  }

  static error(...args: any[]): void {
    console.error(...args);
  }
}
