import { useState } from 'react'
import { StyleSheet, View, Text, Image, TextInput, Button, TouchableHighlight } from 'react-native'
export default function App() {
  const [text, settext] = useState('')
  const handleChange = (val) => {
    settext(val)
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyle} defaultValue={text} placeholder='请输入文本' onChangeText={handleChange} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text}>dddddd</Text>
      <Text style={styles.text}>sss</Text>
      <Text style={[styles.text, styles.b]}>kkkk</Text>
      <Image style={{ width: 50, height: 50 }} source={require('./assets/favicon.png')} />
      <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://assets.guahao.cn/assets/hbyt-dev/img/mapicon2.png' }}></Image>
      <Button title='点击按钮' onPress={() => { console.log('我点击了按钮') }}></Button>
      <TouchableHighlight 
        onPress={() => { alert('dianl') }}
        onLongPress={() => {alert('长按')}}
        onPressIn={() => {
          alert("触摸开始");
        }}
        onPressOut={() => {
          alert("触摸结束");
        }}
      >
        <View>
          <Text>按钮</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'blue',
    fontSize: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'green',
    margin: 3,
  },
  b: {
    fontWeight: 'bold'
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#3c3c3c',
    borderStyle: 'solid',
    width: 150,
    height: 30,
    padding: 3,
  }
})