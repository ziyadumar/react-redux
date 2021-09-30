import { PostModel } from '../../Interfaces/post.model'
import './Post.scss'

const Post = (props: PostModel) => (
    <div className='post' title='post' onClick={() => { console.log(props.title)}}>
        <div title='title'>{props.title}</div>
        <br />
        <div title='body'>{props.body}</div>
    </div>
)

export default Post
