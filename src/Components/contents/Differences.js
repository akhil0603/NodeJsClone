import React from 'react'

const Differences = () => {
    return (
        <div>
            <h1 className="article-reader-headline">Differences between Node.js and the Browser</h1>
            <details className='toc' open>
                <summary>
                    <h6>TABLE OF CONTENTS</h6>
                </summary>
                <ul className="tableOfContents">
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#a-little-bit-of-history">A little bit of history</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2009">2009</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2010">2010</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2011">2011</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2012">2012</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2013">2013</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2014">2014</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2015">2015</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2016">2016</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2017">2017</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2018">2018</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2019">2019</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2020">2020</a>
                    </li>
                    <li>
                        <a href="https://nodejs.dev/learn/a-brief-history-of-nodejs/#2021">2021</a>
                    </li>


                </ul>
            </details>
            <div className="para">
                <p>
                    Believe it or not, Node.js is only eleven years old.
                </p>
                <p>
                    In comparison, JavaScript is 24 years old and the Web is 31 years old.
                </p>
                <p>
                    Eleven years isn't a very long time in tech, but Node.js seems to have been around forever.
                </p>
                <p>
                    I've had the pleasure to work with Node.js since the early days when it was only 2 years old, and despite the limited information in the wild, you could already feel that it was going to be a huge thing.
                </p>
                <p>
                    In this post, we draw the big picture of Node.js in its history, to put things in perspective.
                </p>
                <p>
                    In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.
                </p>
            </div>
        </div>
    )
}

export default Differences;
