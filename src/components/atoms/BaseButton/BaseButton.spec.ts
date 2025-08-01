import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import BaseButton from "./index.vue";

describe('BaseButton', () => {
    function renderComponent(props?: Record<string, string | (() => void)>) {
        return mount(BaseButton, { props: { dataTestId: 'BaseButton', label: 'BaseButton', ...props } })
    }
    it('renders properly', () => {
        const wrapper = renderComponent()
        expect(wrapper.html()).toContain('BaseButton')
    })
    it('renders with custom class', () => {
        const wrapper = renderComponent({ className: 'custom-class' })
        expect(wrapper.html()).toContain('custom-class')
    })
    it('renders with onClick', () => {
        const onClick = vi.fn()
        const wrapper = renderComponent({ onClick })
        wrapper.trigger('click')
        expect(onClick).toHaveBeenCalled()
    })
})
