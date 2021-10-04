import { CatModel } from "../../Interfaces/cats.model";
import { http } from "../../Services/apiservice"


export async function fetchCats() {
    const response = await http.get<CatModel[]>('https://api.thecatapi.com/v1/breeds');
    return response.data;
}