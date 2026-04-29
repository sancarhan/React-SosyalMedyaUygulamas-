import React from "react";
import {
  Users,
  UserPlus,
  UserCheck,
  UserRoundPen,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  dummyConnectionsData as connections,
  dummyFollowersData as followers,
  dummyFollowingData as following,
  dummyPendingConnectionsData as pendingConnections,
} from "../assets/assets";

const Connections = () => {
  const navigate = useNavigate();
  const

  const dataArray = [
    { label: "Takipçiler", value: followers, icon: Users },
    { label: "Takip ettiklerin", value: following, icon: UserCheck },
    {
      label: "Bekleyen İstekler",
      value: pendingConnections,
      icon: UserRoundPen,
    },
    { label: "Bağlantılar", value: connections, icon: UserPlus },
  ];

  return (
    <div className="min-h-screen bg-slate-50 ">
      <div className="max-w-6xl max-auto p-6">
        {/* Başlık */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Bağlantılar</h1>
          <p className="text-slate-600">
           Network'ünüzü genişletip yeni insanlar ile tanışın
          </p>
        </div>

        {/* sayaç */}
        <div>
          
        </div>

      </div>
    </div>
  );
};

export default Connections;
