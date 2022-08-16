import { Pressable, View, Image, Text, StyleSheet} from 'react-native'

export default function MovieItemCell(props){
  const movieInfo = props.movie.item;

  return (
    <Pressable onPress={props.onPress}>
        <View style={styles.container}>
          <Image source={{ uri: moveInfo.movieImg }} style={styles.thumbnail} />
          <View style={styles.rightContainer}>
              <Text style={styles.title}>{moveInfo.title}</Text>
              <Text style={styles.year}>{moveInfo.year}</Text>
          </View>
        </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
  },
  thumbnail: {
    width: 110,
    height: 150,
    backgroundColor: "#f0f0f0",
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "left",
  },
  year: {
    textAlign: "left",
    color: "#777777",
    marginTop: 10,
  },
  horizontalView: {
    flexDirection: "row",
    marginTop: 10,
  },
  titleTag: {
    color: "#666666",
  },
  score: {
    color: "#ff8800",
    fontWeight: "bold",
  },
  name: {
    color: "#333333",
    flex: 1,
  },
});