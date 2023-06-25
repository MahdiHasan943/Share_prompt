import '@styles/globals.css'


export const metadate = {
    title: "Promptopia",
    description:'Discover & Share AI Prompts'
}
const RootLayout  = ({children}) => {
  return (
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
          <body>
          <div className='main'>
                  <div className='gradient' />
              </div>
              
              <main className='app'>
                  {children}

              </main>
        
    </body>
    </html>
  )
}

export default RootLayout 