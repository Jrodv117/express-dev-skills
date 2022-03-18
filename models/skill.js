const skills = [
    {id: 115, skill: 'JS', good: true},
    {id: 116, skill: 'Express', good: false},
    {id: 117, skill: 'Master Chief', good: true}
  ];
  
  module.exports = {
    getAll,
    getOne, 
    create,
    deleteOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id);
  }

  function create(skill){
    skill.id = Date.now() % 1000000
    skill.good = false
    skills.push(skill)
  }

function deleteOne(id) {
  id = parseInt(id)
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}