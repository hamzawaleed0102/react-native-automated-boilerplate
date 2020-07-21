// import RNImagePicker from 'react-native-image-picker';
// const options = {
//   title: 'Select Avatar',
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//     cameraRoll: false,
//   },
//   maxWidth: 400,
//   maxHeight: 400,
//   quality: 0.8,
//   allowsEditing: true,
// };
// const ImagePicker = async () => {
//   return new Promise((res, rej) => {
//     RNImagePicker.showImagePicker(options, async (response) => {
//       if (response.didCancel) {
//         rej(response.error);
//         return;
//       } else if (response.error) {
//         rej(response.error);
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         console.log('DISPATCHING NEW PROFILE PICTU');
//         res(response);
//       }
//     });
//   });
// };
// export default ImagePicker;
