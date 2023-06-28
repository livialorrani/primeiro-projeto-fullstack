import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper'
import { MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const Profile = (props) => {

    const { _id, title, picture, year, numberPages, author, edits } = props.route.params.item
    const deleteBook = () => {
        fetch("http://192.168.0.115:3000/delete", {
            method: "delete",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: _id
            })
        })
            .then(res => res.json())
            .then(deletedBook => {
                Alert.alert(`${deletedBook.title} foi deletado!`)
                props.navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("alguma coisa deu errado")
            })
    }
    return (
        <View style={styles.root}>
            <LinearGradient
                colors={["#0033ff", "#6bc1ff"]}
                style={{ height: "20%" }}
            />
            <View style={{ alignItems: "center" }}>
                <Image
                    style={{ width: 140, height: 140, borderRadius: 140 / 2, marginTop: -50 }}
                    source={{ uri: picture }}
                />
            </View>
            <View style={{ alignItems: "center", margin: 15 }}>
                <Title>{title}</Title>
                <Text style={{ fontSize: 15 }}>{title}</Text>
            </View>
            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="person" size={32} color="#46737F" />
                    <Text style={styles.mytext}>{author}</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <FontAwesome5 name="calendar-alt" size={32} color="#46737F" />
                    <Text style={styles.mytext}>{year}</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <MaterialCommunityIcons name="book-open-page-variant" size={32} color="#46737F" />
                    <Text style={styles.mytext}>{numberPages}</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <MaterialCommunityIcons name="book-edit" size={32} color="#46737F" />
                    <Text style={styles.mytext}>{edits}</Text>
                </View>
            </Card>
            <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
                <Button
                    icon="account-edit"
                    mode="contained"
                    theme={theme}
                    onPress={() => {
                        props.navigation.navigate("Create",
                            { _id, title, picture, year, numberPages, author, edits }
                        )
                    }}>
                    Editar
            </Button>
                <Button
                    icon="delete"
                    mode="contained"
                    theme={theme}
                    onPress={() => deleteBook()}>
                    Deletar
            </Button>
            </View>


        </View>
    )
}

const theme = {
    colors: {
        primary: "#46737F"
    }
}


const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    mycard: {
        margin: 3
    },
    cardContent: {
        flexDirection: "row",
        padding: 8
    },
    mytext: {
        fontSize: 18,
        marginTop: 3,
        marginLeft: 5
    }
})
export default Profile;