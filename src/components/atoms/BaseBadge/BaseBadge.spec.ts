import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseBadge from './BaseBadge.vue'

describe('BaseBadge', () => {
    function renderComponent(props?: Record<string, string>){
        return mount(BaseBadge, { props: { dataTestId: 'BaseBadge', ...props } })
    }
    it('renders properly', () => {
        const wrapper = renderComponent()
        expect(wrapper.html()).toContain('BaseBadge')
        expect(wrapper.html()).toContain('rounded-md')
    })
    it('renders with custom class', () => {
        const wrapper = renderComponent({ className: 'custom-class' })
        expect(wrapper.html()).toContain('custom-class')
    })
})