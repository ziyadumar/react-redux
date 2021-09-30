import { PostModel } from '../../Interfaces/post.model'
import { http, httpCanel } from '../../Services/apiservice'

export async function fetchData() {
    const response = await http.get<PostModel[]>('/posts',
        { cancelToken: httpCanel.token });
    return response.data;
};
