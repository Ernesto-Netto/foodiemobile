import { Image, Text } from 'react-native';
import {styles} from './styles.js'
import icons from './src/constants/icons.js';
import Button from './src/components/button/button.jsx';

export default function App() {
  return (<>
          <Text style={styles.textos}>Hello word!</Text>
          <Image/>
          <Button />
     </>      
     )
}
