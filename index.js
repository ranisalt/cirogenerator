(() => {
  const parts = [
    [
      'bandidinho',
      'cadela no cio',
      'chefe de quadrilha',
      'conspirador',
      'golpista',
      'jumento de carga',
      'maior bandido',
      'na sua vaidade de',
      'playboy',
      'projetinho de',
      'protoneoliberalzinho',
      'salafrário',
    ], [
      'abestado',
      'abirobado',
      'amalucado',
      'apartidário',
      'bobão',
      'boçal',
      'capitãozinho do mato',
      'chefe de milícia',
      'cheirador de cocaína',
      'covarde',
      'delinquente juvenil',
      'despreparado',
      'farsante',
      'fascistoide',
      'filho da puta',
      'fisiológico',
      'frouxo',
      'fuxiqueiro',
      'idiota',
      'imbecil',
      'infeliz',
      'liberaloide',
      'marginal',
      'mentiroso',
      'oportunista',
      'picareta',
      'protofascistinha',
      'quadrilheiro',
      'safado',
      'selvagem',
      'vil e pusilânime',
    ], [
      'cheio de areia no cu',
      'com 526 terabytes de encryption',
      'da turma do Romero Jucá',
      'de merda',
      'desgraçado',
      'dos grandes',
      'dos infernos',
      'eleitoreiro',
    ],
  ]

  document.addEventListener('DOMContentLoaded', ev => {
    const button = document.querySelector('.button'),
      output = document.querySelector('.output')

    const generateNew = () => {
      output.innerText = parts.map(
        part => part[Math.floor(Math.random() * part.length)]
      ).join(' ')
    }

    button.addEventListener('click', ev => {
      window.requestAnimationFrame(generateNew)
    })

    window.requestAnimationFrame(generateNew)
  })
})()
