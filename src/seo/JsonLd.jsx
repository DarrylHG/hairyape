import { Helmet } from "react-helmet-async";

export default function JsonLd({ data }) {
  if (!data) return null;
  const json = Array.isArray(data) ? data : [data];

  return (
    <Helmet>
      {json.map((obj, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}
