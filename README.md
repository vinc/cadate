Cadate
======

Display the date in many calendars and formats


Usage
-----

Usage: `cadate [OPTION]... [DATE]`

Options:

    -h, --help              Show this message

    -l, --locale NAME       Use locale in BCP 47 format

    -z, --timezone NAME     Use timezone in IANA format

    -c, --calendar NAME     Use one of the following calendars:
                            buddhist, chinese, coptic, ethioaa, ethiopic,
                            gregory, hebrew, indian, islamic, islamicc,
                            japanese, persian, roc

    -n, --numbering NAME    Use one of the following numbering systems:
                            arab, arabext, bali, beng, deva, fullwide, gujr,
                            guru, hanidec, khmr, knda, laoo, latn, limb, mlym,
                            mong, mymr, orya, tamldec, telu, thai, tibt

    --short                 Output short date
    --abbr                  Output abbreviated date
    --full                  Output full date
    --huge                  Output full date with weekday

    -i, --iso8601           Output ISO 8601 date

Examples:

    $ cadate
    6/21/2018

    $ cadate --calendar hebrew
    10/8/5778

    $ cadate --full --calendar islamic --numbering arab --locale ar
    ٨ شوال ١٤٣٩

    $ cadate --huge --timezone Europe/Paris --locale fr
    jeudi 21 juin 2018

    $ cadate --iso8601
    2018-06-21


License
-------

Copyright (c) 2018 Vincent Ollivier. Released under MIT.
