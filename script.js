const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

$(`#videoForm`).submit(function (event) {
    console.log(`form submitted!`)
    event.preventDefault();
    const search = $(`#videoForm`).val();
    $(`#videoForm`).val(``);
    handleVideos(search);
});

function populateResults(data) {
    console.log(`data populated!`)
    $(`#videoResults`).empty();
    const html = "";

    $(`#videoResults`).append(html);
}

function handleVideos(searchTerm) {
    const parameters = {
        key: `AIzaSyCrVDceP1-KwRsIVi12ODPCwS2oSHe-_7k`,
        q: `searchTerm`,
        part: `snippet`,
        maxResults: 25,
    };
    $.getJSON(YOUTUBE_SEARCH_URL, parameters, function(data) {
        populateResults(data);
    });
}