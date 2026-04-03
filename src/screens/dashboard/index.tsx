import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

interface ComponentItem {
    id: string;
    title: string;
    description: string;
}

const commonComponents: ComponentItem[] = [
    { id: 'clock', title: 'Clock', description: 'Current time and date' },
    { id: 'weather', title: 'Weather', description: 'Current weather conditions' },
    { id: 'calendar', title: 'Calendar', description: 'Upcoming events' },
    { id: 'news', title: 'News', description: 'Latest headlines' },
    { id: 'reminders', title: 'Reminders', description: 'Your daily reminders' },
    { id: 'music', title: 'Music', description: 'Music player controls' },
    { id: 'photos', title: 'Photos', description: 'Photo gallery' },
    { id: 'settings', title: 'Settings', description: 'App settings' },
];

export const Dashboard = () => {
    const [focusedId, setFocusedId] = useState<string | null>(null);

    const handleFocus = (id: string) => {
        setFocusedId(id);
    };

    const handlePress = (id: string) => {
        console.log(`Pressed ${id}`);
    };

    const renderComponent = (item: ComponentItem) => (
        <TouchableOpacity
            key={item.id}
            style={[styles.componentItem, focusedId === item.id && styles.focusedItem]}
            onPress={() => handlePress(item.id)}
            onFocus={() => handleFocus(item.id)}
            onBlur={() => setFocusedId(null)}
            hasTVPreferredFocus={item.id === 'clock'}
        >
            <Text style={[styles.title, focusedId === item.id && styles.focusedText]}>{item.title}</Text>
            <Text style={[styles.description, focusedId === item.id && styles.focusedText]}>{item.description}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Daily Life Dashboard</Text>
            <ScrollView style={styles.scrollView}>
                {commonComponents.map(renderComponent)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
    },
    header: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 40,
    },
    scrollView: {
        flex: 1,
    },
    componentItem: {
        backgroundColor: '#333',
        padding: 30,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    focusedItem: {
        borderColor: '#fff',
        backgroundColor: '#555',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    },
    description: {
        fontSize: 24,
        color: '#ccc',
        marginTop: 10,
    },
    focusedText: {
        color: '#fff',
    },
});