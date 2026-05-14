import { useState } from "react";
import FirstMovePanel from "../components/FirstMovePanel";
import ProfileCard from "../components/ProfileCard";
import Sidebar from "../components/Sidebar";
import GoTonight from "./GoTonight";

const FeedPage = () => {

  const [showGoTonight, setShowGoTonight] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F5EF] flex">
      <Sidebar variant="feed" />

      <main className="ml-[250px] flex-1 px-[50px] py-[30px]">
        <div className="flex h-full items-start justify-between">

          {/* Center Card */}
          <div className="flex flex-1 justify-center pt-[20px]">
            <ProfileCard onGoTonight={() => setShowGoTonight(true)} />
          </div>

          {/* Right Panel */}
          <div className="w-[370px] shrink-0 pt-[5px]">
            <FirstMovePanel />
          </div>

        </div>
      </main>

      {/* Modal */}
      {showGoTonight && (
        <GoTonight
          onClose={() => setShowGoTonight(false)}
        />
      )}
    </div>
  );
};

export default FeedPage;