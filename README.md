# RTD - The Test Runner for Meteor

An end-to-end testing solution for Meteor, combining Karma, Selenium Webdriver and Istanbul.

[![RTD DEMO](http://img.youtube.com/vi/ESVRDEY-QSk/0.jpg)](http://xolvio.github.io/rtd/)

## Instructions
Ensure you have node and Meteor and that the dependencies below are globally installed (you may need to run this as sudo, depending on your setup):

For growl notifications, you need to install a notifier if you don't already have it:

```console
MAC:
$ sudo gem install terminal-notifier
LINUX:
$ sudo apt-get install libnotify-bin
```

Next you need to move your meteor code into an app directory the structure of your application as follows:

```console
├── <project root>
    │ ├── .git
    │ ├── app
    │ │ └── .meteor
    │ │ └── <your meteor code here>
```

You will also want to structure your tests as follows:

```
├── <project root>
    │ ├── .git
    │ ├── app
    │ │ └── .meteor
    │ │ └── <your meteor code here>
    │ ├── test
    │ │ └── acceptance
    │ │ │ └── fixtures
    │ │ │ │ └── <your fixture code here>
    │ │ │ └── <your end-to-end tests here>
    │ │ └── unit
    │ │ │ └── <your unit tests here>
    │ │ │ └── <THERE MUST BE ONE UNIT TEST AT LEAST>
```

Now you can add RTD to your package.json like [in the example](https://github.com/gliesesoftware/rtd-example/blob/master/package.json) (you'll need all of the dev dependencies there too).

To have RTD run in development mode, you type:

```console
./node_modules/.bin/rtd
```

And to test your app once (for pre-commit or on a CI server) you type:

```console
./node_modules/.bin/rtd runOnce
```

Use debug flag for more verbose output --debug

```console
./node_modules/.bin/rtd runOnce
```

To see the actual coverage report in detail, go to http://localhost:8000/coverage