import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

import commonStyles from '../styles/commonStyles';
import { ITaskItem } from '../interfaces/ITaskItem';

export default class TaskItem extends React.Component<ITaskItem> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onDelete.bind(this, this.props.itemKey)}>
                <View style={commonStyles.listItem}>
                    <Text >
                        {this.props.value}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

// import React from 'react'
// import { View, Text, TouchableOpacity } from 'react-native';

// import commonStyles from '../styles/commonStyles';
// import { ITaskItem } from '../interfaces/ITaskItem';

// const TaskItem = (props: ITaskItem) => {
//     return (
//         <TouchableOpacity onPress={props.onDelete.bind(this, props.key)}>
//             <View style={commonStyles.listItem}>
//                 <Text >
//                     {props.value}
//                 </Text>
//             </View>
//         </TouchableOpacity>
//     )
// }

// export default TaskItem;
