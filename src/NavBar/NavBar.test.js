import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar'
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'

describe(`NavBar component`, () =>{
    it(`renders without crashing`, () =>{
        const div = document.createElement('div');

        ReactDOM.render(<BrowserRouter><NavBar/></BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div);
    })
    it(`Renders UI as expected`, () =>{
        const tree = renderer
            .create(<BrowserRouter><NavBar/></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})