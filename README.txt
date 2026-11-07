HOW TO EDIT YOUR WEBSITE (use Notepad, right-click a file > Open with > Notepad)
=============================================================================
Search each file for the word EDIT. Those comments show exactly what to change.

index.html    Home page: intro line and the three small cards
about.html    Your story and your photo
cv.html       Education / Experience / Skills and the PDF download button
contact.html  Instagram (and optional email)
style.css     Colors and fonts (see the :root section at the top)

ADD YOUR CV PDF
  1. Name your PDF  Anubhav-CV.pdf
  2. Put it inside the "files" folder
  3. Upload the folder to your hosting. Done. (To use another name, change it in cv.html.)

ADD YOUR PHOTO
  1. Put the picture in "images" and name it portrait.jpg
  2. Open about.html and follow the EDIT comment at the photo spot.

ADD ANOTHER CV ENTRY
  In cv.html, copy a whole <div class="cv-item"> ... </div> block and paste it below, then change the text.

ADD A NEW PAGE
  Copy about.html, rename it (e.g. projects.html), change the text, then add a line in the menu of every page:
  <li><a href="projects.html">Projects</a></li>

UPLOAD
  Upload everything inside this folder (not the folder itself) to your hosting's public_html (or www) folder.
  Keep the folder structure. index.html must be at the top level.
