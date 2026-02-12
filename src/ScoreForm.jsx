import s from "./ScoreForm.module.css";
import ReactionIcon from "./assets/images/icon-reaction.svg";
import MemoryIcon from "./assets/images/icon-memory.svg";
import VerbalIcon from "./assets/images/icon-verbal.svg";
import VisualIcon from "./assets/images/icon-visual.svg";

const icons = {
  reaction: ReactionIcon,
  memory: MemoryIcon,
  verbal: VerbalIcon,
  visual: VisualIcon,
}

export default function ScoreForm({ color, title, score }) {
  const Icon = icons[title.toLowerCase()];

  return (
    <article className={`${s.container} ${s[color]}`}>
      <div className={s.title}>
        <img src={Icon} alt="" aria-hidden="true" />
        {title}
      </div>

      <div className={s.score}>
        {score} <span className={s.scoreOf}>/ 100</span>
      </div>
    </article>
  );
}
