# 🧠 LLM Optimization Methods Explorer

A collaborative, filterable database of fine-tuning and optimization techniques for large language models (LLMs). This tool helps researchers, engineers, and enthusiasts explore, compare, and contribute methods used to optimize LLMs for performance, alignment, memory efficiency, and more.

---

## 🔗 Live Demo

Check out the deployed version here:  
👉 **[https://llm-finetuning-opt-methods.vercel.app/](https://llm-finetuning-opt-methods.vercel.app/)**  

---

## 🚀 Getting Started

### 🧱 Prerequisites

- Node.js ≥ 18  
- npm ≥ 8  
- Python ≥ 3.8 (for CSV ↔ JSON scripts)  

### 🛠️ Run Locally

1. Clone the repo:

    ```bash
    git clone https://github.com/mabdelhack/llm-finetuning-opt-methods.git
    cd llm-finetuning-opt-methods
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the dev server:

    ```bash
    npm run dev
    ```

4. Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 🧩 Contributing

We welcome contributions of new methods and improvements!

Please see [`CONTRIBUTING.md`](./CONTRIBUTING.md) for how to:

- Add a method
- Submit a pull request  

---

## 🗃️ File Structure

```txt
data/
  methods/                # All method JSON files
pages/
  index.tsx              # Frontend logic
convert_csv_to_json.py   # CSV → JSON generator
convert_json_to_csv.py   # JSON → CSV exporter
llm_methods.csv          # Master editable CSV
```

---

## 📜 License

This project is licensed under the [Apache 2.0 License](LICENSE).

---

## 🙌 Acknowledgments

Built using:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
