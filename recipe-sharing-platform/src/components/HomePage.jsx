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
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className="border rounded p-4 shadow">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-bold mt-2">{item.title}</h2>
            <p className="text-gray-700">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
