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
import {useRoute, useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import storiesData from '../../data/stories';
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';
import {TextInput} from 'react-native-gesture-handler';

const StoryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;
  const [userStories, setUserStories] = useState(null);
  const [activeStoryindex, setActiveStoryindex] = useState(null);

  useEffect(() => {
    const userStories = storiesData.find(
      (storyData) => storyData.user.id === userId,
    );
    setUserStories(userStories);
    setActiveStoryindex(0);
  }, []);

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
    if (activeStoryindex >= userStories.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryindex(activeStoryindex + 1);
  };
  const handlePrevStory = () => {
    if (activeStoryindex <= 0) {
      navigateToPrevUser();
      return;
    }
    setActiveStoryindex(activeStoryindex - 1);
  };

  const navigateToPrevUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) - 1).toString()});
  };
  const navigateToNextUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) + 1).toString()});
  };

  if (!userStories) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  const activeStory = userStories.stories[activeStoryindex];
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground
          style={styles.image}
          source={{uri: activeStory.imageUri}}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={userStories.user.imageUri} size={50} />
            <Text style={styles.username}> {userStories.user.name}</Text>
            <Text style={styles.postedTime}> {activeStory.postedTime}</Text>
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
