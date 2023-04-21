import IGHeader from "components/IGHeader";
import IGContainer from "components/IGContainer";
import IGStory from "./components/IGStory";
import IGUser from "components/IGUser";
import IGPost from "./components/IGPost";


const IGPostList: React.FC = () => {

  const data = [
    {
      "id": 1,
      "location": "布魯斯前端",
      "account": "bruce_1234",
      "avatar": "/images/avatars/a1.png",
      "photo": "/images/posts/main1.png",
      "likes": 999,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "1 HOURS AGO"
    },
    {
      "id": 2,
      "location": "7-11你好門市",
      "account": "__0831_xxx__",
      "avatar": "/images/avatars/a2.png",
      "photo": "/images/posts/main2.png",
      "likes": 333,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "5 HOURS AGO"
    },
    {
      "id": 3,
      "location": "Taipei",
      "account": "gogogo_0214",
      "avatar": "/images/avatars/a3.png",
      "photo": "/images/posts/main3.png",
      "likes": 777,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "6 HOURS AGO"
    },
    {
      "id": 4,
      "location": "信義區",
      "account": "zoe_0000",
      "avatar": "/images/avatars/a4.png",
      "photo": "/images/posts/main4.png",
      "likes": 824,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "7 HOURS AGO"
    },
    {
      "id": 5,
      "location": "南港區",
      "account": "zoe_0000",
      "avatar": "/images/avatars/a5.png",
      "photo": "/images/posts/main5.png",
      "likes": 98,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "10 HOURS AGO"
    }
  ]

  return (
    <>
      {
        data.map((post) => {
          return (
              <IGPost
                key={post.id} 
                account={post.account} 
                location={post.location} 
                avatar={post.avatar} 
                photo={post.photo} 
                likes={post.likes} 
                description={post.description} 
                hashTags={post.hashTags} 
                createTime={post.createTime} 
            />
          )
        })
      }
    </>
  )
}

const Home: React.FC = () => {
  return <>
    <IGHeader />
    <IGContainer>
      <div className="flex lg:justify-center">
        <div className="w-full lg:w-[600px]">
          <IGStory />
          <IGPostList />
        </div>
        <div className="hidden lg:block lg:w-[424px]">
          <IGUser avatar="/images/avatars/a9.png" account="user9" location="Taipei" showFollow={true} />
        </div>
      </div>
    </IGContainer>
  </>;
};

export default Home;
