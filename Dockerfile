# Use uma imagem Cypress oficial com Node.js e navegadores pré-instalados
FROM cypress/included:13.5.0

# Defina o diretório de trabalho na imagem
WORKDIR /app

# Copie os arquivos de configuração (package.json e package-lock.json)
COPY package.json .
COPY tsconfig.json . 

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Comando para rodar os testes de integração
CMD ["npm", "run", "cy:run"]