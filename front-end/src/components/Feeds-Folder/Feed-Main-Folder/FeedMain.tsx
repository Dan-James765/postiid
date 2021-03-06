import FeedPost from "./FeedPost";
import "./FeedMain.css";
function FeedMain() {
  const posts = [
    {
      id: "123",
      username: "danieljames",
      userImg:
        "https://scontent.flhr10-2.fna.fbcdn.net/v/t1.6435-9/38781010_2579432842082139_3002868557282279424_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7Gxm0yoiLjkAX_7wlNf&_nc_ht=scontent.flhr10-2.fna&oh=00_AT-UB_J8BdF_Mzo9MyqmJis7SyjZGr7u7IY13Op9MccHSw&oe=62DB24D4",
      img: "http://prod-upp-image-read.ft.com/125f09a2-9800-11e9-9573-ee5cbb98ed36",
      caption: "This is AWWESOME",
    },
  ];

  return (
    <>
      <div className="feedmain__container">
        {posts.map((post) => (
          <>
            <FeedPost
              key={post.id}
              id={post.id}
              username={post.username}
              userImg={post.userImg}
              img={post.img}
              caption={post.caption}
            />
            <FeedPost
              key={post.id}
              id={post.id}
              username={post.username}
              userImg={post.userImg}
              img={post.img}
              caption={post.caption}
            />
            <FeedPost
              key={post.id}
              id={post.id}
              username={post.username}
              userImg={post.userImg}
              img={post.img}
              caption={post.caption}
            />
          </>
        ))}
      </div>
    </>
  );
}

export default FeedMain;
