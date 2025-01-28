import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView
} from 'react-native'

function App() {
  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <Text style={styles.boldfont}>
            Hello World!
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
  boldfont: {
    fontSize: 500,
  }
})

export default App;