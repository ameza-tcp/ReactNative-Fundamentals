import React from 'react'
import { View, TextInput, Button } from 'react-native';

import commonStyles from '../styles/commonStyles';
import { ITextInputButton } from '../interfaces/ITextInputButton';

const TaskItem = (props: ITextInputButton) => {
    return (
        <View style={commonStyles.inputFieldAndButton}>
            <TextInput
                placeholder={props.placeholder}
                style={commonStyles.inputContainer}
                onChangeText={props.onChangeText}
                value={props.fieldValue}
            />
            <Button title={props.btnTitle} onPress={props.onPress} />
        </View>
    )
}

export default TaskItem;