import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyPostsData, dummyUserData } from "../assets/assets";
import Loading from "../components/Loading";
import UserProfileInfo from "../components/UserProfileInfo";

const Profile = () => {
  const { profileId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("posts");
  const [showEdit, setShowEdit] = useState("false");

  const fetchUser = async () => {
    setUser(dummyUserData);
    setPosts(dummyPostsData);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return user ? (
    <div className="relative h-full overflow-y-scroll bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">

        {/* Profil Kart */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">

          {/* kapak fotoğrafı */}
          <div className="h-40 md:56 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
            {user.cover_photo && <img src={user.cover_photo} alt="" className="w-full h-full object-cover"/>}
          </div>

          {/* Kullanıcı Bilgisi */}
          <UserProfileInfo user={user} posts={posts} profileId={profileId} setShowEdit={setShowEdit}/>

        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Profile;
