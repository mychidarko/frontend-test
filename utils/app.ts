/**
 * Show only X number of charcters in a string
 *
 * @param maxText The maximum number of characters to show
 * @param input The text to trim
 * @returns The trimmed text
 *
 * @example showOnly(5, "Michael"): Micha...
 */
export const showOnly = (maxText: number, input: string) =>
  input.length > maxText ? `${input.substring(0, maxText)}...` : input;
