const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

$(`#videoForm`).submit(function (event) {
    event.preventDefault();
    const search = $(`#videoForm`).val();
    $(`#videoForm`).val(``);
    handleVideos(searchTerm);
});
