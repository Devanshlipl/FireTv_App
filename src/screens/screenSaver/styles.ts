import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        bottom: 24,
        left: 24,
        backgroundColor: 'rgba(0,0,0,0.33)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    label: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    instruction: {
        color: 'white',
        fontSize: 14,
        marginTop: 4,
    },
});
