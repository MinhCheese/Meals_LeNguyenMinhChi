import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';


const MealDetailScreen = ({ navigation, route }:any) => {
    const { mealTitle } = route.params;
  
    React.useLayoutEffect(() => {
      navigation.setOptions({
        title: mealTitle,
        headerRight: () => (
          <Button onPress={() => alert('Marked as favorite!')} title="Favorite" />
        ),
      });
    }, [navigation, mealTitle]);
  
    return (
      <View>
        <Text>Meal Detail</Text>
      </View>
    );
  };
export default MealDetailScreen;