import navigation from "./navigation.svg";
import rectangle12 from "./rectangle-12.svg";
import "./style.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <img className="navigation" alt="Navigation" src={navigation} />
      <p className="text-wrapper">Welcome to your favorite tools</p>
      <p className="div">
        Switching music service? Try out the playlist transfer tool
      </p>
      <img className="rectangle" alt="Rectangle" src={rectangle12} />
      <div className="rectangle-2" />
    </div>
  );
};