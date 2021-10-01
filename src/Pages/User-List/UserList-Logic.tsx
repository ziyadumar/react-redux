import { PostModel } from '../../Interfaces/post.model'
import { UserModel } from '../../Interfaces/user.model';
import { http, httpCanel } from '../../Services/apiservice'

export async function fetchData() {
    const response = await http.get<UserModel[]>('/users',
        { cancelToken: httpCanel.token });
    console.log(response.data);
    return response.data;
};
