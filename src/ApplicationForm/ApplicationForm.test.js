import React from 'react'
import ReactDOM from 'react-dom'
import ApplicationForm from './ApplicationForm'
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'

describe(`ApplicationForm component`, () =>{
    it(`renders without crashing`, () =>{
        const div = document.createElement('div');

        ReactDOM.render(<BrowserRouter><ApplicationForm/></BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div);
    })
    it(`Renders UI as expected`, () =>{
        const tree = renderer
            .create(<BrowserRouter><ApplicationForm/></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})