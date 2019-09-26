import React from 'react'
import { View, TextInput, Button, Modal } from 'react-native';

import commonStyles from '../styles/commonStyles';
import { IAddTaskModal } from '../interfaces/IAddTaskModal';

const AddTaskModal = (props: IAddTaskModal) => {
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={commonStyles.modalContent}>
                <TextInput
                    placeholder={props.placeholder}
                    style={commonStyles.inputContainer}
                    onChangeText={props.onChangeText}
                    value={props.fieldValue}
                />
                <View style={commonStyles.modalButtons}>
                    <Button title={props.btnTitle} onPress={props.onPress} />
                    <Button title="Cancel" onPress={props.onCancel} color="gray" />
                </View>
            </View>
        </Modal>
    )
}

export default AddTaskModal;