import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { colors } from '../../utils/colors';
import { fonts, windowHeight, windowWidth } from '../../utils/fonts';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { color } from 'react-native-elements/dist/helpers';
import { getData } from '../../utils/localStorage';
import { useIsFocused } from "@react-navigation/native";

export default function MyDashboard({ tipe }) {

  const isFocused = useIsFocused();

  useEffect(() => {

    if (isFocused) {
      getData('foto_masuk').then(res => {
        setfoto_masuk(res)
      })


      getData('foto_pulang').then(res => {
        console.log('foto pulang', res)
        setfoto_pulang(res)
      })
    }

  }, [isFocused])

  const navigation = useNavigation();

  const [foto_masuk, setfoto_masuk] = useState('https://zavalabs.com/nogambar.jpg');
  const [foto_pulang, setfoto_pulang] = useState('https://zavalabs.com/nogambar.jpg');



  return (
    <View>
      <View
        style={{
          flex: 1,

        }}>
        <View style={{ padding: 10, flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Masuk', {
              tipe: tipe
            })}
            activeOpacity={1.0}>
            <Image style={styles.image} source={{ uri: foto_masuk == null ? 'https://zavalabs.com/nogambar.jpg' : foto_masuk }} />
            <View
              style={{
                top: 0,
                paddingLeft: 10,
                paddingRight: 10,
                position: 'absolute',
                backgroundColor: colors.primary,
                borderBottomRightRadius: 10,
                borderBottomWidth: 5,
                borderBottomColor: colors.secondary,
              }}>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  color: colors.white,
                  fontSize: windowWidth / 23,
                }}>
                ABSEN MASUK
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Keluar', {
              tipe: tipe
            })}
            activeOpacity={1.0}>
            <Image style={styles.image} source={{ uri: foto_pulang == null ? 'https://zavalabs.com/nogambar.jpg' : foto_pulang }} />
            <View
              style={{
                top: 0,
                paddingLeft: 10,
                paddingRight: 10,
                position: 'absolute',
                backgroundColor: colors.primary,
                borderBottomRightRadius: 10,
                borderBottomWidth: 5,
                borderBottomColor: colors.secondary,
              }}>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  color: colors.white,
                  fontSize: windowWidth / 23,
                }}>
                ABSEN PULANG
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
  },
  card: {
    flex: 1,
    margin: 5,
    height: 200,
    shadowColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: -10,
      height: 2,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5.32,
    // elevation: 5,
    borderRadius: 5,
    overflow: 'hidden',
    // backgroundColor: colors.success,
    marginBottom: 10,
    justifyContent: 'center',


  },
  image: {
    height: 400,
    resizeMode: 'contain',
  },
  detailsContainer: {
    padding: 10,
    flex: 1,
  },
  detailsContainerButton: {
    paddingHorizontal: 5,
  },
  title: {
    marginBottom: 7,
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 18,
    color: colors.white,
  },
  subTitle: {
    // flex: 1,
    // backgroundColor: 'red',
    fontFamily: fonts.secondary[600],
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
});
