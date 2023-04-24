import IGHeader from "components/IGHeader";
import IGContainer from "components/IGContainer";
import IGUser from "components/IGUser";

const Following: React.FC = () => {
    const friends = [
        {
            id: 1,
            location: "Taipei",
            account: "red_c2",
            isFollowing: true,
            avatar: "/images/avatars/a1.png",
        },
        {
            id: 2,
            location: "Taipei",
            account: "red_c3",
            isFollowing: true,
            avatar: "/images/avatars/a2.png",
        },
        {
            id: 3,
            location: "Taipei",
            account: "red_c4",
            isFollowing: true,
            avatar: "/images/avatars/a3.png",
        },
    ];

    return (
        <>
            <IGHeader />
            <IGContainer>
                <p className="my-8 font-bold text-2xl px-4 box-border">
                    Following
                </p>
                <div className="shadow-md mt-8 mx-2 box-border">
                    {friends.map((friend) => {
                        const { id, account, avatar, location, isFollowing } =
                            friend;
                        return (
                            <div className="-mt-3" key={id}>
                                <IGUser
                                    id={id}
                                    account={account}
                                    avatar={avatar}
                                    location={location}
                                    isFollowing={isFollowing}
                                    showFollow
                                />
                            </div>
                        );
                    })}
                </div>
            </IGContainer>
            Following
        </>
    );
};

export default Following;
