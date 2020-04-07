var sizeCodes = ['m', 'z', 'b'];

function flickrPhotoJSONtoURL(photoJson, size) {
    let url = `https://farm${photoJson.farm}.staticflickr.com/`;
    url += `${photoJson.server}/${photoJson.id}_${photoJson.secret}`;
    url += `_${sizeCodes[size]}.jpg`;
    return url;
}

let flickrParams = {
    method: 'flickr.people.getPublicPhotos',
    api_key: '08e77de6f49140e4ffce2f26bdc5f1ab',
    user_id: '187805122@N05',
    format: 'json',
    nojsoncallback: '1'
};
let queryString = new URLSearchParams(flickrParams).toString();
let url = 'https://www.flickr.com/services/rest/?' + queryString;
fetch(url)
    .then(response => response.json())
    .then(function(json) {
        for (photo of json.photos.photo) {
            let photoUrl = flickrPhotoJSONtoURL(photo, 1);
            let img = document.createElement('img');
            img.src = photoUrl;
            document.getElementById('gallery').append(img);
        }
    })
