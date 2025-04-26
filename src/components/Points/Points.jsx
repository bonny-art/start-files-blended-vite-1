import styles from './Points.module.css';
import Heading from '../Heading/Heading';
import useLocalStorage from '../../hooks/useLocalStorage';

const pointsInitModel = {
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
};

export default function Points() {
  const [points, setPoints] = useLocalStorage('points', pointsInitModel);

  const handleClick = (name, amount) => {
    console.log(name);
    setPoints({ ...points, [name]: points[name] + amount });
  };

  console.log(points);
  return (
    <>
      <div className={styles.points}>
        {Object.keys(points).map((key, i) => (
          <button
            key={key}
            className={`${styles.button} ${styles[key]}`}
            onClick={() => handleClick(key, i + 1)}
          >
            {key}
          </button>
        ))}
      </div>
      <Heading title={'You selected points'} />

      {Object.keys(points).map(key => (
        <p key={key}>
          {key}: {points[key]}
        </p>
      ))}
    </>
  );
}
