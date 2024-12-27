module.exports = {
  presets: ['module:@react-native/babel-preset'],

  // The react-native-reanimated/plugin must be last in the plugins array. This is critical for react-native-reanimated to work properly.
  plugins: [
    'nativewind/babel', 
    'react-native-reanimated/plugin'],
};
