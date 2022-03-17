import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';

const AlterarTema = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <View>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'palette' : 'palette'}
          actions={[
            { 
                //icon: 'close',
                style: style.azul,
                small: false,
                onPress: () => console.log('Pressed add')
            },
            {
                //icon: 'thumb-down',
                style: style.verde,
                label: 'Star',
                small: false,
                onPress: () => console.log('Pressed star'),
            },
            {
                //icon: 'thumb-up',
                style: style.laranja,
                small: false,
                label: 'Email',
                onPress: () => console.log('Pressed email'),
            },
            {
              //icon: 'check',
              style: style.vermelho,
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
              small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </View>
  );
};
const style = StyleSheet.create({
    azul: {
        backgroundColor: 'blue'
    },
    vermelho: {
        backgroundColor: 'red'
    },
    verde: {
        backgroundColor: 'green'
    },
    laranja: {
        backgroundColor: '#ff4800'
    }
})

export default AlterarTema;