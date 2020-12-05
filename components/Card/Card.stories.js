import { storiesOf } from '@storybook/vue';
import Card from './Card.vue';

storiesOf('Card', module).add('normal', () => ({
  components: { Card },
  template: `<Card/>`,
}));
