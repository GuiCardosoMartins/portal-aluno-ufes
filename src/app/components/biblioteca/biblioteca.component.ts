import { Component } from '@angular/core';
export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  capaUrl: string; // URL da imagem da capa do livro
}

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent {
livrosRecentes: Livro[] = [];
  vistosPorUltimo: Livro[] = [];

  // Configurações para ambos os carrosséis
  slideConfig = {
    "slidesToShow": 4,      
    "slidesToScroll": 4,   
    "dots": true,          
    "infinite": true,    
    "arrows": false,
    "responsive": [
      {
        breakpoint: 1024, // Para telas menores que 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600, // Para telas menores que 600px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480, // Para telas de celular
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros(): void {
    this.livrosRecentes = [
      { id: 1, titulo: 'Engenharia de Software Moderna', autor: 'Marco Tulio Valente', capaUrl: 'https://placehold.co/200x300/3498db/ffffff?text=Livro+1' },
      { id: 2, titulo: 'Sistemas Distribuídos: Princípios e Paradigmas', autor: 'Tanenbaum', capaUrl: 'https://placehold.co/200x300/2ecc71/ffffff?text=Livro+2' },
      { id: 3, titulo: 'Introdução aos Algoritmos', autor: 'Thomas H. Cormen', capaUrl: 'https://placehold.co/200x300/e74c3c/ffffff?text=Livro+3' },
      { id: 4, titulo: 'O Mítico Homem-Mês', autor: 'Frederick P. Brooks Jr.', capaUrl: 'https://placehold.co/200x300/f1c40f/ffffff?text=Livro+4' },
      { id: 5, titulo: 'Código Limpo', autor: 'Robert C. Martin', capaUrl: 'https://placehold.co/200x300/9b59b6/ffffff?text=Livro+5' },
      { id: 6, titulo: 'Arquitetura Limpa', autor: 'Robert C. Martin', capaUrl: 'https://placehold.co/200x300/1abc9c/ffffff?text=Livro+6' }
    ];

    this.vistosPorUltimo = [
      { id: 7, titulo: 'Padrões de Projeto', autor: 'Erich Gamma', capaUrl: 'https://placehold.co/200x300/e67e22/ffffff?text=Livro+7' },
      { id: 3, titulo: 'Introdução aos Algoritmos', autor: 'Thomas H. Cormen', capaUrl: 'https://placehold.co/200x300/e74c3c/ffffff?text=Livro+3' },
      { id: 5, titulo: 'Código Limpo', autor: 'Robert C. Martin', capaUrl: 'https://placehold.co/200x300/9b59b6/ffffff?text=Livro+5' },
      { id: 8, titulo: 'Refatoração', autor: 'Martin Fowler', capaUrl: 'https://placehold.co/200x300/34495e/ffffff?text=Livro+8' }
    ];
  }
}
