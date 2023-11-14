import { NavigationContainer } from '@react-navigation/native';
import { RootScreen } from './screens/RootScreen';
import { DetailsScreen } from './screens/DetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from './types/StackParamList';

export const NavigationContainerWrapper = () => {
    const Stack = createStackNavigator<StackParamList>();
    
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Root'
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name='Root' component={RootScreen} />
                <Stack.Screen name='Details' component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}