// ============================================================
//  LISTA DE FIGURAS
//  Para añadir una figura nueva, copia un bloque { ... } y cambia:
//    titulo      -> nombre de la figura
//    imagen      -> ruta a la foto (ej: "img/castillo.jpg") o "" si aún no hay
//    enlace      -> web donde están los planos e instrucciones
//    autor       -> quién la diseñó
//    tiempo      -> "Corto", "Medio" o "Largo"
//    megusta     -> número de me gusta
//    vistas      -> número de visualizaciones
//    dificultad  -> "Fácil", "Media" o "Difícil"
//    categoria   -> "Edificios" u "Objetos"
//    fecha       -> "AAAA-MM-DD"
//  Las más recientes salen primero.
// ============================================================

const FIGURAS = [
  {
    titulo: "Casita de jengibre",
    imagen: "",
    enlace: "https://example.com/planos/casita",
    autor: "Celia",
    tiempo: "Corto",
    megusta: 12,
    vistas: 340,
    dificultad: "Fácil",
    categoria: "Edificios",
    fecha: "2026-10-01"
  },
  {
    titulo: "Árbol de Navidad 3D",
    imagen: "",
    enlace: "https://example.com/planos/arbol",
    autor: "Celia",
    tiempo: "Medio",
    megusta: 5,
    vistas: 128,
    dificultad: "Media",
    categoria: "Objetos",
    fecha: "2026-09-20"
  },
  {
    titulo: "Castillo con torres",
    imagen: "",
    enlace: "https://example.com/planos/castillo",
    autor: "Celia",
    tiempo: "Largo",
    megusta: 27,
    vistas: 1250,
    dificultad: "Difícil",
    categoria: "Edificios",
    fecha: "2026-09-05"
  },
  {
    titulo: "Gato sentado",
    imagen: "",
    enlace: "https://example.com/planos/gato",
    autor: "Celia",
    tiempo: "Corto",
    megusta: 12,
    vistas: 340,
    dificultad: "Fácil",
    categoria: "Objetos",
    fecha: "2026-08-18"
  },
  {
    titulo: "Trineo de Papá Noel",
    imagen: "",
    enlace: "https://example.com/planos/trineo",
    autor: "Celia",
    tiempo: "Medio",
    megusta: 5,
    vistas: 128,
    dificultad: "Media",
    categoria: "Objetos",
    fecha: "2026-08-02"
  },
  {
    titulo: "Molino de viento",
    imagen: "",
    enlace: "https://example.com/planos/molino",
    autor: "Celia",
    tiempo: "Largo",
    megusta: 27,
    vistas: 1250,
    dificultad: "Difícil",
    categoria: "Edificios",
    fecha: "2026-07-14"
  }
];
