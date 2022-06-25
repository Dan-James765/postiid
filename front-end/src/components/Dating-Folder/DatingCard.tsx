import { useState } from "react";
import TinderCard from "react-tinder-card";
import DatingMainButtons from "./DatingMainButtons";

function DatingCard() {
  const [people, setPeople] = useState([
    {
      id: "1232344",
      username: "Eddie Hutton",
      userImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQE2PGxurF3s_A/profile-displayphoto-shrink_800_800/0/1628443314814?e=1659571200&v=beta&t=zkm7slmVohyuUk3uNv0KFefsiZpPK-lT0S8UIgIzWPI",
      message:
        "Want to let a lightskin slide in, I will pay for the 1st round!askljaskljkasklasjklaskljklasjklasjkljaskljaskljaskljklasjklasjklasjklasjlasjljaskljaskljaskl",
      bio: "A young scumbag in the making - swipe right to be a part of my roster",
    },
    {
      id: "12323441",
      username: "Yass Sharif",
      userImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFmfveAN-dwyg/profile-displayphoto-shrink_800_800/0/1644864190655?e=1659571200&v=beta&t=HPs5XvQPSKgrPUmsonJwba85mtskJAUWH3PdE1sgNTA",
      message:
        "This is some dummy text, right here, which is supposed to be a message!",
      bio: "A man who poses to not be a scumbag - but really is also just a scumbag.",
    },
    {
      id: "1232344",
      username: "Eddie Hutton",
      userImg:
        "https://media-exp1.licdn.com/dms/image/C4D03AQE2PGxurF3s_A/profile-displayphoto-shrink_800_800/0/1628443314814?e=1659571200&v=beta&t=zkm7slmVohyuUk3uNv0KFefsiZpPK-lT0S8UIgIzWPI",
      message:
        "Want to let a lightskin slide in, I will pay for the 1st round!askljaskljkasklasjklaskljklasjklasjkljaskljaskljaskljklasjklasjklasjklasjlasjljaskljaskljaskl",
      bio: "A man who poses to not be a scumbag - but really is also just a scumbag. iasdghajkhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    },
  ]);

  return (
    <>
      <div className="flex justify-center pt-10 xl:pt-32">
        {people.map((mapper) => (
          <>
            <TinderCard
              key={mapper.username}
              preventSwipe={["up", "down"]}
              className="absolute"
            >
              <div
                className="max-w-lg 2xl:w-[400px] 2xl:h-[500px] xl:w-[400px] xl:h-[500px]  lg:w-64 lg:h-96 md:w-56 md:h-72 sm:w-56 sm:h-72 xs:w-56 xs:h-72 bg-cover bg-center rounded-lg relative shadow-lg"
                style={{ backgroundImage: `url(${mapper.userImg})` }}
              >
                <h1 className="flex justify-center text-xl text-white font-semibold">
                  {mapper.username}
                </h1>
              </div>
            </TinderCard>
          </>
        ))}
        <DatingMainButtons />
      </div>
    </>
  );
}

export default DatingCard;
