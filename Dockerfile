FROM node:latest

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY public public
COPY jsconfig.json jsconfig.json
COPY next.config.js next.config.js
COPY postcss.config.js postcss.config.js
COPY tailwind.config.js tailwind.config.js
COPY src src

ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL

RUN npm run build

CMD ["npm", "start"]
