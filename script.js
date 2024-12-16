const form = document.getElementById('strand-quiz');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const interests = document.getElementById('interests').value;
  const strengths = document.getElementById('strengths').value;
  const workEnvironment = document.getElementById('work-environment').value;

  let strand = '';

  if (interests === 'STEM' && strengths === 'Problem-solving') {
    strand = 'Science, Technology, Engineering, and Math (STEM)';
  } else if (interests === 'ABM' && strengths === 'Communication') {
    strand = 'Accountancy, Business, and Management (ABM)';
  } else if (interests === 'HUMSS' && strengths === 'Critical thinking') {
    strand = 'Humanities and Social Sciences (HUMSS)';
  } else if (interests === 'GAS' && strengths === 'Creativity') {
    strand = 'General Academic Strand (GAS)';
  } else {
    strand = 'You may want to consider a different strand.';
  }

  resultDiv.innerHTML = `Based on your answers, we recommend the ${strand} strand.`;
});