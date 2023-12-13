//built to inform Suspense on the data stage of our response

const API_URL = `https://itunes.apple.com/search?term=`
const fetchSearch = async (searchTerm) => {
    const response = await fetch(API_URL + searchTerm)
    const resData = await response.json()
    return resData.results
}
//this is the wrapper
const wrapPromise = (promise) => {
    let status = 'pending';
    let result;
    //sets suspender to the appropriate value
    let suspender = promise.then(
        response => {
            status = 'success';
            result = response;
        },
        err => {
            status = 'error';
            result = err;
        }
    );
    //returns the stage of the data or an error
    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            }
            return result;
        }
    };
}
///export our functionality to wrap the search term
export const createResource = (searchTerm) => {
    return {
        result: wrapPromise(fetchSearch(searchTerm))
    }
}


