import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { ReactElement, cloneElement } from "react";

import { Feather } from "@expo/vector-icons";
import { ChipIcon, Choco, SweetIcon } from "./SvgFactory";


type CatedoryDataType={

    id: number,
    name: string,
    icon: React.ReactNode,
}

const  RenterText= ({color}:{color:string})=>{

  return (
    <Text        style={{
      width:35, 
      height:35,
      paddingLeft:8,
      paddingTop:6,
      color:color, 
      justifyContent:'center',
    fontSize:15,
      alignItems:'center' }}>All</Text>
  )
}
const CategoryPicker = ({ClientIndex,HandleActive}:{HandleActive:(index:number)=>void,ClientIndex:number}) => {
  const CatergoryArray = [
    {
      id: 1,
      name: "",
      icon: <RenterText color="white"/> ,
    },
    {
        id: 2,
        name: "Chips",
        icon: <ChipIcon color={'#FFEC89'}/>,
      },
      {
        id: 3,
        name: "Sweet",
        icon: <SweetIcon color={'#FFEC89'}/>,
      },
      {
          id: 4,
          name: "Choco",
          icon: <Choco color={'#FFEC89'}/>,
        },
        {
          id: 5,
          name: "",
          icon: <RenterText color="white"/> ,
        },
        {
            id: 6,
            name: "Chips",
            icon: <ChipIcon color={'#FFEC89'}/>,
          },
          {
            id: 7,
            name: "Sweet",
            icon: <SweetIcon color={'#FFEC89'}/>,
          },
          {
              id: 8,
              name: "Choco",
              icon: <Choco color={'#FFEC89'}/>,
            },
    
  ];


const CategoryButton=({item, isActive}:{item:CatedoryDataType, isActive:boolean})=>{

const BlackIcon = cloneElement(item.icon as ReactElement, {color:'black'})

return(

    <View style={{

        backgroundColor:isActive?'#1A1A1A':'#E8E8E8',
        marginRight:10,
        height:60,
        width:isActive?'auto':30,
        paddingHorizontal:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        flexDirection:'row',
        gap:5
    }}>
        
        
        {

isActive?item.icon:BlackIcon

        }
        
        {

            isActive?<Text style={{color:'white'}}> {item.name}</Text>:null
        }
        
        
        </View>
)

}
  return (
    <View>
      <FlatList

showsHorizontalScrollIndicator={false}
horizontal={true}
        data={CatergoryArray}
        renderItem={({ item }) => (
     

            <TouchableOpacity onPress={()=>{HandleActive(item.id)}}>


<CategoryButton isActive={item.id==ClientIndex} item={item}/>
            </TouchableOpacity>
        )}

        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default CategoryPicker;
