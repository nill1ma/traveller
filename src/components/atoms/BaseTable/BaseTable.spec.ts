import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseTable from "./BaseTable.vue";

describe('BaseTable', () => {
    function renderComponent(props?: Record<string, string>) {
        return mount(BaseTable, { props: { dataTestId: 'BaseTable', ...props } })
    }

    function renderWithChildren() {
        return mount(BaseTable, {
            slots: {
               default: () => `<tr><td>BaseTable</td></tr>`
            }
        })
    }
    it('renders properly', () => {
        const wrapper = renderComponent()
        expect(wrapper.html()).toContain('BaseTable')
    })
    it('renders with children', () => {
        const wrapper = renderWithChildren()
        expect(wrapper.html()).toContain('BaseTable')
        expect(wrapper.html()).toContain('tr')
        expect(wrapper.html()).toContain('td')
    })
})