# parklet-crawl
[![Coverage Status](https://coveralls.io/repos/github/hangoutsidesf/parklet-crawl/badge.svg?branch=master)](https://coveralls.io/github/hangoutsidesf/parklet-crawl?branch=master) [![CircleCI](https://circleci.com/gh/hangoutsidesf/parklet-crawl/tree/development.svg?style=shield)](https://circleci.com/gh/hangoutsidesf/parklet-crawl/tree/development)

 This is a web scraper. We will populate our database with data from: [Data SF](https://data.sfgov.org/Culture-and-Recreation/Parklet-Permits/jczu-j2ku) on all of the parklets in SF.

## Usage

### Development
#### Localhost
1. install dependencies (`npm install`)
2. start server in development mode (`npm run start:dev`)

#### Container
1. `npm run deploy:develop` will build and run latest local changes in dev mode
2. `npm run deploy:staging` will build and run latest local changes in staging mode
3. `docker-compose stop` will down crawler container



### Production
1. Clone the repo
```
git clone https://github.com/hangoutsidesf/parklet-crawl.git crawler

cd crawler
```

2. Start Production Container
```bash
npm run deploy:prod
```

## TODO
1. Edit `start` script to auto exit when data is collected

