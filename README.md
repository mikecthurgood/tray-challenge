To run this program, clone and download the respository to your local environment.

Run the app by navigating to the downloaded directory and enter 'node runHoover.js' in the command line.

A new file will be generated (results.txt) which will give the hoover's final position and the number of dirt patches it has hoovered up.

There are 2 run functions included in this repo:

1) fetchInput => by default this app runs a fetch command that retrieves a text input file that is hosted online. If you would like to test this with other input files, you can replace the URL in the fetchInput function with another URL. It is configured to run any text file that follows the project guidelines. These are:
- first line contains the grid size of the room (x,y)
- second line contains the current position of the hoover (x,y)
- the last line contains a string of commands for the hoover in upper case. Commands are cardinal directions (N, E, S, W) and tell the hoover to move one coordinate in that direction (an example string might be 'NNSSWNENS'.
- all lines inbetween this are x, y coordinates of dirt that the hoover can clean. There can be as many or as few lines as required.

2) fsInput => this function is completed but will not run unless uncommented, the fetchInput command will also need to be commented out to ensure there is no conflice in output files. It works the same as the above function except that the text input file is retrieved locally. To change the text file, simply delete the input.txt file and replace with a new one of the same name.

Both functions allow for trailling blank space and will remove this but it does require each set of coordinates to be on a new line (as specified above).
