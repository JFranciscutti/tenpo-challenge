import { useQuery } from "@tanstack/react-query";
import type { Artist } from "../model/Artist";
import { httpClient } from "../utils/httpClient";

export interface ArtistsResponse {
  created: string;
  count: number;
  offset: number;
  artists: Artist[];
}

class ArtistsRepository {
  keys = {
    artists: (page: number, pageSize: number) => [
      "artists",
      page,
      pageSize,
    ],
  };

  getArtists = async (page: number, pageSize: number) => {
    const offset = page * pageSize;
    // Filtramos acá por país y por tipo de artista para acotar la cantidad de resultados a 3037.
    // Sin filtros, la API devuelve mas de 2 millones de resultados.
    // La API no ofrece la opción para obtener menos información por artista que la que se obtiene.
    const parsedQuery = `country:AR AND type:group`;

    const { data } = await httpClient.get<ArtistsResponse>(
      `artist?query=${parsedQuery}&fmt=json&limit=${pageSize}&offset=${offset}`
    );
    return data;
  };
}

const repo = new ArtistsRepository();

// Con este hook logramos obtener mas de 3000 resultados, pero con paginación y cacheo de información.
// con cada campo del hook logramos lo siguiente:
// staleTime: tiempo que los datos se consideran frescos antes de revalidar
// gcTime: tiempo que los datos permanecen en caché antes de eliminarse
// placeholderData: muestra datos anteriores mientras se cargan los nuevos
// refetchOnWindowFocus: desactiva la recarga al volver a la ventana
// Así logramos mostrar una gran cantidad de datos de manera optimizada.

export const useGetArtistsQuery = (page: number, pageSize: number) => {
  return useQuery({
    queryKey: repo.keys.artists(page, pageSize),
    queryFn: () => repo.getArtists(page, pageSize),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
  });
};
