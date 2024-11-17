document.getElementById('download-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const url = document.getElementById('url-input').value;
    if (url) {
        fetch(`/download?url=${encodeURIComponent(url)}`)
            .then(response => response.json())
            .then(data => {
                const resultDiv = document.getElementById('result');
                if (data.success) {
                    resultDiv.innerHTML = `<a href="${data.downloadUrl}" download>Click here to download the video</a>`;
                } else {
                    resultDiv.innerHTML = `<p>Invalid URL or unable to process the video.</p>`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});
