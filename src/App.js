import Terminal from 'react-console-emulator'
import commands from './components/commands.js'
import React from 'react'

export default function Term() {
    const cmds = commands.commands
    const terminal = React.createRef()
    const years = 7
  
    return (
        <Terminal
            ref={terminal}
            welcomeMessage={`Developer with over ${years}+ years of experience in developing and designing enterprise web applications using JavaScript, HTML/CSS. Extensive experience in using frameworks/libraries like React JS, jQuery, Angular JS, Ember JS, Node JS, etc. \n
            Want to know more?

            Let's type some commands ;)
            
             __________________________________________________
            | [1] [2]  _____________________________ [_][_][_] |
            | [3] [4]  [_][_][_] [_][_][_][_] [_][_] [_][_][_] |
            | [5] [6]  [][][][][][][][][][][][][][_] [1][2][3] |
            | [7] [8]  [_][][][][][][][][][][][][][] [4][5][6] |
            | [9] [0]  [__][][][][][][][][][][][][_] [7][8][9] |
            | [-] [+] [___][][][][][][][][][][][__] [__][0][]  |
            |          [_][______________][_]                  |
            |_________________________________________________|



            Type any of the following commands. For example, if you want to know my Tech Stack type Tech.
            
            •	Tech
            •	Skills
            •	Projects
            •	About
            •	Github
            •	Contact`}
            commands={{
              ...cmds,
              more: {
                    description: 'List every command',
                    usage: '',
                    fn: () => {
                        terminal.current.showHelp()
                    }
                },
              clear: {
                  description: 'Clear terminal',
                  usage: '',
                  fn: () => {
                      terminal.current.clearStdout()
                  }
              }
            }}
            promptLabel={'arunbabu@/devprofile:~$ '} 
            autoFocus
            style={{
                minHeight: null,
                maxHeight: null,
                overflow: 'auto',
                height: '100%',
                width: '100%',     
            }}
            styleEchoBack='fullInherit'
            contentStyle={{ color: '#fff' , fontWeight:'normal', paddingLeft: null}} // Text colour
            promptLabelStyle={{ color: 'rgb(48 215 123)' , fontWeight:'900'}} 
            inputTextStyle={{ color: 'rgb(48 215 123)' , fontWeight:'900'}}
            messageStyle={{ color: '#fff' , fontWeight:'normal', paddingLeft: null}}
            scrollBehavior='auto'
            noDefaults
            ignoreCommandCase={true}            
        />
    )
}