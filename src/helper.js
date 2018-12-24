export const urlFormat = (url) => {
    url = url.toLowerCase();
    url = [...url].map(char => char === ' ' ? '-' : char).join('');
    return url;
}