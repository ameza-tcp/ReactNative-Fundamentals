import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
    screen: {
        padding: 50
    },
    inputContainer: {
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width: '80%'
    },
    inputFieldAndButton: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listItem: {
        padding: 10,
        backgroundColor: '#66B2FF',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 6
    },
    modalContent: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    modalButtons: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '30%'
    }
});

export default commonStyles;
