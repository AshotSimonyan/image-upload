export const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}


export const getDimensions = (height, width) => {
    return `${height} x ${width}`
}
export const getImageType = (type) => {
    return type.split('/')[1]
}

export const getMegapixel = (height, width) => {
    return `${((height * width) / 1000000).toFixed(2)} MP`
}

export const validateFile = (file, mimeTypes) => {
    return !!file.type.match(mimeTypes);
};

