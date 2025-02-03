// Data type
    // Primitive
        // string
            "uncle's", '34535', ``
            // console.log('length**', 'test'.length);
            // console.log('charAt**', 'test'.charAt(0));
            // console.log('charCodeAt**', 'test'.charCodeAt(2));
            // console.log('at**', 'test'.at(2));
            // console.log('[]**', 'test'[2]);
            // console.log('toUpperCase**', 'test'.toUpperCase());
            // console.log('toLowerCase**', 'TEST'.toLowerCase());
            // console.log('concat**', 'test'.concat(' ', 'srsresr', ' ', 'ffddf'));
            // console.log('trim**', '      test     '.trim());
            // console.log('trimStart**', '      test     '.trimStart());
            // console.log('trimEnd**', '      test     '.trimEnd());
            // console.log('padStart**', 'test'.padStart(10, '0'));
            // console.log('padEnd**', 'test'.padEnd(10, '0'));
            // console.log('repeat**', 'test '.repeat(10));
            // console.log('replace**', 'test'.replace('t', 'T'));
            // console.log('replaceAll**', 'test'.replaceAll('t', 'T'));
            // console.log('split**', 'test'.split(''));
            // console.log('slice**', 'test'.slice(-3, -1));
            // console.log('substring**', 'test'.substring(1, 3));
        // number
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9 
            // Range of an integer -2^53 to 2^53
        // boolean
            true, false
        // undefined
            undefined
        // null
            null
        // bigInt
            1n
        // symbol
            // symbol()

    // Complex or Non-premitive
        // object
            let user = {
                fName: 'john',
                lName: 'user',
                age: 44,
                hobbies: ['riding', 'reading', 'driving'],
                education: {
                    primary: 'adasd',
                    secondary: 'dsada'
                }
            }
            let additionalDetails = { gender: 'male', address: 'abc' }
            Object.assign(user, additionalDetails)
            // Object destructuring
            const { fName, lName } = user
            document.write(user['fName']) 
            document.write('  ')
            document.write(user.lName)
            document.write('  ')
            document.write(fName) 
            document.write('  ')
            document.write(user.education.primary) 
            
            delete user.lName

            // Object to string type conversion
            const strnfyData = JSON.stringify(user)
            document.write(strnfyData)
            document.write('  ')
            document.write(JSON.parse(strnfyData))

            // Object to array type conversion
            console.log('array of keys**', Object.keys(user))
            console.log('array of values**', Object.values(user))
            console.log('array of values**', Object.entries(user))
            console.log(user);
            
        // array
            let dummyStrings = ['test', 'user', 'user']
            let numbers = [3, 4, 6, 7 ]
            let dummyObjList = [{test: 'test'}, {test: 'test2'}]

        // function
            function practiceFunction() {
                // console.log('practiceFunction')
            }
            practiceFunction()
            
            const testHandler = () => {
                // console.log('testHandler')

            }
            testHandler()

            // UPPERCASE casing
            // lowercase casing
            // camelCaseCasing
            // snake_case_casing
            // SNAKE_CASE casing