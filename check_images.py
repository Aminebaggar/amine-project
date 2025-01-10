from PIL import Image
import os

image_dir = 'images/story'
for filename in os.listdir(image_dir):
    if filename.endswith(('.jpg', '.png', '.jpeg')):
        with Image.open(os.path.join(image_dir, filename)) as img:
            print(f"{filename}: {img.size[0]}x{img.size[1]}")
