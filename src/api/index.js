//these variables should be in the .env file
const API_URL = 'https://upload.uploadcare.com';
const API_KEY = '2e260670a99c4065d3ef';
const CDN_URL = 'https://ucarecdn.com'

export const uploadFile = (name, file) => {
    const formData = new FormData();
    formData.append("UPLOADCARE_PUB_KEY", API_KEY);
    formData.append(name, file);

    return fetch(`${API_URL}/base/`, {
        method: 'POST',
        body: formData,
    }).then(res => res.json())
}

export const downloadFile = (name, fileId) => {
    return fetch(`${CDN_URL}/${fileId}/`, {
    }).then(res => res.blob());
}
