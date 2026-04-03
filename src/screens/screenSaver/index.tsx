import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Animated, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const screenSaverImages = [
    'https://images.unsplash.com/photo-1613103756285-48a0c7ee6674?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/flagged/photo-1591475791029-f9efe6297456?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    'https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

export const ScreenSaver = () => {
    const navigation = useNavigation<any>()
    const [index, setIndex] = useState(0);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        screenSaverImages.forEach(url => {
            Image.prefetch(url);
        });
    }, []);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, [index, fadeAnim]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            fadeAnim.setValue(0);
            setIndex(prev => (prev + 1) % screenSaverImages.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [fadeAnim]);

    const handlePress = () => {
        navigation.navigate('Dashboard');
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress} activeOpacity={1}>
            <Animated.Image
                source={{ uri: screenSaverImages[index] }}
                style={[styles.image, { opacity: fadeAnim }]}
                resizeMode="cover"
                fadeDuration={0}
            />
            <View style={styles.overlay}>
                <Text style={styles.label}>{index + 1} / {screenSaverImages.length}</Text>
                <Text style={styles.instruction}>Press OK to enter Dashboard</Text>
            </View>
        </TouchableOpacity>
    );
};
