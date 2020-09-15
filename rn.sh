#!/bin/bash

DIR_COMPONENTS='./app/components/'
DIR_SCREENS='./app/screens/'
DIR_ROUTES='app/navigations/Routes.js'
screenBoilerplate=$(cat <<-END  
import React from 'react'\n
import { View, Text, StyleSheet } from 'react-native'\n

const ___ = () => {\n
  return (\n
    <View>\n
      <Text>___</Text>\n
    </View>\n
  )\n
}\n
\n
export default ___\n

const styles = StyleSheet.create({\n
  container: {\n
    flex: 1,\n
  },\n
});\n
END
)


#------------SCRIPT STARTS HERE -------------


type=$1  #screen/component
fileName=$2  #screen/component
case $type in
  screen)
    #CASE: SCREEN
    # Create file in /screen directory
    code=${screenBoilerplate//___/$fileName\Screen}
    echo $code > $DIR_SCREENS/$fileName\Screen.js

    #Add in Routes.js
    search="};"
    replace="${fileName}:'${fileName}' }"
    sed -i '' "s/$search/$replace/" $DIR_ROUTES
    ;;
    
  component)
    #CASE: COMPONENT
    echo -n "componentttttttttttt"
    ;;
    
esac