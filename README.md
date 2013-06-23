jsConfigParse
=============

Javascript config parser with support for default and mandatory object literals/ deep equal checks

Usage
-----
Specify defaults and mandatory options:

    var defaults = {
      width: 10,
      renderer: {
          fps: 10
      },
      somethingElse: 'dsa'
    };

    var mandatory = {
      canvasId: null,
      renderer: {
          svg: null
      }
    };

Check options: 

    var checkedOptions = parseOptions(options, defaults, mandatory);
