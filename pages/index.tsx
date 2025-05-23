import fs from "fs";
import path from "path";
import { useState } from "react";

type Method = {
  name: string;
  description: string;
  method_type: string[];
  gpus_required: number;
  training_speed: string;
  model_compatibility: string[];
  frameworks: string[];
  license: string;
  source: string;
  code_url?: string;
  open_source: boolean;
  data_requirements: string;
  inference_optimized: boolean;
  intended_use: string[];
};

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "data/methods");
  const filenames = fs.readdirSync(dir);
  const methods = filenames.map((filename) => {
    const file = fs.readFileSync(path.join(dir, filename), "utf-8");
    return JSON.parse(file) as Method;
  });

  return { props: { methods } };
}

export default function Home({ methods }: { methods: Method[] }) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedGPUs, setSelectedGPUs] = useState<number[]>([]);
  const [selectedSpeeds, setSelectedSpeeds] = useState<string[]>([]);
  const [hasCode, setHasCode] = useState<boolean>(false);

  const allTypes = Array.from(new Set(methods.flatMap((m) => m.method_type))).sort();
  const allGPUs = Array.from(new Set(methods.map((m) => m.gpus_required))).sort((a, b) => a - b);
  const allSpeeds = Array.from(new Set(methods.map((m) => m.training_speed))).sort();

  const toggle = <T extends string | number>(
    value: T,
    list: T[],
    setList: (list: T[]) => void
  ) => {
    if (list.includes(value)) {
      setList(list.filter((v) => v !== value));
    } else {
      setList([...list, value]);
    }
  };

  const filtered = methods.filter((m) => {
    const typeMatch = selectedTypes.length === 0 || m.method_type.some((t) => selectedTypes.includes(t));
    const gpuMatch = selectedGPUs.length === 0 || selectedGPUs.includes(m.gpus_required);
    const speedMatch = selectedSpeeds.length === 0 || selectedSpeeds.includes(m.training_speed);
    const codeMatch = !hasCode || Boolean(m.code_url);
    return typeMatch && gpuMatch && speedMatch && codeMatch;
  });

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6 gap-6">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 space-y-6">
        <FilterGroup
          title="Method Type"
          items={allTypes}
          selected={selectedTypes}
          toggle={(v) => toggle(v, selectedTypes, setSelectedTypes)}
        />
        <FilterGroup
          title="GPUs Required"
          items={allGPUs}
          selected={selectedGPUs}
          toggle={(v) => toggle(v, selectedGPUs, setSelectedGPUs)}
        />
        <FilterGroup
          title="Training Speed"
          items={allSpeeds}
          selected={selectedSpeeds}
          toggle={(v) => toggle(v, selectedSpeeds, setSelectedSpeeds)}
        />
        <div>
          <h3 className="font-semibold mb-2">Has Open Source Code</h3>
          <label className="flex items-center gap-2 text-sm mb-4">
            <input
              type="checkbox"
              checked={hasCode}
              onChange={() => setHasCode(!hasCode)}
            />
            Show only methods with public code
          </label>
        </div>
      </div>

      {/* Method Cards */}
      <div className="w-full md:w-3/4 space-y-4">
        {filtered.length === 0 && (
          <p className="text-gray-500">No methods match your filters.</p>
        )}
        {filtered.map((method, i) => (
          <div key={i} className="p-4 border rounded-xl shadow">
            <h2 className="text-xl font-semibold">{method.name}</h2>
            <p className="text-sm text-gray-600">{method.description}</p>
            <div className="text-xs mt-2 space-y-1">
              <p>🧪 Type: {method.method_type.join(", ")}</p>
              <p>💻 GPUs: {method.gpus_required}</p>
              <p>⚡ Speed: {method.training_speed}</p>
              <p>🔗 <a href={method.source} target="_blank" rel="noreferrer" className="text-blue-500">Paper</a></p>
              {method.code_url && (
                <p>📂 <a href={method.code_url} target="_blank" rel="noreferrer" className="text-blue-500">Code</a></p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Generic, type-safe FilterGroup
type FilterGroupProps<T extends string | number> = {
  title: string;
  items: T[];
  selected: T[];
  toggle: (val: T) => void;
};

function FilterGroup<T extends string | number>({
  title,
  items,
  selected,
  toggle,
}: FilterGroupProps<T>) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i}>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => toggle(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
