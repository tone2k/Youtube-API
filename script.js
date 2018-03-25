const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

$(`#videoForm`).submit(function (event) {
    console.log(`form submitted!`)
    event.preventDefault();
    let search = $(`#search-term`).val();
    $(`#search-term`).val(``);
    handleVideos(search);
});

function populateResults(data) {
    console.log(`data populated!`)
    $(`#videoResults`).empty();
    let html = "";
    for (let i=0; i<data.items.length; i++) {
        html += "<li>" + data.items[i].snippet.channelTitle + "</li>";
        html += "<li>" + data.items[i].snippet.thumbnails.medium.url + "</li>";
    }
    $(`#videoResults`).append(html);
}

function handleVideos(search) {
    let parameters = {
        key: `AIzaSyCrVDceP1-KwRsIVi12ODPCwS2oSHe-_7k`,
        q: `searchTerm`,
        part: `snippet`,
        maxResults: 25,
    };
    $.getJSON(YOUTUBE_SEARCH_URL, parameters, function(data) {
        populateResults(data);
    });
}