import React from 'react';

function markdownToPlainText(markdownText:string) {
    // Patterns to identify and replace Markdown syntax
    const replacements = [
        // Remove HTML tags
        /<\/?[^>]+(>|$)/g,
        // Remove setext-style headers
        /(?:\n|^)(?:=+|-+)(?=\n|$)/g,
        // Remove atx-style headers
        /#+\s?/g,
        // Remove reference-style links and images
        /!\[.*?\]\[.*?\]|\[.*?\]\[.*?\]/g,
        // Remove inline-style links and images
        /!\[.*?\]\(.*?\)|\[.*?\]\(.*?\)/g,
        // Remove images
        /!\[.*?\]\s?\{.*?\}/g,
        // Remove emphasis and strikethroughs
        /(\*\*?|__?|~~)(.*?)\1/g,
        // Remove inline code and code blocks
        /(`{3,})(.*?)\1/gm,
        /`(.+?)`/g,
        // Remove blockquotes
        />\s?/g,
        // Remove unordered list items
        /\n[*+-]\s/g,
        // Remove ordered list items
        /\n\d+\.\s/g,
        // Remove additional new lines
        /\n{2,}/g
    ];

    // Apply all replacements to the markdown text
    return replacements.reduce((text, regex) => text.replace(regex, ''), markdownText).trim();
}

// Example usage;


const BionicText = ({ text }:{text:string}) => {
    const highlightFraction = 0.5; // Fraction of each word to highlight, can be adjusted
    const plainText = markdownToPlainText(text);
    // Split the text into words and format each word
    const formattedText = plainText.split(' ').map((word, index) => {
        const highlightLength = Math.ceil(word.length * highlightFraction);
        const highlighted = word.substring(0, highlightLength);
        const normal = word.substring(highlightLength);

        // Return each word as a span with part of it styled
        return (
            <span key={index}>
                <strong>{highlighted}</strong>{normal}
                {index < text.split(' ').length - 1 ? ' ' : ''}
            </span>
        );
    });

    return (
        <div className={'h-96 overflow-y-scroll overflow-x-hidden'}>{formattedText}</div>
    );
};

export default BionicText;
