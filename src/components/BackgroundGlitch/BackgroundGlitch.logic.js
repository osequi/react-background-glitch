/**
 * Generates the `background-image` property containing `repeating-linear-gradient`s
 * @param  {array} props An array of props for `repeating-linear-gradient`
 * @return {string}      A series of `repeating-linear-values` CSS values
 *
 * @example return value: repeating-linear-gradient(to left, blue 0%, blue 0.1%, red 0.1%, red 0.2%, lime 0.2%, lime 0.3%)
 *
 */
const generateBackgroundImageCss = (props) => {
  const { backgroundImage } = props;

  const css =
    backgroundImage &&
    backgroundImage.reduce((result, item) => {
      const { sideOrCorner, angle, colorStopList } = item;

      const position = sideOrCorner ? sideOrCorner : angle ? angle : "";

      const stops =
        colorStopList &&
        colorStopList.reduce((r, i) => {
          const { color, stop } = i;

          return `${r}${color} ${stop}, `;
        }, "");

      return `${result}repeating-linear-gradient(${position}, ${stops.slice(
        0,
        -2
      )}), `;
    }, "");

  return css.slice(0, -2);
};

/**
 * Generates a random `backgroundSize` CSS property
 * @param  {array} props An array of widths and heights. Only the array size will be used, widths and heights will be randomized.
 * @return {string}      A string containing the random widths and heights delimited by `,`
 *
 * Example: [{width: '100%', height: '10%'}, {width: '100%', height: '20%'}] => "134% 19%, 230% 24%"
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
 * @return {string}      A string containing the widths and heights delimited by `,`
 *
 * Example: [{width: '100%', height: '10%'}, {width: '100%', height: '20%'}] => "100% 10%, 100% 20%"
 */
const generateBackgroundSizeCss = (props) => {
  const { backgroundSize } = props;

  const css =
    backgroundSize &&
    backgroundSize.reduce((result, item) => {
      const { width, height } = item;
      return `${result}${width} ${height}, `;
    }, "");

  return css.slice(0, -2);
};

export {
  generateBackgroundSizeCss,
  generateRandomBackgroundSizeCss,
  generateBackgroundImageCss,
};
