const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '0216db15cbf3fb6e66c0837224100cb3',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;