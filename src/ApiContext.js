import React from 'react';

export default React.createContext({
    admins:[],
    submissions:[],
    selectedSubject:'',
    loggedAdmin: {},
    addSubmission: () => {},
    selectSubject: () => {},
    loginAdmin: () => {},
    deleteSubmission: () => {},
    deleteTriggered: () => {}
})