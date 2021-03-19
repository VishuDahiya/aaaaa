import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import imagePath from "../constant/imagePath";

export default function ShowCart(props) {
  let { data } = props;
  let { image1, name, type, discountPrice, originalPrice, offPrice } = data;
  return (
    <View style={{ backgroundColor: "whitesmoke" }}>
      <View style={{ backgroundColor: "white", padding: 10, marginBottom: 9 }}>
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <Image source={image1} style={{ height: 180, width: 150 }} />
          <View
            style={{ flexDirection: "column", marginLeft: 10, marginTop: 10 }}
          >
            <Text style={{ fontWeight: "900", color: "black", fontSize: 18 }}>
              {name}
            </Text>
            <Text style={{ color: "grey", fontSize: 14, marginBottom: 10 }}>
              {type}
            </Text>

            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    borderRadius: 1,
                    borderColor: "black",
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  Size: 9
                </Text>
                <Text style={{ fontWeight: "bold" }}>Qty: 1</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 10, fontWeight: "bold" }}>
                  {discountPrice}
                </Text>
                <Text style={{ marginRight: 10, color: "grey" }}>
                  {originalPrice}
                </Text>
                <Text style={{ color: "#E56717" }}>{offPrice}</Text>
              </View>
              <Text style={{ color: "green", marginTop: 3 }}>
                Coupon Discount: 18
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 5,
            borderTopWidth: 1,
            borderColor: "whitesmoke",
            padding: 7,
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 12, color: "grey", fontWeight: "bold" }}>
              REMOVE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 12, color: "grey", fontWeight: "bold" }}>
              Move To Wishlist
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
