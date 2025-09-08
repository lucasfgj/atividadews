# Usar a imagem Node.js como base
FROM node:14 AS builder

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o código da aplicação para o container
COPY . .

# Criar a build da aplicação
RUN npm run build

# Usar uma imagem leve para servir o conteudo
FROM nginx:alpine

# Copiar a build para o diretório do Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Expor a porta na qual o Nginx ira rodar
EXPOSE 80

# Comando por padrão ao iniciar o container
CMD ["nginx", "-g", "daemon off;"]