import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { colors } from '../../utils/colors';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../../utils/fonts';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MyCarouser() {
  const [activeSlide, setActiveSlide] = useState(0);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://zavalabs.com/sigadisbekasi/api/slider.php').then(res => {
      setData(res.data);
    });
  }, []);

  const [data, setData] = useState([]);

  const renderCarouselItem = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer} key={item.id}>
      <Image
        source={{ uri: item.image }}
        style={{ widht: 200, height: 150, resizeMode: 'cover' }}
      />
    </TouchableOpacity>
  );

  return (
    <View>
      <View
        style={{
          padding: 10,
          marginBottom: 10,
          borderBottomWidth: 10,
          backgroundColor: colors.primary,
          borderBottomColor: colors.secondary,
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[800],
            color: colors.white,

            fontSize: windowWidth / 18,
          }}>
          SIGADIS BEKASI
        </Text>
      </View>
      <Carousel
        loop={true}
        // layout="stack"
        layoutCardOffset={18}
        data={data}
        containerCustomStyle={styles.carousel}
        renderItem={renderCarouselItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={300}
        removeClippedSubviews={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  carousel: {
    // position: 'absolute',
    bottom: 0,
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: colors.black,
    opacity: 1,
    height: 140,
    width: 300,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    height: 50,
    width: 300,
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
  },
});
