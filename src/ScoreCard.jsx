import s from "./ScoreCard.module.css";

export default function ScoreCard() {
  return (
    <article className={s.container}>
      <div className={s.wrapper}>
        <p className={s.result}>Your Result:</p>
        <div className={s.score}>
          <h1 className={s.scoreNumber}>76</h1>
          <p className={s.scoreOf}>of 100</p>
        </div>
        <div className={s.great}>
          <h2 className={s.greatTitle}>Great</h2>
          <p className={s.greatText}>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
    </article>
  );
}
