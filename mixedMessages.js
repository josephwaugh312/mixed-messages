// Arrays for each category
const subjects = [
    "You", "Your determination", "Your hard work", "Your creativity", 
    "Your resilience", "Your kindness", "Your strength", "Your ambition", 
    "Your dedication", "Your courage"
  ];
  
  const actions = [
    "will inspire greatness", "will open doors", "is changing lives", 
    "is making waves", "leads to success", "breaks barriers", 
    "inspires others", "makes a difference", "sets an example", 
    "builds a legacy"
  ];
  
  const outcomes = [
    "for generations to come.", "beyond what you imagine.", 
    "that you’ll be proud of.", "to create something amazing.", 
    "that uplifts others.", "to achieve your dreams.", 
    "in ways you don’t expect.", "to build a better future.", 
    "that changes the world.", "that lasts forever."
  ];
  
  // Function to generate a random message
  const generateMessage = () => {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
  
    return `${subject} ${action} ${outcome}`;
  };
  
  // Output the random message
  console.log(generateMessage());
  