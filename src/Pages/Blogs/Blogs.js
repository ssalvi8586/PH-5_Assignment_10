import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="container border my-3">
                <h5 className='text-center'>Authentication vs Authorization</h5>
                <p>Authentication is validating the user. For example, it checks whether email and password is valid or not.Checks whether you are the right person to login or not. On the other hand authorization checks your access to certain functionality or area, checks the role of a user if it's normal user or admin or have other special functionality.</p>
            </div>
            <div className="container border my-3">
                <h5 className='text-center'>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p>Firebase authentication makes building secure authentication system easy. We can easily use it without worrying about security as it is backed up by google, a trusted a large company. Firebase authentication also gives multiple social sign in options and its really customizable and easy to use. We can use email-password verification, phone no verification and different social login option by reusing their code and their documentation is detailed to follow. Thats why I am using firebase authentication. There are other popular authentication options other than firebase. They are Auth0, Okta, Keycloak, Amazon Cognito etc.</p>
            </div>
        </div>
    );
};

export default Blogs;