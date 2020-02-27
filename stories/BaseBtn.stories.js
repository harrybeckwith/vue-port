import BaseBtn from '../src/components/BaseBtn';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Base Button',
};


export const Test = () => ({
  components: { BaseBtn },
  template: '<base-btn @click="action">Button</base-btn>',
  methods: { action: action('clicked') },
});
