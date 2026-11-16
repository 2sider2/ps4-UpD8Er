# World Clock

A simple digital clock app that shows the current time across multiple time zones.

## Run it locally

Open `index.html` in a browser, or serve the folder using a local web server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Included time zones

- UTC
- New York
- Los Angeles
- London
- Berlin
- Dubai
- Tokyo
- Singapore
- Sydney

This app updates every second and formats times using the browser's `Intl.DateTimeFormat`, so it stays accurate for each time zone.
