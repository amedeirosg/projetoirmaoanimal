import Actions from "./Components/Actions/actions";
import Help from "./Components/Help/help";
import HeroHeader from "./Components/HeroHeader/heroheader";
import Project from "./Components/Project/project";

export default function Home() {
  return (
    <main>
      <HeroHeader />
      <Project />
      <Actions />
      <Help/>
    </main>
  );
}
