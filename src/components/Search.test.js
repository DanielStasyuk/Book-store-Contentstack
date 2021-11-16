import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";
const onChange = jest.fn()


it("renders go up text", () => {
  render(<Search />);
  const linkElement = screen.getByPlaceholderText("Search books");
  expect(linkElement).toBeInTheDocument();
});


it('change values via the fireEvent.change method', () => {
    render(<Search value="" onChangeInput={onChange} />)
    userEvent.type(screen.getByRole('textbox'), 'Books')
    expect(onChange).toHaveBeenCalledTimes(5)
  })


  it('Check class', () => {
    render(<Search onChangeInput={onChange} />)
    expect(screen.getByRole('textbox')).toHaveClass('input')
  })

