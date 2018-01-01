# mean-stack-red-social

Versiones

    Mongo -version 3.6.0




Install MongoDB
     Execute:
      brew update
      brew install mongodb
      brew tap homebrew/services
      brew services start mongodb
      brew serveces restart mongodb

Create the folder
    $ sudo mkdir -p /data/db
    $ whoami
    user
    $ sudo chown user /data/db

Add MongoDB to PATH
    export MONGO_PATH=/usr/local/mongodb
    export PATH=$PATH:$MONGO_PATH/bin

For execute Mongo Shell use mongo

For run use npm start
