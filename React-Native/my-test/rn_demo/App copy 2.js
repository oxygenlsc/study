import React from "react";
import { Image, ScrollView, Text,FlatList,SectionList } from "react-native";

const logo = {
  uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F31%2F92%2F5810d2ed3fda3_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654851583&t=cebc2481560183caea4c8dca86fa88b6",
  width: 64,
  height: 64,
};
const data = [{
  key:'1',
  name:'lisc'
},
{
  key:'2',
  name:'lisc'
},
{
  key:'3',
  name:'lisc'
},{
  key:'4',
  name:'lisc'
}]

export default function App() {
  return (
    // <FlatList
    // style={{padding:20,marginTop:20}}
    // data={data}
    // renderItem={({item})=>{
    //   return (<Text style={{height:50,width:300 ,borderColor:'red',borderWidth:1,marginTop:10,marginLeft:'auto',marginRight:'auto'}}>{item.name+item.key}</Text>)
    // }}
    <SectionList
    style={{padding:20,marginTop:20}}
    sections={[
      { title: "D", data: ["Devin", "Dan", "Dominic"] },
      {
        title: "a",
        data: [
          "Jackson",
          "James",
          "Jillian",
          "Jimmy",
          "Joel",
          "John",
          "Julie",
          "Jackson",
          "James",
          "Jillian",
          "Jimmy",
          "Joel",
          "John",
          "Julie",
          "Jackson",
          "James",
          "Jillian",
          "Jimmy",
          "Joel",
          "John",
          "Julie",
          "Jackson",
          "James",
          "Jillian",
          "Jimmy",
          "Joel",
          "John",
          "Julie",
        ],
      },
    ]}
    renderItem={({item})=>{
      return (<Text style={{height:50,width:300 ,borderColor:'red',borderWidth:1,marginTop:10,marginLeft:'auto',marginRight:'auto'}}>{item}</Text>)
    }}
    renderSectionHeader={({ section }) => (
      <Text>{section.title}</Text>
    )}
    />
    // <ScrollView>
    //   <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Text style={{ fontSize: 96 }}>If you like</Text>
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Text style={{ fontSize: 96 }}>Scrolling down</Text>
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Text style={{ fontSize: 96 }}>What's the best</Text>
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Text style={{ fontSize: 96 }}>Framework around?</Text>
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Image source={logo} />
    //   <Text style={{ fontSize: 80 }}>React Native</Text>
    // </ScrollView>
  );
}