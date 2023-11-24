class FuncoesLogicaProposicional {
    
    static and(p: boolean, q: boolean): boolean {
      return p && q;
    }
  
   
    static or(p: boolean, q: boolean): boolean {
      return p || q;
    }
  
    
    static implicacao(p: boolean, q: boolean): boolean {
      return !p || q;
    }
  
   
    static equivalencia(p: boolean, q: boolean): boolean {
      return p === q;
    }
  
    // "OU Exclusivo" (XOR)
    static ouExclusivo(p: boolean, q: boolean): boolean {
      return (p || q) && !(p && q);
    }
  }
  
  
  function gerarTabelaVerdade(): void {
    const proposicoes = [true, false];
  
    console.log("p\tq\tp AND q\tp OR q\tp => q\tp <=> q\tp XOR q");
    console.log("-----------------------------------------------");
  
    proposicoes.forEach(p => {
      proposicoes.forEach(q => {
        const resultadoAnd = FuncoesLogicaProposicional.and(p, q);
        const resultadoOr = FuncoesLogicaProposicional.or(p, q);
        const resultadoImplicacao = FuncoesLogicaProposicional.implicacao(p, q);
        const resultadoEquivalencia = FuncoesLogicaProposicional.equivalencia(p, q);
        const resultadoOuExclusivo = FuncoesLogicaProposicional.ouExclusivo(p, q);
  
        console.log(`${p}\t${q}\t${resultadoAnd}\t${resultadoOr}\t${resultadoImplicacao}\t${resultadoEquivalencia}\t${resultadoOuExclusivo}`);
      });
    });
  }
  
  
  gerarTabelaVerdade();
  