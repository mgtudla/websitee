function computeStrandFit() {
    const questions = document.querySelectorAll('.input_group select');
    const strandScores = {
      STEM: 0,
      ABM: 0,
      HUMSS: 0,
      TVL: 0
    };
  
    questions.forEach((select, index) => {
      const answer = select.value;
      if (answer === 'YES') {
        if (index === 0 || index === 2 || index === 8) {
          strandScores.STEM++;
        }
        if (index === 1 || index === 4 || index === 9) {
          strandScores.ABM++;
        }
        if (index === 3 || index === 5 || index === 6) {
          strandScores.HUMSS++;
        }
        if (index === 7 || index === 8 || index === 9) {
          strandScores.TVL++;
        }
      }
    });
  
    let bestFitStrand = '';
    let maxScore = 0;
    for (const [strand, score] of Object.entries(strandScores)) {
      if (score > maxScore) {
        maxScore = score;
        bestFitStrand = strand;
      }
    }
  
    document.getElementById('strandFit').innerHTML = `<h2>Best Fit Strand: ${bestFitStrand}</h2>`;
  }
  