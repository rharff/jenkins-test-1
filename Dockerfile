FROM nginx:alpine

# hapus default config
RUN rm -rf /usr/share/nginx/html/*

# copy static files
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
