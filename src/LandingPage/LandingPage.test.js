import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from './LandingPage'
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'

describe(`LandingPage component`, () =>{
    it(`renders without crashing`, () =>{
        const div = document.createElement('div');

        ReactDOM.render(<BrowserRouter><LandingPage/></BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div);
    })
    it(`Renders UI as expected`, () =>{
        const tree = renderer
            .create(<BrowserRouter><LandingPage/></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})