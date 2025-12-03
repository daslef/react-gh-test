import type { WorkData } from "@/work-data";
import classes from "./work-card.module.css";


type WorkCardProps = Pick<WorkData[0], 'title' | 'tags' | 'main_img' | 'year' | 'text'>

export default function WorkCard({
  title,
  tags,
  main_img,
  year,
  text,
}: WorkCardProps) {
  return (
    <article className={classes.card}>
      <div className={classes.wrapper}>
        <img className={classes.image} src={main_img} alt="work image" />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <div>
          <span>{year}</span>
          <span>{tags[0]}</span>
        </div>
        <p>{text}</p>
      </div>
    </article>
  );
}
