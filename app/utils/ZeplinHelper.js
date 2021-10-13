import { Dimensions } from 'react-native';

const dimension = Dimensions.get('window')
export  const percentage = {
  getWidth(x) {
    x = x / 100;
    return Math.floor(x * dimension.width)
  },
  getHeight(y) {
    y = y / 100
    return Math.floor(y * dimension.height)
  },
  getPrincipalWidth(y) {
    let m = Math.min(percentage.getHeight(56.6), this.getWidth(100))
    return Math.round(m * y / 100)
  }
}
const  ZeplinConstraints = {
  screenWidth: 375,
  screenHeight : 662,
}

export const ZeplinGetActualHeight = (height) => percentage.getHeight((height / ZeplinConstraints.screenHeight) * 100);
export const ZeplinGetHeight = (height) => percentage.getHeight(Math.max((height / ZeplinConstraints.screenHeight) * 100, 0.5));
export const ZeplinGetWidth = (width) => percentage.getWidth(Math.max((width / ZeplinConstraints.screenWidth) * 100, 0.5)); 
export const ZeplinGetActualWidth = (width) => percentage.getWidth((width / ZeplinConstraints.screenWidth) * 100); 