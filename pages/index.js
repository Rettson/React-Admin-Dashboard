import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTitle("Dashboard");
    }, 1000);
  }, []);

  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">
        {title || <Skeleton />}
      </p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        {loading ? (
          <Skeleton className="h-40" />
        ) : (
          <div className="rounded bg-white h-40 shadow-sm"></div>
        )}
        {loading ? (
          <Skeleton className="h-40" />
        ) : (
          <div className="rounded bg-white h-40 shadow-sm"></div>
        )}
        {loading ? (
          <Skeleton className="h-40" />
        ) : (
          <div className="rounded bg-white h-40 shadow-sm"></div>
        )}
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm"></div>
    </>
  );
}
