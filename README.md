## parklet-crawl

> This is a web scraper. We will populate our database with data from: [Data SF](https://data.sfgov.org/Culture-and-Recreation/Parklet-Permits/jczu-j2ku) on all of the parklets in SF.

## Usage
- Clone the repo
```
git clone https://github.com/hangoutsidesf/parklet-crawl.git crawler

cd crawler
```

- Install Dependencies
```
npm i
```

- Build
```
npm run build
```
> will compile src to /dist

- Collect Data
```
npm run crawl
```

## TODO
1. Edit `crawl` script to auto exit when data is collected
