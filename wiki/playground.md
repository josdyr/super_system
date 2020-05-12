### related to super_system:
I: end-user (input) -> super_system -> end-end-user (output)
[goal](link-to/goal_super_system.md)

NOTE: user level (access level) is based on organisation-roles

### general key points
1. not list based with tabs, but rather stack based browsing (with new windows)
  * let's user hold the right context at all times
  * integrate different apps as a shortcut (on windows) at the toolbar
  * makes more sense

2. super_system must be possible to be installed on top of a clean, non-gui based linux distro

Q: what's the required inputs to create the output?

[**Super Browser*](super_browser.md) is a genius Browser.

### Commandline functionalities
* Should always start with app name
* Should start auto-loading "app" while typing. ("anonymiously")

* autosuggestions (tab completion)
  * autosuggestion should be based on syntax from web page header syntax
    * autosuggestion syntax from web page should allow dynamically loading from db-tables in the system, (if accessible by the system/web-page)

```shell
super messenger @froddyr "Hi, how are you?"
```

![alt text](/autosuggest-name.png "Logo Title Text 1")

Q:
A:
I:
T: discuss specifications for workflow system

F: Right-click: Filter -> By Selection, and other filter options
F: Right-click: Add private note (favorite): All tables should have possibility to link private user-specific data to records, e.g. comments/notes, favorites. (But not too much, because it should only replace "yellow notes". Other notes should be handled by "public" linked systems like Tasks/Issues etc.)

Filter functinallity: Autosuggest while typing. E.g milest+[tab] contai+[tab] MS+[tab] (dynamically download data from db-table as soon as the field is chosen)

Autosuggest should automatically select first value, but never(!) commit value from list if not [tab] is pressed (or [enter] if up/down arrows are used before)

Note: background-color is not enough to indicate selected/focused rwcords in grid, lookups or autosuggest.

write down all technologies that will be used, and make an easy guide for how to log in to the different places.

make an easy stack diagram. db, backend, frontend, server etc.

Define milestones

Max Records: Unlimited

[Graph Databases Will Change Your Freakin' Life (Best Intro Into Graph Databases)](https://www.youtube.com/watch?v=GekQqFZm7mA)

we need to base the system on command line interface, and support it with extended front-end cli frameworks

we need a new md best pracsis on how to format, and look of md files (more json like) with thread-lines to left

![cli example](/example.png "cli")

make wiki "notable-like-compatible" with features like save and edit: ctrl+s (save and display app), ctrl+e (edit app)

front page is a register of the whole system.

![hierarchy example](/g017622.jpeg "hierarchy")

storage as a system: structure all IT levels in systems. e.g: all storage units in a storage unit db table

storage cloud
functionality

all components must be tagged: if system gets an update, the tags will automatically be listed and the user will then know exactly where the system will fail, hence where he/she must change or update protentional parameters.

gitbook.com
https://basarat.gitbook.io/typescript/

all functions should be tied to their respective tables

SQL and OOP
graph and OOP

server:
ip: 13.95.130.240
user: supersystem
pw: Ardalsvegen113

[Beautiful Python Refactoring](https://www.youtube.com/watch?v=KTIl1MugsSY)

All tables should have ID and ID-field, and should always be an identity column, and always be the Primary Key, and should always be displayed for end-users and with spesial formatting (#).

inheritance

report based: the whole system (assuming it's created and populated with data) should only take in some data and output data. The input should be the (query) filter, sorting, grouping and the output should be the data that is returned. This should be able to be viewed and printed.

https://material.angular.io/components/expansion/overview
https://uxdesign.cc/designing-tables-for-reusability-490a3760533
https://stackoverflow.com/questions/46123854/expandable-table-rows-in-angular-4-with-angular-material

- [x] set up super system over to /home/josdyr
- [x] dockerize angular app
- [x] dockerized postgres db
- [ ] push to github
- [ ] populate db
- [ ] connect app w db
- [ ] select from db to screen
- [ ] implement material.angular.io/components/expansion/overview and expandable table rows in angular 4 with angular material

https://medium.com/@wkrzywiec/database-in-a-docker-container-how-to-start-and-whats-it-about-5e3ceea77e50
