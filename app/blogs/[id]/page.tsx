import React from 'react';
import { marked } from 'marked';

export default function YourPage(props: { html: string }) {
    const { html } = props;
    

    console.log(html);
    return (
        <div>
            <span dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch(`http://localhost:3000/1/index.md`);
    const markdown = await response.text();

    return {
        props: {
            html: marked.parse(markdown),
        },
        revalidate: 24 * 60 * 60, // Adds static caching with cleanup every 24 hours
    };
}