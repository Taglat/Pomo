import clsx from "clsx";
import { Header } from "../../components/Header/Header";
import { SvgSettings } from "../../icons";
import { MODES_NAMES } from "../../model/constants";
import style from "./Pomo.module.css";

export function Pomo({state}) {
  const modesNames = Object.values(MODES_NAMES);

  const {mode} = state;

  console.log(mode)
  console.log(modesNames)

  return (
    <>
      <Header link="/settings" linkPageName={SvgSettings} />
      <div className={style.modes}>
        {modesNames.map(modeItem => (<div className={clsx(style.mode, mode === modeItem && style.modeActive)} key={modeItem}>{modeItem}</div>))}
      </div>
    </>
  );
}
