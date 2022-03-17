import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB, Portal } from 'react-native-paper';

const AlterarTema = (props) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
      <FAB.Group
        open={open}
        icon={open ? 'palette' : 'palette'}
        actions={[
          {
            //icon: 'close',
            style: style.azul,
            small: false,
            onPress: () => props.setTema(style.azul),
          },
          {
            //icon: 'thumb-down',
            style: style.verde,
            label: 'Star',
            small: false,
            onPress: () => props.setTema(style.verde),
          },
          {
            //icon: 'thumb-up',
            style: style.laranja,
            small: false,
            label: 'Email',
            onPress: () => props.setTema(style.laranja),
          },
          {
            //icon: 'check',
            style: style.vermelho,
            label: 'Remind',
            onPress: () => props.setTema(style.vermelho),
            small: false,
          },
        ]}
        onStateChange={onStateChange}
      />
  );
};
const style = StyleSheet.create({
  azul: {
    backgroundColor: 'blue',
  },
  vermelho: {
    backgroundColor: 'red',
  },
  verde: {
    backgroundColor: 'green',
  },
  laranja: {
    backgroundColor: '#ff4800',
  }
})

export default AlterarTema;