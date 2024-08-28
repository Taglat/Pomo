import { Header } from "../../components/Header/Header";
import { SvgSettings } from "../../icons";

export function Pomo({state}) {
  const {mode} = state;

  return (
    <>
      <Header link="/settings" linkPageName={SvgSettings} />
      <div>{mode}</div>
    </>
  );
}
