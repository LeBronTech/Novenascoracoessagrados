# Instruções do Copilot para o projeto Novenascoracoessagrados

Este projeto é um aplicativo Next.js bootstrapped com Firebase Studio, projetado para implantação no GitHub Pages. O foco principal é a geração de áudio de orações e reflexões teológicas, utilizando o Genkit no diretório `src/ai`.

## 1. Visão Geral da Arquitetura

- **Frontend**: Desenvolvido com Next.js, utilizando o diretório `src/app` para roteamento e o diretório `src/components` para componentes reutilizáveis.
- **Backend/IA**: O diretório `src/ai` contém a lógica de IA, incluindo fluxos Genkit para `generate-prayer-audio` e `generate-theological-reflection`.
- **UI Kit**: Componentes de UI reutilizáveis são encontrados em `src/components/ui`.
- **Estrutura de Dados**: O diretório `src/lib` contém dados e utilitários.

## 2. Fluxos de Trabalho de Desenvolvimento Essenciais

### 2.1. Execução Local

Para iniciar o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

### 2.2. Construção e Implantação

Este projeto é configurado para implantação no GitHub Pages. O processo de construção pode ser iniciado via:

```bash
npm run build
```

As configurações específicas de implantação para o GitHub Pages podem ser encontradas em `.github/workflows/deploy.yml` (se existir) ou na configuração do Next.js e `apphosting.yaml`.

## 3. Convenções e Padrões do Projeto

- **Organização de Código**:
    - **Páginas e Rotas**: Residem em `src/app`.
    - **Componentes**: Divididos entre componentes gerais em `src/components` e componentes de UI genéricos em `src/components/ui`.
    - **Lógica de IA**: Implementada em `src/ai`, com fluxos Genkit em `src/ai/flows`.
    - **Hooks Personalizados**: Encontrados em `src/hooks`.
    - **Utilitários e Dados**: Localizados em `src/lib`.
- **Tecnologias**:
    - **Next.js**: Framework React para o frontend.
    - **Genkit**: Usado para a orquestração de fluxos de IA.
    - **Tailwind CSS**: Para estilização.

## 4. Pontos de Integração

- **Integração de IA**: Os fluxos em `src/ai/flows` são os principais pontos de integração para a lógica de IA, consumindo e produzindo dados relacionados a orações e reflexões.
- **Integração de Dados**: `src/lib/data.ts` e outros arquivos em `src/lib` gerenciam a interação com dados, incluindo dados de devoções e imagens de espaço reservado.

---

Por favor, forneça feedback sobre quaisquer seções que não estejam claras ou que precisem de mais detalhes.
