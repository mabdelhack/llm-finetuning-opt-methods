import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "data/methods");
  const filenames = fs.readdirSync(dir);
  const methods = filenames.map((filename) => {
    const file = fs.readFileSync(path.join(dir, filename), "utf-8");
    return JSON.parse(file);
  });

  return { props: { methods } };
}

export default function Home({ methods }) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">🧠 LLM Optimization Methods</h1>
      {methods.map((method, i) => (
        <div key={i} className="p-4 mb-4 border rounded-xl shadow">
          <h2 className="text-xl font-semibold">{method.name}</h2>
          <p className="text-sm text-gray-600">{method.description}</p>
          <div className="text-xs mt-2">
            <p>🧪 Type: {method.method_type.join(", ")}</p>
            <p>💻 GPUs: {method.gpus_required}</p>
            <p>⚡ Speed: {method.training_speed}</p>
            <p>🔗 <a className="text-blue-500" href={method.source} target="_blank" rel="noreferrer">Paper</a></p>
          </div>
        </div>
      ))}
    </div>
  );
}
