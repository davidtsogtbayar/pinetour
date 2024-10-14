import { Header } from "./components";
import { Hero } from "./components";
import { Destination } from "./components";
import { Pricing } from "./components";
import { Ready } from "./components";
export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Hero />
      <Destination />
      <Pricing />
      <Ready />
    </div>
  );
};
