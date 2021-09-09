import Comments from "./Comments"
import Likesec from "./LikeSec"



const Post = () => {

    return (
        <div className="p-2">
            {/* post container */}
            <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

                {/* ส่วนของเจ้าของ post */}
                <div className="space-y-2">

                    {/* image and name */}
                    <div className="flex space-x-2 items-center">
                        <img className="w-12 h-12 rounded-full" src="/profileImages/handsome.jpg"></img>
                        <span className='font-semibold text-lg'>Benypa Kiaotai 630610747</span>
                    </div>

                    {/* status message */}
                    <p>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</p>
                    <Likesec />

                </div>
                {}
                <Comments />
                

            </div>
        </div>
    )
}

export default Post