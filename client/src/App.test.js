import React from 'react';
import ReactDOM from 'react-dom'
import FormikForm from './Components/Form'
import {render,cleanup, fireEvent} from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import App from './App';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('see if FormikForm is rendering correctly', () =>{
  const div = document.createElement('div')
  ReactDOM.render(<FormikForm />,div)
  ReactDOM.unmountComponentAtNode(div)
})

it('checking if handlesubmit is working',() =>{
  const onClick = jest.fn()
  const { getByText } = render(<button type = "submit" onClick = {onClick} />)

  fireEvent.click(getByText(/Submit/i))
  expect(onClick).toHaveBeenCalled()
})