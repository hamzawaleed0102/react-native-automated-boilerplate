var fs = require('fs');
const DIR_SCREENS = './app/screens/';
const DIR_ROUTES = './app/navigations/Routes.js';
const DIR_COMPONENTS = './app/components/';
const DIR_APP_ACTIONS = './app/store/actions/AppActions.js';
const DIR_PROFILE_ACTIONS = './app/store/actions/ProfileActions.js';
const DIR_REDUCER_TYPES = './app/store/types/index.js';
const DIR_APP_NAVIGATION = './app/containers/AppNavigation.js';
const {
  actionBoilerplate,
  screenBoilerplate,
  componentBoilerplate,
  stackScreenBoilerplate,
  newAppNavImports,
} = require('./boilerplate.js');

//Create New Screen: yarn new screen name_here
const createScreen = (name, screenType = '--app') => {
  // Create screen
  const filenamePostfix = 'Screen';
  const screenName = name + filenamePostfix;
  const filePath = DIR_SCREENS + name + filenamePostfix + '.js';
  if (fs.existsSync(filePath)) {
    return console.error(screenName + ' already exists!');
  }

  const file = fs.createWriteStream(filePath);
  file.write(screenBoilerplate.replace(/___/g, screenName));
  file.end();
  //Add in Routes.js
  fs.readFile(DIR_ROUTES, {encoding: 'utf8', flag: 'r'}, (e, data) => {
    let newRoutesObj = data.replace(
      '};',
      `  ${name + filenamePostfix}: '${name}',\n};`,
    ); //RouteName:'RouteName'
    const RoutesJS = fs.createWriteStream(DIR_ROUTES);
    RoutesJS.write(newRoutesObj);
    RoutesJS.end();
  });
  //Add in AppNavigation
  fs.readFile(DIR_APP_NAVIGATION, {encoding: 'utf8', flag: 'r'}, (e, data) => {
    const navigatorType = screenType === '--app' ? 'App' : 'Auth';
    //Add 'import' statement
    let importStmnt =
      'import --' +
      filenamePostfix +
      " from '../screens/--" +
      filenamePostfix +
      "';";
    importStmnt = importStmnt.replace(/--/g, name);
    let fileContent = data.replace(
      newAppNavImports.find,
      importStmnt + newAppNavImports.replace,
    );

    // Add in AppStack/AuthStack.Navigator
    fileContent = fileContent.replace(
      `</${navigatorType}Stack.Navigator>`,
      stackScreenBoilerplate[screenType].replace(/__/g, name + filenamePostfix),
    );
    const AppNavigationJS = fs.createWriteStream(DIR_APP_NAVIGATION);
    AppNavigationJS.write(fileContent);
    AppNavigationJS.end();
  });
};

//Create New Component: yarn new component name_here
const createComponent = (name) => {
  const filenamePostfix = '';
  const componentName = name + filenamePostfix;
  const file = fs.createWriteStream(
    DIR_COMPONENTS + '/' + name + filenamePostfix + '.js',
  );
  file.write(componentBoilerplate.replace(/___/g, componentName));
  file.end();
};

const camelCaseToUnderscores = (str) => {
  return str
    .replace(/(?:^|\.?)([A-Z])/g, function (x, y) {
      return '_' + y.toLowerCase();
    })
    .replace(/^_/, '');
};

//Create New Redux Action: yarn new appAction getData
const createReduxAction = (type, actionName) => {
  const reducerType = camelCaseToUnderscores(actionName).toUpperCase();
  const ACTIONS_FILE =
    type === 'appAction'
      ? DIR_APP_ACTIONS
      : type === 'profileAction'
      ? DIR_PROFILE_ACTIONS
      : null;
  if (ACTIONS_FILE) {
    // Add in Actions.js
    fs.readFile(
      ACTIONS_FILE,
      {encoding: 'utf8', flag: 'r'},
      (e, fileContent) => {
        let newBoilerplate = actionBoilerplate.replace(
          /ACTION_NAME/g,
          actionName,
        );
        let newFileContent = fileContent.replace('export {', newBoilerplate);
        newFileContent = newFileContent.replace(/_TYPE_/g, reducerType);
        const ACTIONS = fs.createWriteStream(ACTIONS_FILE);
        ACTIONS.write(newFileContent);
        ACTIONS.end();
      },
    );

    // Add in types.js
    const strToFind = 'export {';
    fs.readFile(
      DIR_REDUCER_TYPES,
      {encoding: 'utf8', flag: 'r'},
      (e, fileContent) => {
        let newFileContent = fileContent.replace(
          strToFind,
          `const ${reducerType} = '${reducerType}';
export {
  ${reducerType},`,
        );
        const ACTIONS = fs.createWriteStream(DIR_REDUCER_TYPES);
        ACTIONS.write(newFileContent);
        ACTIONS.end();
      },
    );
  } else {
    console.error('Invalid action type, expected: appAction, profileAction');
  }
};

module.exports = {
  createScreen,
  createComponent,
  createReduxAction,
};
