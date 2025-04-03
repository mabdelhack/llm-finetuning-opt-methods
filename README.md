# 🧠 LLM Optimization Methods Explorer

A collaborative, filterable database of fine-tuning and optimization techniques for large language models (LLMs). This tool helps researchers, engineers, and enthusiasts explore, compare, and contribute methods used to optimize LLMs for performance, alignment, memory efficiency, and more.

---

## 🔗 Live Demo

Check out the deployed version here:  
👉 **[https://your-deployment-url.com](https://your-deployment-url.com)**  
*(Replace this with your actual Vercel or Netlify link)*

---

## ✨ Features

- 🔍 Filter methods by type, GPU requirement, training speed, and more  
- ✅ Multi-select filters via sidebar (like online shopping UX)  
- 📁 Methods stored in editable JSON or CSV format  
- 🧑‍💻 Open-source and community-contributable via GitHub  
- 🔄 Sync tools to convert CSV ⇄ JSON  

---

## 🚀 Getting Started

### 🧱 Prerequisites

- Node.js ≥ 18  
- npm ≥ 8  
- Python ≥ 3.8 (for CSV ↔ JSON scripts)  

### 🛠️ Run Locally

1. Clone the repo:

    ```bash
    git clone https://github.com/YOUR_USERNAME/llm-methods-explorer.git
    cd llm-methods-explorer
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

- Add a method via CSV or JSON  
- Regenerate method files using `convert_csv_to_json.py`  
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
- [Hugging Face](https://huggingface.co/)

And with inspiration from the amazing open-source AI community 💙
