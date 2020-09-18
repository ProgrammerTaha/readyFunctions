const whatRelation = percentSharedDNA => {
  if (percentSharedDNA < 0 || percentSharedDNA > 100) {
    return 'You entered a wrong percent.';
  };
  if (percentSharedDNA === 100) {
    return 'You are likely identical twins.'
  } else if (percentSharedDNA < 100 && percentSharedDNA > 34) {
    return 'You are likely parent and child or full siblings.'
  } else if (percentSharedDNA < 35 && percentSharedDNA > 13) {
    return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
  } else if (percentSharedDNA < 14 && percentSharedDNA > 5) {
    return 'You are likely 1st cousins.'
  } else if (percentSharedDNA < 6 && percentSharedDNA > 2) {
    return 'You are likely 2nd cousins.'
  } else if (percentSharedDNA === 1 || percentSharedDNA === 2) {
    return 'You are likely 3rd cousins'
  } else {
    return 'You are likely not related.';
  }
};

// console.log(whatRelation())