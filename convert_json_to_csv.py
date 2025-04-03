import os
import json
import pandas as pd

input_dir = "data/methods"
output_csv = "llm_methods.csv"

rows = []

# Loop through all JSON files in the folder
for filename in os.listdir(input_dir):
    if filename.endswith(".json"):
        with open(os.path.join(input_dir, filename), "r") as f:
            data = json.load(f)

        # Flatten lists into comma-separated strings
        row = {
            "name": data.get("name", ""),
            "description": data.get("description", ""),
            "method_type": ", ".join(data.get("method_type", [])),
            "gpus_required": data.get("gpus_required", ""),
            "training_speed": data.get("training_speed", ""),
            "model_compatibility": ", ".join(data.get("model_compatibility", [])),
            "frameworks": ", ".join(data.get("frameworks", [])),
            "license": data.get("license", ""),
            "source": data.get("source", ""),
            "code_url": data.get("code_url", ""),
            "open_source": data.get("open_source", False),
            "data_requirements": data.get("data_requirements", ""),
            "inference_optimized": data.get("inference_optimized", False),
            "intended_use": ", ".join(data.get("intended_use", []))
        }

        rows.append(row)

# Create and save DataFrame
df = pd.DataFrame(rows)
df.to_csv(output_csv, index=False)

print(f"✅ CSV updated from JSON files: {output_csv}")
