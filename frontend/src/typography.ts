export const fontUrls = {
  bryantBold: '/fonts/bryant/2005_iannnnnBMX/2005_iannnnnBMX.ttf',
  // robotoMono: '',
};

export const computerTextConfig = (fontSize:number = 0.27) => ({
  fontSize,
  font: fontUrls.bryantBold,
  letterSpacing: 0 * fontSize,
});
