import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const UIMetrics = {
  baseWidth: 430,
  baseHeight: 932,
  horizontalScale: (size) => (width / baseWidth) * size,
  verticalScale: (size) => (height / baseHeight) * size,
  moderateScale: (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor,
};
