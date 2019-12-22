This is a simple file oranising app which scans files in the current directory , from which the application is being run.
It then classifies them according to known types and then creates folder according to those types.
For example if you have classified .png, jpg, .jpeg as images then it will move all of them to an images folder.
It doesnt move files > 500 MB as of now.
It can then be installed globally as a npm module and run as a cli tool and it will work.
Just do a npm install -g.
Now i plan to make it configurable, so that i can configure folder names, add or remove types, increase or decrease max file size limit.
