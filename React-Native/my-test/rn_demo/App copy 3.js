import {useState} from 'react'
import {Image,StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as ImageSharing from 'expo-sharing'
// npm i expo-image-picker  图片选择库
// npm i expo-sharing
export default function App() {
  const [localUri, setlocalUri] = useState('')
  const openImagePickerAsync = async () => {
    // 异步的选择图片
    // 1 获取一下权限
    const premissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // alert(premissionResult.granted)
    if(premissionResult.granted === false){
      alert("需要访问相机胶卷的权限");
      return
    }
    // 没有进入到上面的if就获取成功权限
    // 异步打开手机相册 
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult)
    if(pickerResult.cancelled){
      // 进入说明用户没有选择
      return
    } 
    setlocalUri(pickerResult.uri)
  }
  const goBack = async ()=> {
    setlocalUri('')
  }
  // 分享图片的回调
  const openShareImageAsync = async ()=> {
    await ImageSharing.shareAsync(localUri);
  }
  if(localUri) {
      return (<View style={styles.container}>
        {/* 显示用户选择的图片 */}
        <Image  style={styles.thumbnail} source={{uri:localUri}}></Image>
        <TouchableOpacity style={styles.button} onPress={openShareImageAsync}>
          <Text style={styles.buttonText}>分享照片</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text style={styles.buttonText}>返回上一页</Text>
        </TouchableOpacity>
      </View>)
  }
  return (
    <View style={styles.container}>
      {/* logo图片 */}
      <Image source={require('./assets/favicon.png')}/>
      {/* 提示文字 */}
      <Text style={styles.instructions}>按下按钮与朋友分享手机中的图片</Text>
      {/* 分享照片的按钮 */}
      <Text>123</Text> 
      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
          <Text style={styles.buttonText}>选择照片</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});