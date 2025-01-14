export const visibilityCheck = () => {
    const userAgent = navigator.userAgent;
    return /iPhone|iPad|iPod|iPad Air|iPad Mini|Android|BlackBerry|IEMobile|Opera Mini|Mobile|Windows Phone/i.test(userAgent)
}