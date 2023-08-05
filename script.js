document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const uploadBtn = document.getElementById('uploadBtn');
    const sharedLink = document.getElementById('sharedLink');

    uploadBtn.addEventListener('click', function () {
        fileInput.click(); // Trigger file input click when the button is clicked
    });

    fileInput.addEventListener('change', function () {
        if (fileInput.files.length === 0) {
            return;
        }

        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append('file', file);

        fetch('https://file.io', {
            method: 'POST',
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                sharedLink.value = data.link;
            } else {
                alert('Failed to upload file. Please try again later.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
