import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Cart" component={CartScreen} />
     
    </Tab.Navigator>
  );
}

export default BottomTabs