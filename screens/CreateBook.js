import React, { useState } from 'react';
import {StyleSheet, Text, View, Modal, Alert,KeyboardAvoidingView,} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateBook = ({ navigation, route }) => {
  const getDetails = (type) => {
    if (route.params) {
      switch (type) {
        case 'title':
          return route.params.title;
        case 'year':
          return route.params.year;
        case 'author':
          return route.params.author;
        case 'numberPages':
          return route.params.numberPages;
        case 'picture':
          return route.params.picture;
        case 'edits':
          return route.params.edits;
      }
    }
    return '';
  };

  const [title, setTitle] = useState(getDetails('title'));
  const [year, setYear] = useState(getDetails('year'));
  const [author, setAuthor] = useState(getDetails('author'));
  const [numberPages, setNumberPages] = useState(getDetails('numberPages'));
  const [picture, setPicture] = useState(getDetails('picture'));
  const [edits, setEdits] = useState(getDetails('edits'));
  const [modal, setModal] = useState(false);
  const [enableshift, setenableShift] = useState(false);

  const submitData = () => {
    fetch('http://192.168.0.115:3000/send-data', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        author,
        year,
        numberPages,
        picture,
        edits,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.name} foi cadastrado com sucesso!`);
        navigation.navigate('Home');
      })
      .catch((err) => {
        Alert.alert('alguma coisas deu errado' + err);
      });
  };

  const updateDetails = () => {
    fetch('http://192.168.0.115:3000/update', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: route.params._id,
        title,
        author,
        year,
        numberPages,
        picture,
        edits,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.name} foi editado com sucesso!`);
        navigation.navigate('Home');
      })
      .catch((err) => {
        Alert.alert('alguma coisa deu errado');
      });
  };

  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split('.')[1]}`,
          name: `test.${data.uri.split('.')[1]}`,
        };
        handleUpload(newfile);
      }
    } else {
      Alert.alert('você precisa de permissão para isso');
    }
  };
  const pickFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split('.')[1]}`,
          name: `test.${data.uri.split('.')[1]}`,
        };
        handleUpload(newfile);
      }
    } else {
      Alert.alert('você precisa de permissão para isso');
    }
  };

  const handleUpload = (image) => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'bookApp');
    data.append('cloud_name', 'dxnoiuj66');

    fetch('https://api.cloudinary.com/v1_1/dxnoiuj66/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPicture(data.url);
        setModal(false);
      })
      .catch((err) => {
        Alert.alert('erro durante o upload');
      });
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.root}
      enabled={enableshift}
    >
      <View>
        <TextInput
          label="Título"
          style={styles.inputStyle}
          value={title}
          onFocus={() => setenableShift(false)}
          theme={theme}
          mode="outlined"
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          label="Autor"
          style={styles.inputStyle}
          value={author}
          theme={theme}
          onFocus={() => setenableShift(false)}
          mode="outlined"
          onChangeText={(text) => setAuthor(text)}
        />
        <TextInput
          label="Ano da publicação"
          style={styles.inputStyle}
          value={year}
          theme={theme}
          onFocus={() => setenableShift(false)}
          keyboardType="number-pad"
          mode="outlined"
          onChangeText={(text) => setYear(text)}
        />

        <TextInput
          label="Número de Páginas"
          style={styles.inputStyle}
          value={numberPages}
          theme={theme}
          onFocus={() => setenableShift(true)}
          keyboardType="number-pad"
          mode="outlined"
          onChangeText={(text) => setNumberPages(text)}
        />
        <TextInput
          label="Número da Edição"
          style={styles.inputStyle}
          value={edits}
          theme={theme}
          onFocus={() => setenableShift(true)}
          keyboardType="number-pad"
          mode="outlined"
          onChangeText={(text) => setEdits(text)}
        />
        <Button
          style={styles.inputStyle}
          icon={picture == '' ? 'upload' : 'check'}
          mode="contained"
          theme={theme}
          onPress={() => setModal(true)}
        >
          Upload de Imagem
        </Button>
        {route.params ? (
          <Button
            style={styles.inputStyle}
            icon="content-save"
            mode="contained"
            theme={theme}
            onPress={() => updateDetails()}
          >
            Atualizar Detalhes
          </Button>
        ) : (
          <Button
            style={styles.inputStyle}
            icon="content-save"
            mode="contained"
            theme={theme}
            onPress={() => submitData()}
          >
            Salvar
          </Button>
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            setModal(false);
          }}
        >
          <View style={styles.modalView}>
            <View style={styles.modalButtonView}>
              <Button
                icon="camera"
                theme={theme}
                mode="contained"
                onPress={() => pickFromCamera()}
              >
                Câmera
              </Button>
              <Button
                icon="image-area"
                mode="contained"
                theme={theme}
                onPress={() => pickFromGallery()}
              >
                Galeria
              </Button>
            </View>
            <Button theme={theme} onPress={() => setModal(false)}>
              Cancelar
            </Button>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
};

const theme = {
  colors: {
    primary: '#46737F',
  },
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 5,
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: 'white',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default CreateBook;