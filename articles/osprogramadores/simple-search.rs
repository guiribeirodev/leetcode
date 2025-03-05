fn pesquisa_simples(lista: &[i32], item: i32) -> Option<i32> {
    let inicio = 0;
    let fim = lista.len() - 1;
    let mut indice_corrente = inicio;
    let mut contador = 0;

    while indice_corrente <= fim {
        contador += 1;
        let palpite = lista[indice_corrente];

        if palpite == item {
            println!(
                "Você acertou! Palpite: {}\nForam necessárias: {} tentativas",
                palpite, contador
            );
            return Some(palpite);
        } else {
            indice_corrente += 1;
        }
    }

    println!(
        "Número não encontrado.\nTentativas realizadas: {}",
        contador
    );
    None
}

fn main() {
    let lista: Vec<i32> = (0..=100).collect();
    pesquisa_simples(&lista, 70);
}