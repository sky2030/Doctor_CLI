import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList, Dimensions, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-community/async-storage";
const screenWidth = Math.round(Dimensions.get("window").width);

export default function SupportScreen({ navigation, route }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);



  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {

    });

    return unsubscribe;
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <MaterialIcons
          name="navigate-before"
          size={28}
          onPress={() => navigation.goBack()}
          style={styles.back}
        />
        <Text style={styles.titletext}>Contact us </Text>
      </View>


      <View style={styles.SupportCard}>
        <View style={styles.header}>
          <Text style={styles.headtext1}> Application Support</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.title8}>
            <Text style={styles.headtext2}>Phone Number</Text>
            <Text style={styles.headtext2}>0120-4365125</Text>
          </View>
          <View style={styles.title8}>
            <Text style={styles.headtext2}>Email Address</Text>
            <Text style={styles.headtext2}>vrcure@smhs.motherson.com </Text>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  head: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  back: {
    padding: 10,
    color: "#d02860",
  },

  titletext: {
    color: "#d02860",
    fontSize: 21,
    fontWeight: "900",
    textAlign: "center",
    width: "80%",
  },

  footer: {
    backgroundColor: "#58DCFC",
    padding: 20,
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  bottomtext: {
    color: "#fff",
    fontSize: 15,
  },
  headtext: {
    color: "#2E76B6",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    borderColor: "#2E76B6",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  headtext1: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  emergencytxt: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },

  headtext2: {
    color: "#4E557C",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
    marginTop: 8,
    marginLeft: 10,
  },
  header: {
    color: "white",
    backgroundColor: "#d02860",
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  cardfooter: {
    backgroundColor: "#192161",
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  contactCard: {
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#E5F0ED",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 10,
  },
  SupportCard: {
    marginHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#E5F0ED",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,

  },

  emergencybody: {
    width: '100%',
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingBottom: 10,
  },
  body: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingBottom: 10,
  },

  title7: {
    flexDirection: "row",
  },
  title8: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    flexDirection: "column",
  },
});
