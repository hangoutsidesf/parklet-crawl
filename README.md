## parklet-crawl

 This is a web scraper. We will populate our database with data from: [Data SF](https://data.sfgov.org/Culture-and-Recreation/Parklet-Permits/jczu-j2ku) on all of the parklets in SF.

## Usage
1. Clone the repo
```
git clone https://github.com/hangoutsidesf/parklet-crawl.git crawler

cd crawler
```

2. Install Dependencies
```
npm i
```

3. Build
```
npm run build
```
>> will compile src to /dist

4. Collect Data
```
npm run crawl
```

## TODO
1. Edit `crawl` script to auto exit when data is collected
