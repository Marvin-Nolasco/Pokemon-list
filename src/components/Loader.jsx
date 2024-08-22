import { dotWave } from "ldrs";
import "../main.css";
export const Loader = () => {
  dotWave.register();

  return (
    <div className="loader">
      <l-dot-wave size="47" speed="1" color="black"></l-dot-wave>;
    </div>
  );
};
