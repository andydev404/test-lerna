import { storiesOf } from '@storybook/vue';
import Header from './Header.vue';

storiesOf('Header', module).add('normal', () => ({
  components: { Header },
  template: `<Header/>`,
}));
