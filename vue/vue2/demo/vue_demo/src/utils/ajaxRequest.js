import axios from 'axios'

function get(_url, _params) {
    _params = _params || {}
    
    return new Promise((resolve, reject) => {
        axios.get(_url, { _params })
            .then(res => {
                if (res.status === 200) {
                    resolve(res.data)
                }
            })
            .catch(reason => {
                reject(reason)
            })
    })
}

function post() {
    // 思路同上
}

export default get