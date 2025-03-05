fn pesquisa_binaria(lista: &[i32], item: i32) -> Option<i32> {
    let mut baixo = 0;
    let mut alto = lista.len() - 1;

    while baixo <= alto {
        let meio = ((baixo + alto) as f32 / 2.0).ceil() as usize;
        let palpite = lista[meio];

        if palpite == item {
            println!("Você acertou! palpite {}", palpite);
            return Some(palpite);
        } else if palpite > item {
            println!("Muito alto! palpite {}", palpite);
            alto = meio - 1;
        } else {
            println!("Muito baixo! palpite {}", palpite);
            baixo = meio + 1;
        }
    }

    println!("Número não encontrado");
    None
}

fn main() {
    let lista: Vec<i32> = (0..=100).collect();
    pesquisa_binaria(&lista, 70);
}
