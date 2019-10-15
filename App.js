import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Navbar from './src/Containers/Navbar'


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView>

        <Navbar />

      </SafeAreaView>
    </>
  );
};


export default App;
