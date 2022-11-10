import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-lg-8 offset-md-2">
                    <div className="blog-heading text-center mb-5">
                        <h1 className='fw-bold'>Answer of questions</h1>
                    </div>
                    <div className="questions">
                        <div className="q-one mb-4">
                            <h3 className='fw-bold mb-3'>Q-1: Difference between SQL and NoSQL</h3>
                            <div className="answer">
                                <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                                <p>There are five practical differences between SQL and NoSQL:</p>
                                <li>Language</li>
                                <li>Scalability</li>
                                <li>Structure</li>
                                <li>Properties</li>
                                <li className='mb-5'>Support and communities</li>
                            </div>
                        </div>
                        <div className="q-two mb-3">
                            <h3 className='fw-bold mb-3'>Q-2: What is JWT, and how does it work?</h3>
                            <div className="answer">
                                <h4 className='mb-2'>What is JWT?</h4>
                                <p className='mb-2'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                                <h4 className='mb-2'>How does it work?</h4>
                                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                                <p className='mb-5'>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                            </div>
                        </div>
                        <div className="q-three mb-3">
                            <h3 className='fw-bold mb-3'>Q-3: What is the difference between javascript and NodeJS?</h3>
                            <div className="answer">
                                <h4 className='mb-2'>NodeJS</h4>
                                <p className='mb-2'>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                                <h4 className='mb-2'>JavaScript</h4>
                                <p className='mb-5'>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                            </div>
                        </div>
                        <div className="q-four mb-3">
                            <h3 className='fw-bold mb-3'>Q-4: How does NodeJS handle multiple requests at the same time?</h3>
                            <div className="answer">
                                <p className='mb-2'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
                                <p className='mb-5'>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;