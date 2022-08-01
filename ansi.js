import ansi from 'ansi'

const cursor = ansi(process.stdout)

// You can chain your calls forever:
cursor
  .beep()
  .red()                 // Set font color to red
  .bg.green()             // Set background color to grey
  .write('Hello World!') // Write 'Hello World!' to stdout
  .bg.reset()            // Reset the bgcolor before writing the trailing \n,
                         //      to avoid Terminal glitches
  .write('\n')           // And a final \n to wrap things up