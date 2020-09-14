/**
 * Generates a random `backgroundSize` CSS property
 * @param  {array} props An array of widths and heights. Only the array size will be used, widths and heights will be randomized.
 * @return {string}      A string containing the random widths and heights suffixed with `%` and delimited by `,`
 *
 * Example: [{width: 100, height: 10}, {width: 100, height: 20}] => "134% 19%, 230% 24%"
 */
const generateRandomBackgroundSizeCss = (props) => {
  const { backgroundSize } = props;

  const css =
    backgroundSize &&
    backgroundSize.reduce((result, item, index) => {
      /**
       * Generating a width ~200% makes sure the pattern will fill the whole screen
       */
      const width = Math.floor(Math.random() * Math.floor(200));

      /**
       * Height should be incremental by the order of 10
       */
      const height =
        (index + 1) * 10 + Math.floor(Math.random() * Math.floor(15));

      return `${result}${width}% ${height}%, `;
    }, "");

  return css.slice(0, -2);
};

/**
 * Generates the `backgroundSize` CSS property
 * @param  {array} props An array of widths and heights
 * @return {string}      A string containing the widths and heights suffixed with `%` and delimited by `,`
 *
 * Example: [{width: 100, height: 10}, {width: 100, height: 20}] => "100% 10%, 100% 20%"
 */
const generateBackgroundSizeCss = (props) => {
  const { backgroundSize } = props;

  const css =
    backgroundSize &&
    backgroundSize.reduce((result, item) => {
      const { width, height } = item;
      return `${result}${width}% ${height}%, `;
    }, "");

  return css.slice(0, -2);
};

export { generateBackgroundSizeCss, generateRandomBackgroundSizeCss };
