import React from 'react'
import ReactDOM from 'react-dom'
import ApplicationPage from './ApplicationPage'
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'

describe(`ApplicationPage component`, () =>{
    it(`renders without crashing`, () =>{
        const div = document.createElement('div');

        ReactDOM.render(<BrowserRouter><ApplicationPage/></BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div);
    })
    it(`Renders UI as expected`, () =>{
        const tree = renderer
            .create(<BrowserRouter><ApplicationPage/></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})