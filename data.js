var jsonData = [
    
        {
            "question": "Welche der folgenden Funktionen ist stetig überall auf den reellen Zahlen?",
            "op1":"f(x) = 1/x",
            "op2":"f(x) = sin(x)",
            "op3":"f(x) = ln(x)",
            "op4":"f(x) = 1/x^2",
            "answer": "f(x) = sin(x)",
            "category": "Mathematik"
        },
        {
            "question": "Was ist das Ergebnis der Ableitung von f(x) = x^3?",
            "op1":"3x^2",
            "op2":"x^2",
            "op3":"3x^3",
            "op4":"x^3",
            "answer": "3x^2",
            "category": "Mathematik"
        },
        {
            "question": "Welcher Wert ist die Lösung der Gleichung: ∫_0^1 (2x) dx?",
            "op1":"0",
            "op2":"1",
            "op3":"2",
            "op4":"4",
            "answer": "1",
            "category": "Mathematik"
        },
        {
            "question": "Wie viele Nullstellen hat das Polynom f(x) = x^2 - 4?",
            "op1":"Keine",
            "op2":"Eine",
            "op3":"Zwei",
            "op4":"Unendlich viele",
            "answer": "Zwei",
            "category": "Mathematik"
        },
        {
            "question": "Was ist die Determinante der Matrix A = [[1, 2], [3, 4]]?",
            "op1":"10",
            "op2":"0",
            "op3":"-2",
            "op4":"-10",
            "answer": "-2",
            "category": "Mathematik"
        },
        {
            "question": "Was ist die allgemeine Lösung der Differentialgleichung dy/dx = y?",
            "op1":"y = e^x",
            "op2":"y = e^(-x)",
            "op3":"y = C * e^x",
            "op4":"y = C * x",
            "answer": "y = C * e^x",
            "category": "Mathematik"
        },
        {
            "question": "Welcher Satz besagt, dass jede Cauchy-Folge in den reellen Zahlen konvergiert?",
            "op1":"Satz von Bolzano-Weierstraß",
            "op2":"Satz von Heine-Borel",
            "op3":"Satz von Banach",
            "op4":"Satz von Cauchy",
            "answer": "Satz von Bolzano-Weierstraß",
            "category": "Mathematik"
        },
        {
            "question": "Was ist die Fourier-Transformierte von f(x) = δ(x) (Dirac-Delta-Funktion)?",
            "op1":"1",
            "op2":"2π",
            "op3":"e^(-ix)",
            "op4":"δ(k)",
            "answer": "1",
            "category": "Mathematik"
        },
        {
            "question": "Was ist der Rang einer 3x3-Einheitsmatrix?",
            "op1":"0",
            "op2":"1",
            "op3":"2",
            "op4":"3",
            "answer": "3",
            "category": "Mathematik"
        },
        {
            "question": "Was ist die Summe der unendlichen geometrischen Reihe 1 + 1/2 + 1/4 + 1/8 + ...?",
            "op1":"2",
            "op2":"1",
            "op3":"Unendlich",
            "op4":"1.5",
            "answer": "2",
            "category": "Mathematik"
        },
        
        {
            "question": "In welchem Jahr wurde die Berliner Mauer errichtet?",
            "op1":"1953",
            "op2":"1961",
            "op3":"1969",
            "op4":"1975",
            "answer": "1961",
            "category": "Geschichte"
        },
        {
            "question": "Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?",
            "op1":"Willy Brandt",
            "op2":"Helmut Kohl",
            "op3":"Konrad Adenauer",
            "op4":"Ludwig Erhard",
            "answer": "Konrad Adenauer",
            "category": "Geschichte"
        },
        {
            "question": "Wann begann der Zweite Weltkrieg?",
            "op1":"1914",
            "op2":"1939",
            "op3":"1945",
            "op4":"1941",
            "answer": "1939",
            "category": "Geschichte"
        },
        {
            "question": "Welche Schlacht markierte das Ende der napoleonischen Kriege?",
            "op1":"Schlacht von Leipzig",
            "op2":"Schlacht von Waterloo",
            "op3":"Schlacht von Austerlitz",
            "op4":"Schlacht von Trafalgar",
            "answer": "Schlacht von Waterloo",
            "category": "Geschichte"
        },
        {
            "question": "Welches Jahr gilt als das Jahr der deutschen Wiedervereinigung?",
            "op1":"1985",
            "op2":"1989",
            "op3":"1990",
            "op4":"1991",
            "answer": "1990",
            "category": "Geschichte"
        },
        {
            "question": "Wer war der erste Kaiser des Heiligen Römischen Reiches?",
            "op1":"Karl der Große",
            "op2":"Otto I.",
            "op3":"Friedrich I. Barbarossa",
            "op4":"Heinrich IV.",
            "answer": "Karl der Große",
            "category": "Geschichte"
        },
        {
            "question": "Wann fand der Westfälische Frieden statt, der den Dreißigjährigen Krieg beendete?",
            "op1":"1618",
            "op2":"1630",
            "op3":"1648",
            "op4":"1654",
            "answer": "1648",
            "category": "Geschichte"
        },
        {
            "question": "Welche europäische Macht begann im 15. Jahrhundert mit der Erkundung und Kolonisierung der Neuen Welt?",
            "op1":"Spanien",
            "op2":"Frankreich",
            "op3":"Portugal",
            "op4":"England",
            "answer": "Spanien",
            "category": "Geschichte"
        },
        {
            "question": "Wer war der Führer der Bolschewiki während der Russischen Revolution von 1917?",
            "op1":"Lenin",
            "op2":"Stalin",
            "op3":"Trotsky",
            "op4":"Kerensky",
            "answer": "Lenin",
            "category": "Geschichte"
        },
        {
            "question": "Welche europäische Stadt war der Ausgangspunkt der Renaissance?",
            "op1":"Paris",
            "op2":"Rom",
            "op3":"Florenz",
            "op4":"Athen",
            "answer": "Florenz",
            "category": "Geschichte"
        },
        {
            "question": "Wer malte die Mona Lisa?",
            "op1":"Vincent van Gogh",
            "op2":"Pablo Picasso",
            "op3":"Claude Monet",
            "op4":"Leonardo da Vinci",
            "answer": "Leonardo da Vinci",
            "category": "Kunst"
        },
        {
            "question": "Welche Kunstbewegung ist Salvador Dalí am meisten zuzuordnen?",
            "op1":"Impressionismus",
            "op2":"Kubismus",
            "op3":"Surrealismus",
            "op4":"Expressionismus",
            "answer": "Surrealismus",
            "category": "Kunst"
        },
        {
            "question": "Welcher Künstler ist bekannt für seine Serie von Gemälden mit Seerosen?",
            "op1":"Paul Cézanne",
            "op2":"Claude Monet",
            "op3":"Henri Matisse",
            "op4":"Edgar Degas",
            "answer": "Claude Monet",
            "category": "Kunst"
        },
        {
            "question": "In welcher Stadt befindet sich das berühmte Kunstmuseum Louvre?",
            "op1":"London",
            "op2":"Berlin",
            "op3":"Paris",
            "op4":"Rom",
            "answer": "Paris",
            "category": "Kunst"
        },
        {
            "question": "Wer schuf die Skulptur 'David'?",
            "op1":"Donatello",
            "op2":"Michelangelo",
            "op3":"Bernini",
            "op4":"Rodin",
            "answer": "Michelangelo",
            "category": "Kunst"
        },
        {
            "question": "Welches Kunstwerk wurde von Vincent van Gogh geschaffen?",
            "op1":"Sternennacht",
            "op2":"Die Beständigkeit der Erinnerung",
            "op3":"Die Geburt der Venus",
            "op4":"Der Schrei",
            "answer": "Sternennacht",
            "category": "Kunst"
        },
        {
            "question": "Welche Kunstbewegung wurde von Georges Braque und Pablo Picasso entwickelt?",
            "op1":"Impressionismus",
            "op2":"Kubismus",
            "op3":"Futurismus",
            "op4":"Dadaismus",
            "answer": "Kubismus",
            "category": "Kunst"
        },
        {
            "question": "Wer ist der Künstler hinter dem Werk 'Das letzte Abendmahl'?",
            "op1":"Raphael",
            "op2":"Caravaggio",
            "op3":"Leonardo da Vinci",
            "op4":"Titian",
            "answer": "Leonardo da Vinci",
            "category": "Kunst"
        },
        {
            "question": "Welches Gemälde stammt von Edvard Munch?",
            "op1":"Die Beständigkeit der Erinnerung",
            "op2":"Der Schrei",
            "op3":"Guernica",
            "op4":"Das Mädchen mit dem Perlenohrring",
            "answer": "Der Schrei",
            "category": "Kunst"
        },
        {
            "question": "In welcher Epoche wurde die Kunst der Renaissance wiederentdeckt?",
            "op1":"Barock",
            "op2":"Romantik",
            "op3":"Mittelalter",
            "op4":"Renaissance",
            "answer": "Renaissance",
            "category": "Kunst"
        },
        {
            "question": "Welcher der folgenden Algorithmen hat die beste durchschnittliche Laufzeitkomplexität für das Sortieren einer Liste?",
            "op1":"Bubble Sort",
            "op2":"Insertion Sort",
            "op3":"Quick Sort",
            "op4":"Selection Sort",
            "answer": "Quick Sort",
            "category": "Informatik"
        },
        {
            "question": "Was ist die Zeitkomplexität des Algorithmus zur Tiefensuche (Depth-First Search, DFS) in einem Graphen mit n Knoten und m Kanten?",
            "op1":"O(n)",
            "op2":"O(m)",
            "op3":"O(n + m)",
            "op4":"O(n * m)",
            "answer": "O(n + m)",
            "category": "Informatik"
        },
        {
            "question": "Welche Datenstruktur wird häufig verwendet, um eine First-In-First-Out (FIFO) Disziplin zu implementieren?",
            "op1":"Stack",
            "op2":"Queue",
            "op3":"Heap",
            "op4":"Graph",
            "answer": "Queue",
            "category": "Informatik"
        },
        {
            "question": "Welcher der folgenden Speicherbereiche wird zur Verwaltung dynamisch allokierter Speicher verwendet?",
            "op1":"Heap",
            "op2":"Stack",
            "op3":"Register",
            "op4":"Code-Segment",
            "answer": "Heap",
            "category": "Informatik"
        },
        {
            "question": "Was versteht man unter Polymorphismus in der objektorientierten Programmierung?",
            "op1":"Vererbung von Klassen",
            "op2":"Überladen von Methoden",
            "op3":"Datenkapselung",
            "op4":"Die Fähigkeit einer Methode, unterschiedliche Datentypen zu verarbeiten",
            "answer": "Die Fähigkeit einer Methode, unterschiedliche Datentypen zu verarbeiten",
            "category": "Informatik"
        },
        {
            "question": "Welche der folgenden Logiken ist eine Grundlage für das Arbeiten mit relationalen Datenbanken?",
            "op1":"Prädikatenlogik",
            "op2":"Aussagenlogik",
            "op3":"Modallogik",
            "op4":"Temporallogik",
            "answer": "Prädikatenlogik",
            "category": "Informatik"
        },
        {
            "question": "Welcher der folgenden Algorithmen wird zur Verschlüsselung verwendet?",
            "op1":"Dijkstra-Algorithmus",
            "op2":"Quicksort",
            "op3":"AES",
            "op4":"Prim-Algorithmus",
            "answer": "AES",
            "category": "Informatik"
        },
        {
            "question": "Welche der folgenden Aussagen beschreibt am besten eine 'Hash-Funktion'?",
            "op1":"Eine Funktion, die zwei Listen vergleicht",
            "op2":"Eine Funktion, die eine Eingabe auf eine feste Ausgabelänge abbildet",
            "op3":"Eine Funktion, die eine Liste sortiert",
            "op4":"Eine Funktion, die eine Eingabe verschlüsselt",
            "answer": "Eine Funktion, die eine Eingabe auf eine feste Ausgabelänge abbildet",
            "category": "Informatik"
        },
        {
            "question": "In der Theorie der Berechenbarkeit, welches Problem ist als unentscheidbar bekannt?",
            "op1":"Das Halteproblem",
            "op2":"Das Primzahlproblem",
            "op3":"Das Sortierproblem",
            "op4":"Das Graphenfärbungsproblem",
            "answer": "Das Halteproblem",
            "category": "Informatik"
        },
        {
            "question": "Welcher der folgenden Begriffe ist ein Prinzip der funktionalen Programmierung?",
            "op1":"Zustandsänderung",
            "op2":"Datenkapselung",
            "op3":"First-Class-Funktionen",
            "op4":"Vererbung",
            "answer": "First-Class-Funktionen",
            "category": "Informatik"
        }  
]