import Lightbox from 'react-native-lightbox-v2';

const LightboxView = ({ navigator }) => (
  <Lightbox navigator={navigator}>
    <Image
      style={{ height: 300 }}
      source={{ uri: 'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg' }}
      
    />
  </Lightbox>
);