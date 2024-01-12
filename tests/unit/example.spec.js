import { mount } from '@vue/test-utils';
import SideBar from '@/components/SideBar.vue';

describe('SideBar', () => {
  it('renders correctly', () => {
    const wrapper = mount(SideBar);
    expect(wrapper.element).toMatchSnapshot();
  });

  // Add more test cases as needed
});


