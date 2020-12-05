import Card from '../Card.vue';
import { render } from '@testing-library/vue';

test('It renders correctly', () => {
  const { getByText } = render(Card);
  getByText('Card');
});
