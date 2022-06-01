/* eslint-disable max-len */
import { bool, oneOf } from 'prop-types';
import { Variants } from './Variants';
import styles from './Logo.module.css';

export const Logo = ({ darkMode, medalOnly, variant }) => {
  const theme = new Variants({ theme: variant, medalOnly });
  const { operationFill, codeFill, medalFill, starFill } = theme;

  const operationFillColor = darkMode ? operationFill.dark : operationFill.light;
  const codeFillColor = darkMode ? codeFill.dark : codeFill.light;
  const starFillColor = darkMode ? starFill.dark : starFill.light;
  const medalFillColor = darkMode ? medalFill.dark : medalFill.light;
  const markOnlyViewbox = medalOnly ? '0 0 70 95.75' : '0 0 636.11 107';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={markOnlyViewbox}>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Artboard_1" data-name="Artboard 1">
          <g id="Large_logo" data-name="Large logo">
            <g id="letters" className={medalOnly ? styles.hide : null}>
              <g id="operation">
                <path
                  fill={operationFillColor}
                  d="M88.11,34l1.06,5.48a50.81,50.81,0,0,1,9.93-4.85,22.66,22.66,0,0,1,6.57-1.16A17.76,17.76,0,0,1,118.22,38q4.89,4.55,4.89,14.12V68q0,9-4.89,13.86t-13.43,4.87a45.54,45.54,0,0,1-6.63-.58,42.53,42.53,0,0,1-9-2.7V107h-9V34Zm1,41.22a42.46,42.46,0,0,0,8.23,2.65,36.24,36.24,0,0,0,6.65.64,15.66,15.66,0,0,0,4-.48,7.58,7.58,0,0,0,3.22-1.7,8.25,8.25,0,0,0,2.16-3.28,14.43,14.43,0,0,0,.79-5.14v-15c0-4-.84-6.8-2.53-8.32a9.76,9.76,0,0,0-6.75-2.27,13.64,13.64,0,0,0-3.48.53,38.88,38.88,0,0,0-4.17,1.37,44.09,44.09,0,0,0-4.27,2,39.74,39.74,0,0,0-3.8,2.28Z"
                />
                <path
                  fill={operationFillColor}
                  d="M142.11,64v3.49a12.24,12.24,0,0,0,1,5.35,10.14,10.14,0,0,0,2.87,3.6,11.9,11.9,0,0,0,4.19,2.06,18.74,18.74,0,0,0,4.87.63,21,21,0,0,0,6.07-1.06A17.12,17.12,0,0,0,167.85,74l5.65,6.24a21.13,21.13,0,0,1-8.84,5.67,32.45,32.45,0,0,1-9.78,1.53,28.48,28.48,0,0,1-8.37-1.22,20.63,20.63,0,0,1-7-3.6,16.76,16.76,0,0,1-4.71-6,19.09,19.09,0,0,1-1.73-8.36V54.37a22,22,0,0,1,1.58-8.47A18.69,18.69,0,0,1,139,39.44a19.34,19.34,0,0,1,6.62-4.07,24.09,24.09,0,0,1,8.45-1.43,25.28,25.28,0,0,1,8.51,1.38,19.46,19.46,0,0,1,6.67,3.91,17.27,17.27,0,0,1,4.3,6.2,21.17,21.17,0,0,1,1.52,8.2V64Zm24-10a14.69,14.69,0,0,0-1-5.61,10.77,10.77,0,0,0-2.6-3.87,9.91,9.91,0,0,0-3.82-2.22,15.49,15.49,0,0,0-4.61-.69,13.82,13.82,0,0,0-4.57.74,11.71,11.71,0,0,0-3.83,2.23,10.12,10.12,0,0,0-2.65,3.76,13.62,13.62,0,0,0-1,5.34V56h24Z"
                />
                <path
                  fill={operationFillColor}
                  d="M214.11,43.32a41.26,41.26,0,0,0-11.86,2.57,42.63,42.63,0,0,0-7.14,3.56V86h-9V34H194l1,8h.1a26,26,0,0,1,3.55-3,38.17,38.17,0,0,1,4.61-2.8,30.8,30.8,0,0,1,5.26-2.08,19.94,19.94,0,0,1,5.58-.82Z"
                />
                <path
                  fill={operationFillColor}
                  d="M251.8,80.91a44.61,44.61,0,0,1-10.1,4.51,28.89,28.89,0,0,1-7.07,1q-7.53,0-12-4.25t-4.5-11.57A13.14,13.14,0,0,1,220,63.28a16.17,16.17,0,0,1,4.81-4.83A20.16,20.16,0,0,1,231,55.79a25.5,25.5,0,0,1,5.91-.79h15.18V51c0-3.69-1-6.25-3-7.7s-4.92-2.18-8.69-2.18a34.49,34.49,0,0,0-6.65.8,18.15,18.15,0,0,0-7.9,4.09l-4.4-6.9A26,26,0,0,1,231.6,34a43,43,0,0,1,9.52-1.17q10.15,0,15.07,4.51t4.92,13.86V86h-7.94l-1-4.88ZM252.11,63H238.25a28.33,28.33,0,0,0-3.65.26A12.45,12.45,0,0,0,231,64.32a6.87,6.87,0,0,0-2.81,2.44A7.49,7.49,0,0,0,227,71a6.62,6.62,0,0,0,2.59,5.72,10.89,10.89,0,0,0,6.61,1.9,16.12,16.12,0,0,0,4.19-.58,34.48,34.48,0,0,0,4.23-1.43,43.77,43.77,0,0,0,4-1.85L252.11,73Z"
                />
                <path
                  fill={operationFillColor}
                  d="M304,85.1a30,30,0,0,1-6.33,1.41c-2.2.24-3.82.36-4.87.36q-8.28,0-12-3.81t-3.71-12.7V42h-8V34H277l2.2-12h6.95V34h15v8h-15V67.69a19.73,19.73,0,0,0,.58,5.25,8.93,8.93,0,0,0,1.57,3.29,4.78,4.78,0,0,0,2.46,1.65,12.18,12.18,0,0,0,3.35.42A33.58,33.58,0,0,0,298,78l4.55-.58Z"
                />
                <path
                  fill={operationFillColor}
                  d="M322.55,18.06a5.77,5.77,0,0,1-5.72,5.71,5.36,5.36,0,0,1-3.91-1.69,5.49,5.49,0,0,1-1.69-4,5.32,5.32,0,0,1,1.69-4,5.47,5.47,0,0,1,3.91-1.64,5.61,5.61,0,0,1,4,1.64A5.35,5.35,0,0,1,322.55,18.06ZM312.11,86V34h9V86Z"
                />
                <path
                  fill={operationFillColor}
                  d="M377.11,67.82a17.72,17.72,0,0,1-1.73,8,17.15,17.15,0,0,1-4.72,5.91,21,21,0,0,1-6.87,3.66,26.63,26.63,0,0,1-8.28,1.26,27,27,0,0,1-8.39-1.26,19.92,19.92,0,0,1-6.77-3.66,17.31,17.31,0,0,1-4.56-5.91,18.26,18.26,0,0,1-1.68-8V52.75a17.76,17.76,0,0,1,1.74-8,18.44,18.44,0,0,1,4.61-6A20.08,20.08,0,0,1,347.28,35a26.28,26.28,0,0,1,8.33-1.31A27.41,27.41,0,0,1,364.27,35a20.27,20.27,0,0,1,6.82,3.77,16.85,16.85,0,0,1,4.45,6,19.33,19.33,0,0,1,1.57,8Zm-9-13.46A12.71,12.71,0,0,0,367,48.69a10.91,10.91,0,0,0-3-3.79,11.34,11.34,0,0,0-4-2.09,15.84,15.84,0,0,0-4.29-.62,16.27,16.27,0,0,0-4.39.62,11.29,11.29,0,0,0-4,2.09,10.82,10.82,0,0,0-3,3.79,12.85,12.85,0,0,0-1.15,5.67V66a14.52,14.52,0,0,0,1,5.66,10.4,10.4,0,0,0,2.67,3.8,10,10,0,0,0,4,2.08,18.92,18.92,0,0,0,4.91.62,15.84,15.84,0,0,0,4.29-.62,11.47,11.47,0,0,0,4-2.08,11,11,0,0,0,3-3.8A12.7,12.7,0,0,0,368.11,66Z"
                />
                <path
                  fill={operationFillColor}
                  d="M413.82,33.48q7.67,0,12,4.82T430.11,52V86h-9V52.87q0-6.13-2.64-8.62a8.91,8.91,0,0,0-6.64-2.38,21.13,21.13,0,0,0-7.44,1.64,47.3,47.3,0,0,0-8.28,4.18V86h-9V34h8l1,5.76a60.31,60.31,0,0,1,6.05-3.35A35.47,35.47,0,0,1,407,34.52a22.75,22.75,0,0,1,6.84-1Z"
                />
              </g>
              <g id="code">
                <path
                  fill={codeFillColor}
                  d="M462.63,33.69a35.87,35.87,0,0,1,9.16,1.23,17,17,0,0,1,8.32,5.24L474.77,47a15.73,15.73,0,0,0-6.44-4,21.26,21.26,0,0,0-5.28-.79,14.67,14.67,0,0,0-4.14.63A10.54,10.54,0,0,0,455,44.88a11,11,0,0,0-2.83,3.8,13.3,13.3,0,0,0-1.1,5.67V66a13.8,13.8,0,0,0,1.05,5.67,10.87,10.87,0,0,0,2.72,3.8,10.11,10.11,0,0,0,3.82,2.08,15.71,15.71,0,0,0,4.35.62,20.94,20.94,0,0,0,5.6-.94,12.8,12.8,0,0,0,5.7-3.35l5.55,6.31a19.51,19.51,0,0,1-8.11,5.09,30.39,30.39,0,0,1-9,1.37,24.37,24.37,0,0,1-8.37-1.36,20.22,20.22,0,0,1-6.55-3.77,16.45,16.45,0,0,1-4.29-5.8,18.27,18.27,0,0,1-1.52-7.49V52.85a18.39,18.39,0,0,1,6.18-14A19.27,19.27,0,0,1,454.83,35,23.15,23.15,0,0,1,462.63,33.69Z"
                />
                <path
                  fill={codeFillColor}
                  d="M531.11,67.82a17.86,17.86,0,0,1-1.73,8,17.26,17.26,0,0,1-4.72,5.91,21.18,21.18,0,0,1-6.87,3.66,26.68,26.68,0,0,1-8.28,1.26,27,27,0,0,1-8.39-1.26,20,20,0,0,1-6.77-3.66,17.31,17.31,0,0,1-4.56-5.91,18.26,18.26,0,0,1-1.68-8V52.75a17.73,17.73,0,0,1,1.74-8,18.45,18.45,0,0,1,4.61-6A20.27,20.27,0,0,1,501.27,35a26.36,26.36,0,0,1,8.35-1.31A27.39,27.39,0,0,1,518.27,35a20.42,20.42,0,0,1,6.82,3.76,17,17,0,0,1,4.45,6,19.29,19.29,0,0,1,1.57,8Zm-9-13.46A12.71,12.71,0,0,0,521,48.69a10.8,10.8,0,0,0-3-3.79,11.38,11.38,0,0,0-4-2.09,16,16,0,0,0-4.29-.62,16.16,16.16,0,0,0-4.39.62,11.34,11.34,0,0,0-4,2.09,10.68,10.68,0,0,0-3,3.79,12.71,12.71,0,0,0-1.16,5.67V66a14.35,14.35,0,0,0,1,5.67,10.17,10.17,0,0,0,2.67,3.8,9.94,9.94,0,0,0,4,2.08,18.94,18.94,0,0,0,4.92.62,16,16,0,0,0,4.29-.62,11.52,11.52,0,0,0,4-2.08,10.83,10.83,0,0,0,3-3.8A12.71,12.71,0,0,0,522.11,66Z"
                />
                <path
                  fill={codeFillColor}
                  d="M576.14,87l-1.07-5.45a50.26,50.26,0,0,1-9.94,4.83,22.5,22.5,0,0,1-6.57,1.15,21.26,21.26,0,0,1-7-1.11,14.62,14.62,0,0,1-5.52-3.4,15.64,15.64,0,0,1-3.62-5.84,24.24,24.24,0,0,1-1.32-8.44V52.48a21,21,0,0,1,1.42-7.93,16.9,16.9,0,0,1,3.9-5.88A17.14,17.14,0,0,1,552.27,35a20.28,20.28,0,0,1,7.16-1.27,42.08,42.08,0,0,1,6.68.64,61.06,61.06,0,0,1,9,2.33V11h9V87Zm-1-41.68q-4.22-1.49-7.91-2.38a29.42,29.42,0,0,0-7-.9,10.09,10.09,0,0,0-7.17,2.49q-3,2.58-3,8.72V67.74q0,6,2.54,8.31a9.74,9.74,0,0,0,6.75,2.27,15.3,15.3,0,0,0,3.48-.48A27.13,27.13,0,0,0,567,76.52a41.9,41.9,0,0,0,4.22-2,33.36,33.36,0,0,0,3.9-2.37Z"
                />
                <path
                  fill={codeFillColor}
                  d="M603.11,64v3.49a12.24,12.24,0,0,0,1,5.35A10,10,0,0,0,607,76.43a11.83,11.83,0,0,0,4.19,2.07,18.67,18.67,0,0,0,4.86.63,21,21,0,0,0,6.08-1.06A17.12,17.12,0,0,0,628.86,74l5.66,6.24a21.1,21.1,0,0,1-8.85,5.67,32.4,32.4,0,0,1-9.78,1.53,28.55,28.55,0,0,1-8.38-1.22,20.73,20.73,0,0,1-7-3.6,16.85,16.85,0,0,1-4.71-6,19,19,0,0,1-1.73-8.36V54.37a22.15,22.15,0,0,1,1.57-8.47A18.71,18.71,0,0,1,600,39.44a19.24,19.24,0,0,1,6.62-4.07,24.09,24.09,0,0,1,8.45-1.43,25.43,25.43,0,0,1,8.5,1.37,19.55,19.55,0,0,1,6.67,3.92,17.34,17.34,0,0,1,4.31,6.19,21.26,21.26,0,0,1,1.52,8.21V64Zm24-10a14.72,14.72,0,0,0-1-5.61,10.65,10.65,0,0,0-2.6-3.86,9.73,9.73,0,0,0-3.82-2.22,15.19,15.19,0,0,0-4.62-.69,13.8,13.8,0,0,0-4.56.74,11.27,11.27,0,0,0-3.82,2.22,9.92,9.92,0,0,0-2.66,3.76,13.69,13.69,0,0,0-1,5.34V56h24Z"
                />
              </g>
            </g>
            <g id="mark">
              <polygon
                fill={medalFillColor}
                points="15.11 0 15.11 12.25 35.11 23.69 55.11 12.25 55.11 0 15.11 0"
              />
              <path
                fill={medalFillColor}
                d="M35.05,25.3A35.07,35.07,0,1,0,70.14,60.35,35.08,35.08,0,0,0,35.05,25.3Z"
              />
              <polygon
                fill={starFillColor}
                points="47.47 77.16 35.07 70.64 22.66 77.16 25.03 63.34 15 53.56 28.86 51.55 35.07 38.98 41.27 51.55 55.14 53.56 45.11 63.34 47.47 77.16"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

Logo.propTypes = {
  darkMode: bool,
  medalOnly: bool,
  variant: oneOf(['slate', 'blue', 'red', 'white']),
};

Logo.defaultProps = {
  darkMode: false,
  medalOnly: false,
  variant: 'blue',
};

export default Logo;
