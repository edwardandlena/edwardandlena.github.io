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
    user_id: '77651700@N06',
    format: 'json',
    nojsoncallback: '1'
};
let queryString = new URLSearchParams(flickrParams).toString();
let url = 'https://www.flickr.com/services/rest/?' + queryString;
fetch(url)
    .then(response => response.json())
    .then(function(json) {
        let thisPhoto = json.photos.photo[0];
        console.log(JSON.stringify(thisPhoto));
        let photoUrl = flickrPhotoJSONtoURL(thisPhoto, 1);
        let img = document.createElement('img');
        img.src = photoUrl;
        document.getElementById('gallery').append(img);
    })
