import instance from '@/api/common'
function registerpost(data){
    return instance.post('/register',data)
}
export default registerpost