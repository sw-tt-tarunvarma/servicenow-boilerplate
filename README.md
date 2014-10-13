ServiceNow Boilerplate
======================
HTML, CSS, and JavaScript boilerplate for modern, dynamic, and responsive ServiceNow CMS and web applications.


Goals
--------------
The primary aim of the ServiceNow Boilerplate is to give you a jump-start on your HTML, CSS, and JavaScript development while allowing you to develop, test, and debug your ServiceNow app or CMS site on your local machine with as little friction as possible. 

It assumes that you are using the Accelerator for Web Apps (AWA)
(available on Share here: http://j.mp/1qdBTIL). The general workflow is envisioned as follows:
 - Develop HTML, CSS, and JavaScript locally (running on a local webserver like Apache or mongoose)
 - When ready to deploy to your AWA app:
 	- copy HTML files to AWA UI pages
 	- copy CSS to AWA Style Sheets
 	- copy JS to AWA UI Scripts


This workflow improves productivity by allowing you to:
- Use local development tools to improve productivity (get syntax highlighting, quick/easy saves and tabs back!)
- Develop collaboratively without breaking others (via a version control tool like git)



Prerequisites
--------------
ServiceNow Boilerplate assumes that you are using the Accelerator for Web Apps (AWA)
(available on Share here: http://j.mp/1qdBTIL) and that you pick Bootstrap as your CSS Framework and AngularJS as your JavaScript framework


Key Features
-----------------
- Boilerplate/Starter HTML
    - Includes jQuery via Jelly 
    - Includes necessary libraries for local environment
    - Ensures that app scales appropriately to mobile
    - Start sample apps
- Boilerplate Angular Module
    - calls stubs when calling the API services locally. Otherwise calls ServiceNow API directly
- Stubbed API Responses 