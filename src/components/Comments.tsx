import Likesec from "./LikeSec"
import Rep from "./Replies"
import { CommentType, comments } from "../data/comments";


const Comments = (com : CommentType) => {

    return(
        <div className="">
    {/* normal comment */}
    <div className="flex p-2 items-start space-x-2">
      <img className="w-10 w-10 rounded-full" src={com.userImagePath}></img>
      <div className="bg-gray-200 rounded-lg p-2">
        <p className="font-semibold">{com.username}</p>
        <p>{com.commentText}</p>
        {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
        <div className='flex items-center'>
        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
        <p className='text-gray-500'>{com.likeNum} คน</p>
    </div>
      </div>
    </div>
    {com.replies.map(x => <Rep username={x.username} userImagePath={x.userImagePath} commentText={x.commentText} likeNum={x.likeNum} replies={x.replies}/>)}

  </div>

    )
    
    {/* comments section */}
    
}

export default Comments