export default {

    post: async (url, data) => {
        const options = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const res = await fetch(url, options)
        return await res.json()
    },

    get: async (url) => {
        const res = await fetch(url)
        return await res.json()
    }
}