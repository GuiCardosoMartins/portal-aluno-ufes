# Portal do Aluno UFES - Angular

Este é um projeto Angular para o Portal do Aluno da Universidade Federal do Espírito Santo (UFES), desenvolvido com foco em dispositivos móveis.

## 🚀 Funcionalidades

- **Página de Login Responsiva**: Interface otimizada para mobile com validação de formulário
- **Design Moderno**: Interface seguindo o padrão visual da UFES
- **Validação em Tempo Real**: Feedback visual para campos obrigatórios
- **Funcionalidade "Lembrar de Mim"**: Salva a matrícula do usuário
- **Toggle de Senha**: Botão para mostrar/ocultar a senha
- **Estados de Loading**: Indicadores visuais durante o processo de login
- **Acessibilidade**: Suporte para navegação por teclado e leitores de tela

## 🛠️ Tecnologias Utilizadas

- **Angular 16**: Framework principal
- **TypeScript**: Linguagem de programação
- **SCSS**: Pré-processador CSS
- **Font Awesome**: Ícones
- **Angular Forms**: Validação de formulários
- **Angular Router**: Navegação entre páginas

## 📱 Características Mobile-First

- Design responsivo para todos os tamanhos de tela
- Otimizado para dispositivos móveis
- Prevenção de zoom automático em inputs (iOS)
- Touch-friendly com botões e campos adequados para toque
- Animações suaves e feedback visual

## 🎨 Design System

### Cores da UFES
- **Azul Principal**: #1e3a8a
- **Azul Claro**: #3b82f6
- **Azul Escuro**: #1e40af
- **Cinza**: #6b7280
- **Branco**: #ffffff

### Tipografia
- **Fonte Principal**: Segoe UI
- **Tamanhos Responsivos**: Adaptáveis para diferentes dispositivos

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd portal-aluno-ufes
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm start
```

4. Abra o navegador em `http://localhost:4200`

### Build para Produção
```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── login/
│   │   │   ├── login.component.html
│   │   │   ├── login.component.scss
│   │   │   └── login.component.ts
│   │   └── dashboard/
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets/
│   └── ufes-logo.svg
└── styles.scss
```

## 🔧 Configurações

### Roteamento
- `/` → Redireciona para `/login`
- `/login` → Página de login
- `/dashboard` → Dashboard do aluno
- `/**` → Redireciona para `/login`

### Formulário de Login
- **Matrícula**: Campo obrigatório
- **Senha**: Campo obrigatório
- **Lembrar de Mim**: Salva a matrícula no localStorage
- **Esqueci minha Senha**: Link para recuperação (a implementar)

## 🎯 Próximos Passos

- [ ] Implementar autenticação real com backend
- [ ] Adicionar página de recuperação de senha
- [ ] Implementar dashboard do aluno
- [ ] Adicionar testes unitários
- [ ] Implementar PWA (Progressive Web App)
- [ ] Adicionar internacionalização (i18n)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Equipe

- Desenvolvido para a Universidade Federal do Espírito Santo (UFES)
- Foco em experiência do usuário mobile-first
- Acessibilidade e usabilidade como prioridades

## 📞 Suporte

Para dúvidas ou suporte, entre em contato com a equipe de desenvolvimento da UFES.

---

**UFES** - Universidade Federal do Espírito Santo  
**Portal do Aluno** - Sistema de acesso para estudantes
