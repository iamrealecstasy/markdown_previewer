function updatePreview() {
    let previewElement = document.getElementById("preview");
    let editorValue = document.getElementById("editor").value;
    let markedUpHTML = marked(editorValue);
    previewElement.innerHTML = markedUpHTML;
}

document.onload = setDefault();

function setDefault() {
    let defaultText = `# Ayomide Daniel
## A markdown Previewer
[Learn More](http://www.facebook.com)
<dl>
    <dt>Definition list</dt>
    <dd>Is something people use sometimes.</dd>
    <dt>Markdown in HTML</dt>
    <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
    
\`This is an example of inline code\`

\`\`\`
function exampleOf() {
    return multiLineCodeBlock;
}
\`\`\`

- This
- is
- an
- example
- of
- list
- items

> This is an example of block quote

![Image](https://images.pexels.com/photos/7175450/pexels-photo-7175450.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=150)

**This an example of Bolded Text**`;

    let editorField = document.getElementById("editor");
    let previewElement = document.getElementById("preview");
    editorField.value = defaultText;
    previewElement.innerHTML = marked(defaultText);
}