import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Dashboard from '../../pages/dashboard.vue';

describe('Dashboard', () => {
  it('renders the correct message', () => {
    const wrapper = mount(Dashboard);
    expect(wrapper.text()).toContain("Hello This Is Elsa's Test");
  });
});