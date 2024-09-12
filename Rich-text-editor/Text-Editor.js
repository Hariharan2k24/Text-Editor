 // Execute the command for the toolbar buttons
function execCmd(command) {
    document.execCommand(command, false, null);
}

// Set font family
function setFontFamily(font) {
    document.execCommand('fontName', false, font);
}

// Set font size
function setFontSize(size) {
    document.execCommand('fontSize', false, size);
}

// Set line height (line spacing)
function setLineHeight(height) {
    document.getElementById('text-editor').style.lineHeight = height;
}

// Set the background color for the highlight feature
function setHighlightColor(color) {
    document.execCommand('backColor', false, color);
}

// Remove highlight (set backColor to default)
function removeHighlight() {
    document.execCommand('backColor', false, 'transparent');
}

// Set font color
function setFontColor(color) {
    document.execCommand('foreColor', false, color);
}

// Insert an image
// Insert an image with size control
function insertImage() {
    const url = prompt('Enter the image URL');
    const width = document.getElementById('image-width').value || '200px';  // Default to auto if not specified
    const height = document.getElementById('image-height').value || '200px'; // Default to auto if not specified

    if (url) {
        const img = `<img src="${url}" style="width:${width}px; height:${height}px;">`;
        document.getElementById('text-editor').focus();
        document.execCommand('insertHTML', false, img);
    }
}


// Save the content as a file
function saveFile() {
    const content = document.getElementById('text-editor').innerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'text-editor-content.html';
    link.click();
}
