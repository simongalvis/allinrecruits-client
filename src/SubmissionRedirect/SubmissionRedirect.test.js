import React from 'react'
import ReactDOM from 'react-dom'
import SubmissionRedirect from './SubmissionRedirect'
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'

describe(`SubmissionRedirect component`, () =>{
    it(`renders without crashing`, () =>{
        const div = document.createElement('div');

        ReactDOM.render(<BrowserRouter><SubmissionRedirect/></BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div);
    })
    it(`Renders UI as expected`, () =>{
        const tree = renderer
            .create(<BrowserRouter><SubmissionRedirect/></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})