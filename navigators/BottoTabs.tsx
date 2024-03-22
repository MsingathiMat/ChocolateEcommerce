import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/CartScreen";
import { View } from "react-native";
import { BottomSheetVector } from "../components/SvgFactory";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,


        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          height: 100,
          margin:10,
          position:'absolute'
         
        },
        tabBarBackground: () => (
          <View
            style={{
              width: "100%",
              height: "100%",
              
              flexDirection: "row",
            }}
          >
            <View
              style={{
                backgroundColor: '#1A1A1A',
                height: "100%",
                width: 100,
                borderRadius:80
              }}
            />



<View style={{

 
top:0,
marginLeft:'auto',
marginRight:'auto',
left:-20
}}>



<View style={{

  height:5,
  width:70,
  backgroundColor:'#D7D7D7',
  position:'absolute',
  zIndex:4,
  left:90,
  borderRadius:3
  
}}/>
<BottomSheetVector color={""}/>

<View style={{

width:200,
height:50,
backgroundColor:'#1A1A1A',
top:-5
}}/>

</View>
            <View
              style={{
                backgroundColor: '#1A1A1A',
                height: "100%",
                width: 100,
                marginLeft: "auto",
              borderTopRightRadius:80,
              borderBottomRightRadius:80
              }}
            />
          </View>
        ),
      }}
    >
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
