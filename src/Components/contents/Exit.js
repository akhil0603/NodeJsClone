import React from 'react'

const Exit = () => {
    return (
        <div>
            <h1 className="article-reader-headline">How to exit from a Node.js program</h1>
            <details className='toc' open>
                <summary>
                    <h6>TABLE OF CONTENTS</h6>
                </summary>
                <ul className="tableOfContents">
                    <li>
                        <a href="https://nodejs.dev/learn/#a-vast-number-of-libraries">A Vast Number of Libraries</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/#an-example-nodejs-application">An Example Node.js Application</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/#nodejs-frameworks-and-tools">Node.js Frameworks and Tools</a>
                    </li>


                </ul>
            </details>
            <div className="para">
                <p>
                    Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!
                </p>
                <p>
                    Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
                </p>
                <p>
                    A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.
                </p>
                <p>
                    This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.
                </p>
                <p>
                    Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.
                </p>
                <p>
                    In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.
                </p>
            </div>
        </div>
    )
}

export default Exit;
