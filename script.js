const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

$(`#videoForm`).submit(function(event) {
    event.preventDefault();
    const search = $(`#videoForm`).val();
    $(`#videoForm`).val(``);
    handleVideos(searchTerm);
});

function handleVideos(searchTerm) {
    const parameters = {
        key: `AIzaSyCrVDceP1-KwRsIVi12ODPCwS2oSHe-_7k`,
        q: `searchTerm`,
        part: `snippet`,
        maxResults: 25,
    };
    $.getJSON(url, parameters, function(data) {
        populateResults(data);
    });
}

function populateResults(data) {
    console.log(data);
    $(`#videoResults`).empty();
    const html= "";
    
}