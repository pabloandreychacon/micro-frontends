import React, { Suspense, useState } from "react";
import '../index.css';

const RemoteHeader = React.lazy(() => import("remote_app/Header"));
const RemoteButton = React.lazy(() => import("remote_app/Button"));

const LoadingSpinner = () => (
  <div className="flex justify-center p-4">
    <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

const RemoteComponentWrapper: React.FC = () => {
  const [sharedData, setSharedData] = useState({ user: "Grant", count: 0 });

  const handleButtonClick = () => {
    const newCount = sharedData.count + 1;
    const newData = { ...sharedData, count: newCount };
    setSharedData(newData);
    
    // Compartir via window object
    (window as any).sharedStore?.setData('userData', newData);
  };

  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <RemoteHeader userData={sharedData} />
        <RemoteButton 
          text={`Clicks: ${sharedData.count}`} 
          onClick={handleButtonClick}
        />
      </Suspense>
    </div>
  );
};

export default RemoteComponentWrapper;
