import { useEffect, useState } from "react";

import { isInkSepoliaNetwork, switchToInkSepolia } from "@/utils/add-network";

import { Button } from "./Button";

export const AddNetworkButton = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const checkNetwork = async () => {
      if ((window as any).ethereum) {
        const connected = await isInkSepoliaNetwork();
        setIsConnected(connected);
      }
    };

    checkNetwork();

    if ((window as any).ethereum) {
      (window as any).ethereum.on("chainChanged", checkNetwork);
    }

    return () => {
      if ((window as any).ethereum) {
        (window as any).ethereum.removeListener("chainChanged", checkNetwork);
      }
    };
  }, []);

  return (
    <div className="space-y-2 mt-4">
      {isConnected ? (
        <div className="flex items-center text-green-600 dark:text-green-400 font-semibold">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Successfully connected to Ink Sepolia
        </div>
      ) : (
        <div className="space-y-4">
          <Button variant="primary" onClick={switchToInkSepolia}>
            Add Ink Sepolia Network
          </Button>
          <div className="text-sm text-gray-600 dark:text-gray-400 italic">
            Note: Automatic network addition may not work with all wallets. See
            manual instructions below if needed.
          </div>
        </div>
      )}
    </div>
  );
};
