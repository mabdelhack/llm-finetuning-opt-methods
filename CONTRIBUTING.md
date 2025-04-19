# 🤝 Contributing to the LLM Methods Explorer

Thank you for your interest in contributing! This project aims to build a collaborative, filterable collection of fine-tuning and optimization techniques for large language models (LLMs).

We welcome additions of new methods, corrections, metadata updates, and improvements to the frontend.

---

## 📌 How to Add or Update a Method

1. Go to the `data/methods/` directory.
2. Create a new file named after your method (e.g. `your-method-name.json`)
3. Use the following JSON structure:

    ```json
    {
      "name": "Your Method Name",
      "description": "Short explanation of what this method does.",
      "method_type": ["Fine-Tuning", "Quantization"],
      "gpus_required": "Low",
      "training_speed": "Fast",
      "source": "https://arxiv.org/abs/...",
      "code_url": "https://github.com/your-repo",
      "open_source": true,
      "intended_use": ["Chatbots", "Classification"]
    }
    ```

---

## 🧪 Testing Your Contribution

After adding or editing a method:

- Run the site locally:

    ```bash
    npm run dev
    ```

- Visit [http://localhost:3000](http://localhost:3000) to confirm:
  - Your method appears
  - Filters work as expected

---

## 📬 Submitting Your Changes

1. Fork this repo
2. Create a new branch:

    ```bash
    git checkout -b add-my-method
    ```

3. Commit your changes
4. Push to your fork
5. Open a pull request

We’ll review and merge your contribution soon 🚀

---

## 💡 Suggestions & Feedback

If you have ideas for features, filters, or want to report an issue:

- Open a [GitHub Issue](https://github.com/mabdelhack/llm-finetuning-opt-methods/issues)
