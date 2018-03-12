/**
 * Adiciona os dados ao localStorage
 *
 * @example
 *   create("Titulo"); // Key: 234562456
 *
 * @param   {String} title   Parametro obrigatório
 * @returns {Number}
 */
function create(title) {
  var key = generateHexString(30);
  json = {'key': key, 'title': title, 'completed': false}
  localStorage.setItem(key, JSON.stringify(json));

  return key;
}

function update(todo, completed = false) {
  json = {'key': todo.key, 'title': todo.title, 'completed': completed}
  localStorage.setItem(todo.key, JSON.stringify(json));
}

function destroy(todo){
  if (localStorage.removeItem(todo.key)){
    return false
  }
}

function list(){
  var tasks = [];
  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
    tasks.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }

  return tasks;
}

function generateHexString(length) {
  var ret = "";
  while (ret.length < length) {
    ret += Math.random().toString(16).substring(2);
  }
  return ret.substring(0,length);
}
