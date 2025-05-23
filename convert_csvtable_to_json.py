import os
import json
import re
import pandas as pd

# Load your CSV file (update filename as needed)
df = pd.read_csv("./data/llm_methods.csv").fillna("")

# Basic slugify function (turns method name into filename-safe string)
def slugify(value):
    value = str(value).lower()
    value = re.sub(r"[^\w\s-]", "", value)
    value = re.sub(r"[\s_-]+", "-", value)
    value = re.sub(r"^-+|-+$", "", value)
    return value

# Output folder (adjust if needed)
output_dir = "data/methods"
os.makedirs(output_dir, exist_ok=True)

# Convert each row to a JSON file
for _, row in df.iterrows():
    method = {
        "name": row["name"],
        "description": row["description"],
        "method_type": [s.strip() for s in str(row["method_type"]).split(",") if s.strip()],
        "gpus_required": row["gpus_required"],
        "training_speed": row["training_speed"],
        "source": row["source"],
        "code_url": row["code_url"],
        "open_source": str(row["open_source"]).lower() == "true",
        "intended_use": [s.strip() for s in str(row["intended_use"]).split(",") if s.strip()]
    }

    filename = f"{slugify(row['name'])}.json"
    with open(os.path.join(output_dir, filename), "w") as f:
        json.dump(method, f, indent=2)

print(f"✅ JSON files written to '{output_dir}/'")
