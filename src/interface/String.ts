/**
 * Get not undefined string
 * @param string - get string
 */
const getNotUndefinedString = (string: string | undefined) => {
  return string ? string : '';
};
/**
 * Get string if provide is true, and return string or empty
 * @param provide - provide what tested
 * @param string  - what string return if {provide} is true
 */
export const getProvideString = (provide: any, string: string) => {
  return `${provide ? string : ''}`;
};

export default getNotUndefinedString;