import IGUser from "components/IGUser";
import React from "react";

const IGProfile: React.FC = () => {
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
        }
    ]

    return (
        <div className="mt-8 ml-8 shadow-lg box-border p-2">
            <IGUser
                account="red_c"
                location="Taipei"
                avatar="/images/avatar.png"
                size="medium"
            />
            <p className="font-bold text-gray-400 mt-4 mx-4 mb-3 text-sm">
                You are following
            </p>
            {
                friends.map((friend) => {
                    const { id, account, avatar, location, isFollowing } = friend;
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
                    )
                })
            }
        </div>
    );
};

export default IGProfile;
