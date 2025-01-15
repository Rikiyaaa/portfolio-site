export const fontUrls = {
    bryantBold: '/fonts/bryant/NotoSansThai-Medium.ttf',
    // robotoMono: '',
  };
  
  export const computerTextConfig = (fontSize:number = 0.27) => ({
    fontSize,
    font: fontUrls.bryantBold,
    letterSpacing: 0 * fontSize,
  });
  