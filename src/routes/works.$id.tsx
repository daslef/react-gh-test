import { createElement } from 'react';
import { createFileRoute } from '@tanstack/react-router'
import { work_data } from "@/work-data";

const typesMapping = {
  h1: "h3",
  h2: "h4",
  text: "p"
} as const;

export const Route = createFileRoute('/works/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const { full_title, text, content } = work_data.find(
    record => record.id === Number(id)
  )!

  return (
    <main>
      <h2>{full_title}</h2>
      <p>{text}</p>
      {content.map(([elementType, elementValue]) => {
        if (elementType === 'img') {
          return createElement('img', { src: elementValue })
        }
        return createElement(typesMapping[elementType], null, elementValue)
      })}
    </main>
  )
}
