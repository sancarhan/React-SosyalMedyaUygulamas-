import React from 'react'
import { Users, UserPlus, UserCheck, UserRoundPen, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { dummyConnectionsData as connections,
  dummyFollowersData as followers,
  dummyFollowingData as following,
  dummyPendingConnectionsData as pendingConnections
 } from "../assets/assets";

const Connections = () => {

  const navigate = useNavigate()

  const dataArray = [
    {label: 'Takipçiler', value: followers, icon: Users},
    {label: 'Takip ettiklerin', value: following, icon: UserCheck},
    {label: 'Bekleyen İstekler', value: pendingConnections, icon: UserRoundPen},
    {label: 'Bağlantılar', value: connections, icon: UserPlus},
  ]

  return (
    <div className='min-h-screen bg-slate-50'>
      
    </div>
  )
}

export default Connections
