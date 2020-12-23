import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'

describe(`Footer component`, () =>{
    it(`renders without crashing`, () =>{
        const div = document.createElement('div');

        ReactDOM.render(<BrowserRouter><Footer/></BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div);
    })
    it(`Renders UI as expected`, () =>{
        const tree = renderer
            .create(<BrowserRouter><Footer/></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})