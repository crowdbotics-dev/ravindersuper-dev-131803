import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.yswYKTtt}>{"Ravinder test user"}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  yswYKTtt: {
    width: 270,
    height: 152,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    fontFamily: "Crimson Text",
    position: "absolute",
    left: 33,
    top: 139
  }
});
export default Untitled2;