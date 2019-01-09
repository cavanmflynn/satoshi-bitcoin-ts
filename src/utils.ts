/**
 * Determines if all the passed args are strings
 * @param args The arguments to check
 */
export function isString(...args: unknown[]) {
  return args.every(arg => typeof arg === 'string');
}

/**
 * Determines if all the passed args are numbers
 * @param args The arguments to check
 */
export function isNumber(...args: unknown[]) {
  return args.every(arg => typeof arg === 'number');
}
