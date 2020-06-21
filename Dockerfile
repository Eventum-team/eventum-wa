FROM node:12

WORKDIR /app

ENV REACT_APP_API_IP=$REACT_APP_API_IP
ENV REACT_APP_API_PORT=$REACT_APP_API_PORT

COPY package*.json ./

RUN npm install

RUN npm install -g serve

COPY . .

CMD ["serve","-s","build","-l","4000"]
