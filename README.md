To run this client

clone the repo
in a terminal run npm run start- this will give you a dev build, that will integrate with a local build of the server.
to deploy, run npm run build in the termianl.
move the files from the build directory in the project to the root of the server.
make sure to use web.config file in this repo, or otherwise the server will ignore the react files.

note- this is for a iis server. for linux servers a matching configuration must be found,
this will  vary between nginx and apache.
