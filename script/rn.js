const {createScreen, createComponent, createReduxAction} = require('./actions');

const type = process.argv[2];
const name = process.argv[3];
const dashArgument = process.argv[4];
if (type === 'screen') {
  // yarn new screen HelloWorld
  createScreen(name, dashArgument);
} else if (type === 'component') {
  // yarn new component ListItem
  createComponent(name);
} else if (['profileAction', 'appAction'].indexOf(type) !== -1) {
  // yarn new appAction getData
  createReduxAction(type, name);
}
