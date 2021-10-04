import { RandomMeResponse } from '../../Interfaces/person.model';
import { PostModel } from '../../Interfaces/post.model'
import { UserModel } from '../../Interfaces/user.model';
import { http, httpCanel } from '../../Services/apiservice'

export async function fetchData() {
    const response = await http.get<UserModel[]>('/users',
        { cancelToken: httpCanel.token });
    return response.data;
};

export async function fetchRandomData() {
    const baseUrl = 'https://randomuser.me/'
    const response = await http.get<RandomMeResponse>(baseUrl + 'api',
        { cancelToken: httpCanel.token, params: { results: 10 } });
    return response.data.results;
};
