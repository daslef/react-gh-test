import { createFileRoute, Link } from "@tanstack/react-router";
import WorkCard from "@/components/work-card";
import { work_data } from "@/work-data";

export const Route = createFileRoute("/work")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <h2>Work</h2>
      <section>
        {work_data.map(({ id, ...props }) => {
          return (
            <Link to="/works/$id" params={{ id: String(id) }}>
              <WorkCard {...props} key={`work_${id}`} />
            </Link>
          );
        })}
      </section>
    </main>
  );
}
