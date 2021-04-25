# whack-the-covid
Project ....
Whack a mole ..
Create a grid of 4*4 divs
+---+---+---+---+
|   |   |   |   |
|   |   |   |   |
+---+---+---+---+
|   |   |   |   |
|   |   | M |   |
+---+---+---+---+
|   |   |   |   |
|   |   |   |   |
+---+---+---+---+
|   |   |   |   |
|   |   |   |   |
+---+---+---+---+  [START]
<!-- Done  -->
Layout flex? 

Give every div an onclick handler and a unique id
<div id='1' onclick=.....
When the start button is pressed use setInterval to call a 
function popUp every second
When a cell is clicked - pass the ID of the cell to a function
- add the time it took to click it to an array/object
use performance.now - to capture/measure time accurately
Hide the 'mole' when the right cell is clicked
Add a pentalty time of 1 second if the wrong cell is clicked