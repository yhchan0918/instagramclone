import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import moment from 'moment';
import {useRoute, useNavigation} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import Feather from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import {listStorys} from '../../graphql/queries';
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';
import {TextInput} from 'react-native-gesture-handler';

const StoryScreen = () => {
  const route = useRoute();
  const [stories, setStories] = useState(null);
  const [activeStoryindex, setActiveStoryindex] = useState(null);

  useEffect(() => {
    fetchStories();

    setActiveStoryindex(0);
  }, []);

  const fetchStories = async () => {
    try {
      const stories = await API.graphql(graphqlOperation(listStorys));

      setStories(stories.data.listStorys.items);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  const handleNextStory = () => {
    if (activeStoryindex >= stories.length - 1) {
      return;
    }
    setActiveStoryindex(activeStoryindex + 1);
  };
  const handlePrevStory = () => {
    if (activeStoryindex <= 0) {
      return;
    }
    setActiveStoryindex(activeStoryindex - 1);
  };

  if (!stories) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  const activeStory = stories[activeStoryindex];
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground style={styles.image} source={{uri: activeStory.image}}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={activeStory.user.image} size={50} />
            <Text style={styles.username}> {activeStory.user.name}</Text>
            <Text style={styles.postedTime}>
              {moment(activeStory.createdAt).fromNow()}
            </Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color={'#ffffff'} />
            </View>

            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send Message"
                placeholderTextColor={'white'}
              />
            </View>
            <View style={styles.messageButton}>
              <IoniconsIcon
                name="paper-plane-outline"
                size={35}
                color={'#ffffff'}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
