import React from 'react';

export default React.createContext({
    admins:[],
    submissions:[],
    selectedSubject:'',
    addSubmission: () => {},
    selectSubject: () => {}
})