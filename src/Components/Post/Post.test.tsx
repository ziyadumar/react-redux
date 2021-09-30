import { fireEvent, render } from "@testing-library/react"
import { PostModel } from "../../Interfaces/post.model"
import Post from "./Post"

const sample: PostModel = {
    userId: 5,
    id: 1,
    title: "Title",
    body: "Body",

}

it('should render post comp', () => {
    const { queryByTitle } = render(<Post userId={sample.userId} id={sample.id} title={sample.title} body={sample.body} />)
    const postTitle = queryByTitle('title');
    const postBody = queryByTitle('body');
    expect([postBody, postTitle]).toBeTruthy();
    expect(postTitle?.innerHTML).toBe(sample.title);
})

// describe("click", () => {
//     it('should render post comp', () => {
//         const { queryByTitle } = render(<Post userId={3} id={1} title={"Hello Title"} body={"asfasdfas"} />)
//         const post = queryByTitle('post') as HTMLElement;
//         fireEvent.click(post);
//     });
// });
