import { getClient } from "@/apollo-client";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  // let test = null;

  // if (typeof window !== "undefined") {
  // This code will only run on the client side

  // try {
  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });

  const results: Root = data.myQuery;

  //   test = results;
  // } catch (error) {
  //   console.error("There was an error!", error);
  // }
  // console.log(results, "here");

  console.log(results);

  return (
    <div>
      Welcome to the Weather page: {city} {lat} {long}
    </div>
  );
}

export default WeatherPage;
