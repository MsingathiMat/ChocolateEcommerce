import { View, Text, FlatList, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import React from "react";

import { BlurView } from 'expo-blur';
import { CartIcon } from "./SvgFactory";




    



const ItemCard = () => {

    const ScreenWidth= Dimensions.get('window').width
  const ItemsArray = [
    {
     
      "id": "cltx36bc10tnh072tt0hca7m9",
      "isItemInStock": true,
      "itemDescription": "Coding",
      "itemName": "Test",
      "itemPrice": "234",
      "itemType": "Coded",
      "imageUrl": "https://ap-southeast-2.graphassets.com/cltsoxwu70b01081fgxvw6hcm/clu2tp9cp0ubh072m2efhw1jc",
      "publishedAt": null,
      "updatedAt": "2024-03-18T15:46:14.456909+00:00"
    },
    {
     
        "id": "cltx36bc10tnh072tt0hca75m9",
        "isItemInStock": true,
        "itemDescription": "Coding",
        "itemName": "Test",
        "itemPrice": "234",
        "itemType": "Coded",
        "imageUrl": "https://ap-southeast-2.graphassets.com/cltsoxwu70b01081fgxvw6hcm/clu2tp9bt0sjb071fd94myxkx",
        "publishedAt": null,
        "updatedAt": "2024-03-18T15:46:14.456909+00:00"
      },
      {
     
        "id": "cltx36bc10tnh520572tt0hca7m9",
        "isItemInStock": true,
        "itemDescription": "Coding",
        "itemName": "Test",
        "itemPrice": "234",
        "itemType": "Coded",
        "imageUrl": "https://ap-southeast-2.graphassets.com/cltsoxwu70b01081fgxvw6hcm/clu2tp9cp0ubh072m2efhw1jc",
        "publishedAt": null,
        "updatedAt": "2024-03-18T15:46:14.456909+00:00"
      },
      {
     
        "id": "cltx36bc120tnh0r72tt0hca75m9",
        "isItemInStock": true,
        "itemDescription": "Coding",
        "itemName": "Test",
        "itemPrice": "234",
        "itemType": "Coded",
        "imageUrl": "https://ap-southeast-2.graphassets.com/cltsoxwu70b01081fgxvw6hcm/clu2tp9bt0sjb071fd94myxkx",
        "publishedAt": null,
        "updatedAt": "2024-03-18T15:46:14.456909+00:00"
      },
      {
     
        "id": "cltx36bc10tnh07452tt0hca75m9",
        "isItemInStock": true,
        "itemDescription": "Coding",
        "itemName": "Test",
        "itemPrice": "234",
        "itemType": "Coded",
        "imageUrl": "https://ap-southeast-2.graphassets.com/cltsoxwu70b01081fgxvw6hcm/clu2tp9bt0sjb071fd94myxkx",
        "publishedAt": null,
        "updatedAt": "2024-03-18T15:46:14.456909+00:00"
      }
  ];

  const NavigateTo = () => {};
  const AddToCArt = () => {};


  const ItemContent = ({url}:{url:string}) => {
    return (


        <View style={{
            width:ScreenWidth,
            height:300,
            alignItems:'center'
        }}>

<View style={{

width:ScreenWidth-70,
height:300,
borderRadius:50,
overflow:'hidden',
backgroundColor:'#FFEBED',
padding:18,
paddingTop:34
}}>

<Text style={{fontSize:26, fontWeight:'bold'}}> {`Good \n Source`} </Text>

<View style={{

    flex:1
}}></View>
<View>

  <BlurView intensity={100}  tint={'light'}  style={{

    height:70,
width:250,
    borderRadius:40,
    marginLeft:5,
   borderColor:'white',
   borderWidth:1.7,
   overflow:'hidden',
   justifyContent:'space-between',
   paddingHorizontal:30,
   paddingRight:7
   ,
   alignItems:'center',
   flexDirection:'row'
    }}>

  <Text style={{color:'#1A1A1A', fontSize:20, fontWeight:'900'}}>R08.00</Text>

  <View style={{

    backgroundColor:'#1A1A1A',
    height: 55,
    width:82,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
  }}>
<CartIcon color="white"/>

  </View>
  </BlurView>
</View>
<ImageBackground resizeMode="contain"  source={{ uri:url }} style={{

width:280,
height:300,
transform:[{rotate:'30deg'}],
position:'absolute',
zIndex:-1,
top:40,
left:80

}} >



</ImageBackground>

</View>
            
        </View>
    )
  };
  return (
    <View>
      <FlatList

      pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={ItemsArray}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {}}>
            <ItemContent url={item.imageUrl} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ItemCard;
