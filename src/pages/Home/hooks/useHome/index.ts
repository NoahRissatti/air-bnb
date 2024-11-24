import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPlace } from "../../../../types/IPlace";
import axios from "axios";

export function useHome() {
  const [selected, setSelected] = useState(0);
  const [places, setPlaces] = useState<IPlace[]>([]);
  const navigate = useNavigate();

  function handleClick(id: number) {
    setSelected(id);
  }

  const handleNavigate = () => {
    navigate("/new-place");
  };

  const handleNavigateToTravels = () => {
    navigate("/travels");
  };

  const handlePlaceClick = (place: IPlace) => {
    const url = `/place?id=${place.id}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IPlace[]>(
          `http://localhost:3001/api/places`,
          {
            params: {
              typeId: selected,
            },
          }
        );

        setPlaces(response.data);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchData();
  }, [selected]);

  return {
    places,
    selected,
    handleClick,
    handleNavigate,
    handlePlaceClick,
    handleNavigateToTravels,
  };
}
