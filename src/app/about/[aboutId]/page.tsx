export default function AboutList({ params }: { params: { aboutId: string } }) {
  return <h1>HELP from about {params.aboutId}</h1>;
}
