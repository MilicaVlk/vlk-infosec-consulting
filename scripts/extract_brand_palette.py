from collections import Counter
from pathlib import Path
from PIL import Image

IMAGE_PATH = Path('/home/ubuntu/webdev-static-assets/vlk-brand/vlk-colors-reference.png')

image = Image.open(IMAGE_PATH).convert('RGB')
image.thumbnail((800, 800))
colors = Counter()
for red, green, blue in image.getdata():
    # Quantize nearby pixels so gradients resolve into representative brand swatches.
    key = (round(red / 16) * 16, round(green / 16) * 16, round(blue / 16) * 16)
    colors[key] += 1

for (red, green, blue), count in colors.most_common(20):
    print(f'#{red:02X}{green:02X}{blue:02X} {count}')

print('--- likely gold ---')
for (red, green, blue), count in colors.most_common():
    if red > 140 and green > 100 and blue < 180 and red > green > blue:
        print(f'#{red:02X}{green:02X}{blue:02X} {count}')
        if count < 300:
            break

print('--- likely light ---')
for (red, green, blue), count in colors.most_common():
    if red > 170 and green > 170 and blue > 160:
        print(f'#{red:02X}{green:02X}{blue:02X} {count}')
        if count < 300:
            break
