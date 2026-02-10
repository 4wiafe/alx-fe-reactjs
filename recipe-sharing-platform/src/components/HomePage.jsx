import { useState, useEffect } from "react";
import recipeData from "../data.json";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData(recipeData);
    } catch (error) {
      setError("Something went wrong");
      console.error(error);
    } finally{
      setIsLoading(false);
    }
    
  }, []);

  if (error) return <p>{error}</p>;

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <h1 className="text-center font-extrabold text-gray-950 text-3xl p-4">Recipe Sharing Platform</h1>
      <div className="p-4 flex flex-col gap-3 bg-gray-100">
        {data.map(item => (<div key={item.id} className="border mx-auto max-w-5xl rounded p-4 bg-white shadow-md w-60">
          <h3 className="text-lg font-bold text-blue-500 mb-1">{item.title}</h3>
          <p className="text-gray-500 font-light mb-2">{item.summary}</p>
          <div>
            <img src={item.image} alt={`${item.title}`} className="w-40" />
          </div>
        </div>))}
      </div>
    </div>
  );
}
