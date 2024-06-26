import { StyleSheet } from 'react-native';
import { styleguide } from '@react-shared';

export const styles = StyleSheet.create({
  textBoxWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 24,
    marginHorizontal: 16,
  },
  bottomButtons: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  showSeedPhraseText: {
    ...styleguide.typography.actionText,
    color: styleguide.colors.labelSecondary,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    justifyContent: 'center',
    backgroundColor: styleguide.colors.gray(),
    borderColor: styleguide.colors.buttonBorder,
    borderWidth: 1,
    marginLeft: 8,
  },
  spinnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 62,
  },
  loadingLabel: {
    ...styleguide.typography.paragraphSmall,
    textAlign: 'center',
    marginTop: 24,
    color: styleguide.colors.white,
  },
});
