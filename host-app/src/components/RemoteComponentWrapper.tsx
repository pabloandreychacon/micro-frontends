import React, { Suspense } from "react";
import '../index.css';

const RemoteHeader = React.lazy(() => import("remote_app/Header"));
const RemoteButton = React.lazy(() => import("remote_app/Button"));

const LoadingSpinner = () => (
  <div className="flex justify-center p-4">
    <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

const RemoteComponentWrapper: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <RemoteHeader />
        <RemoteButton text="text from host" onClick={() =>
          alert("Click")
        } />
      </Suspense>
    </div>
  );
};

export default RemoteComponentWrapper;
