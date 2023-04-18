// Clase Pai: Multimedia

class Multimedia {

    constructor(titulo, formato, descripcion, autor) {
        
        this.titulo = titulo;
        this.formato = formato;
        this._descripcion = descripcion;
        this._autor = autor;

    }

    get descripcion() { return this._descripcion; }
    set descripcion(descripcion) { this._descripcion = descripcion; }
    get autor() { return this._autor; }
    set autor(autor) { this._autor = autor; }

}


// Clase Filla 1: Peliculas
class Peliculas extends Multimedia {

    #director;
    #duracion;

    constructor(titulo, formato, descripcion, autor, director, duracion) {
        
        super(titulo, formato, descripcion, autor);
        this.#director = director;
        this.#duracion = duracion;

    }

    
    get director() { return this.#director; }
    set director(director) { this.#director = director; }

    get duracion() { return this.#duracion; }
    set duracion(duracion) { this.#duracion = duracion;}

}


// Clase filla 2: Series
class Series extends Multimedia {
    
    #temporadas;
    #episodios;

    constructor(titulo, formato, descripcion, autor, temporadas, episodios, primeira_emision, ultima_emision) {
        
        super(titulo, formato, descripcion, autor);
        this.#temporadas = temporadas;
        this.#episodios = episodios;

    }

    
    get temporadas() { return this.#temporadas; }
    set temporadas(temporadas) { this.#temporadas = temporadas; }

    get episodios() { return this.#episodios; }
    set episodios(episodios) { this.#episodios = episodios; }

}

// Instanciamos as Clase Películas:
const pelicula1 = new Peliculas("Harry Potter e a Pedra filosofal", "DVD", "A historia dun xoven mago que descobre o mundo máxico", "J.K. Rowling", "Chris Columbus", 152);
const pelicula2 = new Peliculas("Harry Potter e o Prisioneiro de Azkaban", "DVD", "Harry Potter enfronta a un perigoso fuxitivo de Azkaban", "J.K. Rowling", "Alfonso Cuarón", 142);
const pelicula3 = new Peliculas("Harry Potter e o Cálice de fogo", "DVD", "Harry Potter debe competir nun perigoso torneo de maxia", "J.K. Rowling", "Mike Newell", 157);
const pelicula4 = new Peliculas("Harry Potter e as Reliquias da Morte - Parte 1", "Blu-ray", "Harry Potter e os seus amigos buscan as reliquias da morte para destruír a Voldemort", "J.K. Rowling", "David Yates", 146);

// Instanciamos a Clase Series: 
const serie1 = new Series("Xogo de Tronos", "Blu-ray", "Unha épica historia de fantasía sobre poder, traizón e guerra.", "David Benioff, D.B.Weiss", 8, 73);
const serie2 = new Series("Breaking Bad", "Blu-ray", "A transformación dun profesor de química nun narcotraficante perigoso.",  "Vince Gilligan", 5, 62);
const serie3 = new Series("Stranger Things", "DVD", "Un grupo de amigos loitando contra forzas sobrenaturais na década de 1980.", "The Duffer Brothers", 4, 25);
const serie4 = new Series("Serramoura", "DVD", "Un drama policial ambientado nunha pequena aldea galega onde se desentraña unha complexa rede de corrupción.", "Alberto Guntín, Víctor Sierra, Xosé Morais", 11, 173)


console.log(pelicula1, pelicula2, pelicula3, pelicula4);
console.log(serie1, serie2, serie3, serie4);