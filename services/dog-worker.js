
self.addEventListener(
    "message",
    async function (e) {
        const urlsfor3Images = [1, 2, 3];
        const images = await Promise.all(
            urlsfor3Images.map(async url => {
                var requestOptions = { method: 'GET', redirect: 'follow' };
                return fetch("https://dog.ceo/api/breeds/image/random", requestOptions)
                    .then(response => response.json())
                    .then(result => { return result.message; })
                    .catch(error => { console.log('error', error); return null });
            })
        );
        self.postMessage(images);
    },
    false
);