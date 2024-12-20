function skillMember() {
  const member = {
    name: 'John',
    age: 30,
    role: 'Frontend Developer',
    skill: 'JavaScript'
  };

  return {
    getSkill: function() {
      return member.skill;
    }
  }
}