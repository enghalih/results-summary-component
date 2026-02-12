import ScoreCard from "./ScoreCard";
import ScoreForm from "./ScoreForm";
import Button from "./Button";
import s from "./App.module.css";

function App() {
  return (
    <main className={s.container}>
      <ScoreCard />
      <section className={s.content}>
        <h2 className={s.summary}>Summary</h2>
        <ScoreList />
        <Button />
      </section>
    </main>
  );
}

function ScoreList() {
  return (
    <ul className={s.scoreList}>
      <li>
        <ScoreForm color={'red'} title={'Reaction'} score={80}/>
      </li>
      <li>
        <ScoreForm color={'yellow'} title={'Memory'} score={92}/>
      </li>
      <li>
        <ScoreForm color={'green'} title={'Verbal'} score={60}/>
      </li>
      <li>
        <ScoreForm color={'blue'} title={'Visual'} score={70}/>
      </li>
    </ul>
  );
}

export default App;
