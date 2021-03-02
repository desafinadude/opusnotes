function doGet() {
    return HtmlService.createHtmlOutputFromFile('Index');
}


function getNotes() {
    var documentProperties = PropertiesService.getDocumentProperties();
    if (documentProperties.getProperty('notes') == null) {
        documentProperties.setProperty('notes', JSON.stringify([{title: 'My First Note', content: 'Hello', tag: 'General', colour: '#4DD0E1' }]));
    }

    return {
        returned_notes: documentProperties.getProperty('notes')
    };
}


function getTags() {
    var documentProperties = PropertiesService.getDocumentProperties();
    if (documentProperties.getProperty('tags') == null) {
        documentProperties.setProperty('tags', JSON.stringify([{ title: 'General', colour: '#4DD0E1' }]));
    }

    return {
        returned_tags: documentProperties.getProperty('tags')
    };
}

function saveNotes(notes) {
    console.log('SAVING NOTES');
    var documentProperties = PropertiesService.getDocumentProperties();
    documentProperties.setProperty('notes', JSON.stringify(notes));
}

function saveTags(tags) {
    console.log('SAVING TAGS');
    var documentProperties = PropertiesService.getDocumentProperties();
    documentProperties.setProperty('tags', JSON.stringify(tags));
}


function getSettings() {
    var doc = DocumentApp.create('OPUS');
    
    return {
        opus: doc
    };
}

//Set a property in each of the three property stores.
//var scriptProperties = PropertiesService.getScriptProperties();
//var userProperties = PropertiesService.getUserProperties();
//var documentProperties = PropertiesService.getDocumentProperties();

//scriptProperties.setProperty('SERVER_URL', 'http://www.example.com/');
//userProperties.setProperty('DISPLAY_UNITS', 'metric');
//documentProperties.setProperty('SOURCE_DATA_ID', '1234567890abcdefghijklmnopqrstuvwxyz');
