#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Create a new image with transparent background
size = 512
img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Draw a professional blue circle (dark blue #1e40af = RGB(30, 64, 175))
draw.ellipse([0, 0, size-1, size-1], fill=(30, 64, 175))

# Try to use a nice font, fallback to default if not available
try:
    font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 200)
except:
    try:
        font = ImageFont.truetype('/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf', 200)
    except:
        font = ImageFont.load_default()

# Draw "UK" text in white, centered
text = 'UK'
bbox = draw.textbbox((0, 0), text, font=font)
text_width = bbox[2] - bbox[0]
text_height = bbox[3] - bbox[1]
x = (size - text_width) / 2
y = (size - text_height) / 2
draw.text((x, y), text, fill=(255, 255, 255), font=font)

# Save as ICO with multiple sizes
img.save('favicon.ico', format='ICO', sizes=[(16,16), (32,32), (48,48), (64,64), (128,128), (256,256)])
print('Round favicon.ico created successfully!')
