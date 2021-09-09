import { CommentType, comments } from "../data/comments";
const Rep = (m: CommentType) => {
    return (

        <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src={m.userImagePath}></img>
            <div className="bg-gray-200 rounded-lg p-2">
                <p className="font-semibold">{m.username}</p>
                <p>{m.commentText}</p>
            </div>
            <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>{m.likeNum} คน</p>
            </div>
        </div>
    )
    {/* replies */ }
    {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */ }
}

export default Rep