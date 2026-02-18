
import urllib.request

url = "https://connectme.biz/iot-in-industrial-automation/"
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req) as response:
    html = response.read().decode('utf-8')
    with open("debug_html.html", "w", encoding="utf-8") as f:
        f.write(html)
print("HTML saved to debug_html.html")
