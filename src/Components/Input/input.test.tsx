import { fireEvent, render } from "@testing-library/react";
import Input from "./Input";


it('render input text', () => {
    const { queryByTitle } = render(<Input />)
    const input = queryByTitle('input') as HTMLElement;
    expect(input).toBeTruthy();
});

describe('change input text', () => {
    it('onChange', () => {
        const { queryByTitle } = render(<Input />)
        const input = queryByTitle('input') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'hello' } });
        expect(input.value).toBe('hello');
    });
})
