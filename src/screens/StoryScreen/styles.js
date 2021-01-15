import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  username: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  postedTime: {
    color: '#808080',
    fontWeight: '700',
    marginLeft: 10,
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  cameraButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
  },
  messageButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: '100%',
    color: 'white',
    fontSize: 16,
  },
  textInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    height: 50,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
});

export default styles;
