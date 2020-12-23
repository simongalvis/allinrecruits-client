import React from 'react'
import ReactDOM from 'react-dom'
import AdminDashboard from './AdminDashboard'
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'

describe(`AdminDashboard component`, () =>{
    it(`renders without crashing`, () =>{
        const div = document.createElement('div');

        ReactDOM.render(<BrowserRouter><AdminDashboard/></BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div);
    })
    it(`Renders UI as expected`, () =>{
        const tree = renderer
            .create(<BrowserRouter><AdminDashboard/></BrowserRouter>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})