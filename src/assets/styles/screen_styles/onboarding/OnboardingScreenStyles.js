import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, TextStyles} from '@app/constants';

export const OnboardingScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topContainer: {
    height: hp('45%'),
    backgroundColor: Colors.splashScreenBG,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: hp('4%'),
    paddingHorizontal: wp('5%'),
    zIndex: 1,
  },
  skipButtonText: {
    ...TextStyles.poppinsExtraLargerNormal,
    color: Colors.white,
  },
  mainImageContainer: {
    bottom: hp('8%'),
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  titleText: {
    ...TextStyles.poppinsThirtyTwoNormal,
    color: Colors.black,
    textAlign: 'center',
    paddingHorizontal: wp('4%'),
    paddingTop: hp('5%'),
  },
  descriptionText: {
    ...TextStyles.poppinsLargeLight,
    color: Colors.gray,
    textAlign: 'center',
    paddingHorizontal: wp('16%'),
    paddingTop: hp('3%'),
  },
  nextButtonContainer: {
    borderRadius: 40,
    paddingTop: hp('8%'),
  },
  nextButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});
