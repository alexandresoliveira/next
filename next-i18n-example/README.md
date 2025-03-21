# next-i18n-example

Projeto de exemplo de configuração de internacionalização.

## Libs

É necessário instalar as seguintes libs:

- @formatjs/intl-localematcher
- negotiator

em desenvolvimento

- @types/negotiator

## Configurando um novo idioma:

Para configurar um novo idioma é necessário:

1. Adicionar o arquivo json em src/dictionaries seguindo os moldes dos existentes.
2. Mapear o novo idioma em src/get-dictionary.ts
3. Adicionar o código do novo idioma em src/i18n-config.ts

Pronto!
