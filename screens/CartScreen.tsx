import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { request, gql, GraphQLClient } from "graphql-request";
import { Feather } from "@expo/vector-icons";
import CategoryPicker from "../components/CategoryPicker";
import { MenuIcon } from "../components/SvgFactory";

type ItemsType = {
  items: [
    {
      createdAt: string;
      id: string;
      imageUrl: string;
      isItemInStock: boolean;
      itemDescription: string;
      itemName: string;
      itemPrice: string;
      itemType: string;
    }
  ];
};

const CartScreen = () => {
  const [ItemsArray, setItemsArray] = useState<ItemsType | null>(null);

  const [ActiveCategoryIndex,setActiveCategoryIndex]=useState(0)


const HandlePickedCategory =(index:number)=>{

    setActiveCategoryIndex(index)
}

  const GetData = async () => {
    const GqlString = gql`
      query Items {
        items {
          createdAt
          id
          isItemInStock
          itemDescription
          itemName
          itemPrice
          itemType
          imageUrl
          publishedAt
        }
      }
    `;
    const result = await request(
      "https://api-ap-southeast-2.hygraph.com/v2/cltsoxuw602fo07v5llf2fbfs/master",
      GqlString
    )
      .then((response: ItemsType) => {
        setItemsArray(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "white",

          height: "100%",
          width: "100%",
        }}
      >
      <View style={{

        padding:30
      }}>





      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 23,
              textTransform: "capitalize",
              fontWeight: "300",
            }}
          >
            {" "}
            {`Order from the \n best of `}{" "}
            <Text style={{ fontWeight: "bold" }}>Snacks</Text>
          </Text>

      <View style={{

        borderColor:'#E8E8E8',
        borderWidth:3,

        width:60,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50
      }}>

   <MenuIcon color='black'/>
      </View>
        </View>
      </View>

      <CategoryPicker ClientIndex ={ActiveCategoryIndex} HandleActive={HandlePickedCategory} ></CategoryPicker>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
