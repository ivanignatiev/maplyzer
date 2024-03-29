import { UIMetrics } from "./UIMetrics";

export const UITheme = {
  sizes: {
    v1: UIMetrics.verticalScale(4),
    v2: UIMetrics.verticalScale(6.47),
    v3: UIMetrics.verticalScale(10.47),
    v4: UIMetrics.verticalScale(16.94),
    v5: UIMetrics.verticalScale(27.41),
    v6: UIMetrics.verticalScale(44.35),
    v7: UIMetrics.verticalScale(71.76),
    v8: UIMetrics.verticalScale(116.11),
    v9: UIMetrics.verticalScale(187.87),
    h1: UIMetrics.horizontalScale(4),
    h2: UIMetrics.horizontalScale(6.47),
    h3: UIMetrics.horizontalScale(10.47),
    h4: UIMetrics.horizontalScale(16.94),
    h5: UIMetrics.horizontalScale(27.41),
    h6: UIMetrics.horizontalScale(44.35),
    h7: UIMetrics.horizontalScale(71.76),
    h8: UIMetrics.horizontalScale(116.11),
    h9: UIMetrics.horizontalScale(187.87),
  },
  colors_alpa: {
    prc00: '00',
    prc10: '1A',
    prc20: '33',
    prc25: '40',
    prc30: '4D',
    prc40: '66',
    prc50: '80',
    prc60: '99',
    prc70: 'B3',
    prc75: 'BF',
    prc80: 'CC',
    prc90: 'E6',
    prc100: 'FF',
  },
  colors: {
    c1: '#D18058' + UITheme.colors_alpa.prc100,
    c2: '#4390D1' + UITheme.colors_alpa.prc100,
    c3: '#6DD191' + UITheme.colors_alpa.prc100,
    c4: '#2A2929' + UITheme.colors_alpa.prc100,
    c5: '#969696' + UITheme.colors_alpa.prc100,
    c6: '#969696' + UITheme.colors_alpa.prc50,
    c6: '#969696' + UITheme.colors_alpa.prc25,
  },
};