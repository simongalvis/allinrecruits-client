import React from 'react'
import ReactDOM from 'react-dom'
import ApplicantList from './ApplicantList'
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'

describe(`ApplicantList component`, () =>{
    it(`renders without crashing`, () =>{
        const div = document.createElement('div');

        ReactDOM.render(<BrowserRouter><ApplicantList/></BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div);
    })
    it(`Renders UI as expected`, () =>{
        const tree = renderer
            .create(<BrowserRouter><ApplicantList/></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})