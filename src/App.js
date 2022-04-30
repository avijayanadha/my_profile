import Terminal from 'react-console-emulator'
import commands from './components/commands.js'
import React from 'react'

export default function Term() {
    const cmds = commands.commands
    const terminal = React.createRef()
  
    return (
        <Terminal
            ref={terminal}
            welcomeMessage={`Developer with over 7+ years of experience in developing and designing enterprise web applications using JavaScript, HTML/CSS. Extensive experience in using frameworks/libraries like React JS, jQuery, Angular JS, Ember JS, Node JS, etc. \n
            Want to know more?
            
            
            Type any of the following commands. For example, if you want to know my Tech Stack type Tech.
            *_______**_______*
            •	Tech
            •	Skills
            •	Projects
            •	About
            •	Github
            •	Contact
            *_______**_______*`}
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