# LP Genos — Exclusivo para clínicas

Landing page do Sistema Reabilita, publicada em
**[clinicas.genosgroup.com.br](https://clinicas.genosgroup.com.br)**.

## Stack

- **TanStack Start** (React 19 + SSR) com roteamento por arquivos
- **Tailwind CSS v4** + **shadcn/ui**
- Build via **Nitro** com preset `cloudflare-module`
- Hospedagem: **Cloudflare Workers** (plano free atende com folga)

Sem dependência de plataformas de terceiros: o projeto builda e publica
apenas com pacotes públicos do npm.

## Rodando localmente

```bash
bun install
bun run dev
```

A aplicação sobe em `http://localhost:5173`.

Outros comandos:

| Comando | O que faz |
| --- | --- |
| `bun run build` | Gera o build de produção em `.output/` |
| `bun run deploy` | Publica no Cloudflare Workers |
| `bun run deploy:dry` | Simula o deploy sem publicar |
| `bun run lint` | Roda o ESLint |
| `bun run format` | Formata com Prettier |

## Deploy

O deploy é automático: **todo push na branch `main` publica o site**, através
do workflow em `.github/workflows/deploy.yml`.

Para funcionar, o repositório precisa de dois secrets
(*Settings → Secrets and variables → Actions*):

- `CLOUDFLARE_API_TOKEN` — token com a permissão *Edit Cloudflare Workers*
- `CLOUDFLARE_ACCOUNT_ID` — ID da conta, disponível na barra lateral do painel

Para publicar manualmente, sem passar pelo GitHub:

```bash
bun run build && bun run deploy
```

### Alternativa: Workers Builds

Em vez do GitHub Actions, dá para conectar o repositório direto no painel do
Cloudflare (*Workers & Pages → Create → Connect to Git*). Nesse modo não é
preciso cadastrar secrets, mas o histórico de build fica no painel da
Cloudflare em vez de ficar no GitHub.

## Estrutura

```
src/
  routes/
    __root.tsx     Shell do HTML, metatags e Meta Pixel
    index.tsx      A landing page inteira
  components/ui/   Componentes shadcn/ui
  styles.css       Tema (design tokens) e animações
  server.ts        Entrada do Worker, com tratamento de erro de SSR
public/
  og-image.png     Imagem de preview ao compartilhar o link
```

## Pontos de manutenção

Valores que mudam com frequência, e onde mexer:

- **Link do WhatsApp** — constante `WHATSAPP_URL` no topo de `src/routes/index.tsx`
- **Meta Pixel** — constante `META_PIXEL_ID` em `src/routes/__root.tsx`
- **Depoimentos** — array `testimonials` em `src/routes/index.tsx` (aceita
  link do YouTube completo ou só o ID)
- **Números, casos e cards do método** — arrays `stats`, `cases` e `cards`,
  no mesmo arquivo
- **Metatags e imagem de compartilhamento** — `src/routes/__root.tsx`
