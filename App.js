/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import COLORS from './android/COLORS';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#0c4074" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text style={styles.appNameStyle}> COVERAGE PORTAL </Text>
          <View style={{flexDirection: 'row'}}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={styles.firstDivider}
            />
          </View>
          <Text style={styles.welcomeTextStyle}> WELCOME </Text>
          <View style={{flexDirection: 'column'}}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Username"
              placeholderTextColor="#000000"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Password"
              placeholderTextColor="#000000"
              autoCapitalize="none"
            />

            <TouchableOpacity style={styles.signinButton}>
              <Text style={styles.signinButtonText}> Sign in </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.forgetText}>
            Forget your login details? Get help signing in.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: COLORS.common,
                height: 2,
                flex: 1,
                alignSelf: 'center',
              }}
            />
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: COLORS.common,
                alignSelf: 'center',
                paddingHorizontal: 5,
                fontSize: 24,
              }}>
              or sign in with
            </Text>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: COLORS.common,
                height: 2,
                flex: 1,
                alignSelf: 'center',
              }}
            />
          </View>

          <TouchableOpacity style={styles.signinGoogle}>
            <Text style={styles.signinGoogleText}> Google </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>
              {' '}
              REGISTER FOR AN ACCOUNT{' '}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    backgroundColor: '#10539a',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollView: {
    backgroundColor: '#10539a',
  },
  appNameStyle: {
    fontFamily: 'bold',
    color: '#dce5f2',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 10,
  },
  welcomeTextStyle: {
    color: COLORS.common,
    paddingTop: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  firstDivider: {
    backgroundColor: COLORS.common,
    flex: 1,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 30,
    paddingTop: 8,
    alignSelf: 'center',
  },
  input: {
    margin: 15,
    height: 60,
    fontSize: 20,
    flex: 1,
    borderRadius: 3,
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    borderWidth: 1,
  },
  signinButton: {
    margin: 15,
    height: 60,
    backgroundColor: COLORS.common,
  },
  signinButtonText: {
    margin: 15,
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    // eslint-disable-next-line no-dupe-keys
    color: COLORS.white,
  },
  signinGoogle: {
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
    height: 50,
    backgroundColor: '#2e73aa',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#225f98',
  },
  signinGoogleText: {
    top: 10,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  registerButton: {
    marginTop: 50,
    height: 60,
    backgroundColor: COLORS.common,
  },

  registerButtonText: {
    top: 20,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  forgetText: {
    textAlign: 'center',
    color: COLORS.white,
  },
});

export default App;
