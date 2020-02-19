console.log('-- load & test replaceSubstring --');
debugger; // step through loading & testing

// replace every occurrence of a substring with a new value
function replaceSubstring(str, oldThing, newThing) {
	while (str.includes(oldThing)) {
		str = str.replace(oldThing, newThing);
	}
	return str;
}

// declare and evaluate test cases for replaceSubstring
const replaceSubstringTests = [
	{ name: 'Test 1', args: [ 'aaaa', 'a', 'b' ], expected: 'bbbb' },
	{ name: 'Test 2', args: [ 'They type fast!', 'type', 'talk' ], expected: 'They talk fast!' },
	{ name: 'Test 3', args: [ 'They type fast!', 'pe fa', '' ], expected: 'They tyst!' },
	{ name: 'Test 4', args: [ 'bbbb', '1', '2' ], expected: 'bbbb' },
	{ name: 'Test 5', args: [ '', 'x', 'y' ], expected: '' },
	{ name: 'Test 6', args: [ '..|..|..', '|.', ',' ], expected: '..,.,.' },
	{
		name: 'Test 7',
		args: [ 'Brussels, Belgium', 'Brussels, Belgium', 'Ghent, Flanders' ],
		expected: 'Ghent, Flanders'
	}
];
for (let test of replaceSubstringTests) {
	const expected = test.expected;
	const actual = replaceSubstring(...test.args);
	const passing = actual === expected;
	console.assert(passing, test.name);
	test.actual = actual;
}
console.log(replaceSubstringTests);

// declare handler
function replaceSubstringHandler() {
	debugger; // step through user actions

	// read & process user input
	const text = prompt('enter your text, please');
	const oldStr = prompt('which words or letters do you want to change?');
	const newStr = prompt('which words or letters do you want to replace?');
	// execute core logic
	const result = replaceSubstring(text, oldStr, newStr);
	// display result to user
	alert('your new text is: \n' + result);
	// log action for developer
	console.log('\n-- replaceSubstring --');
	// user inputs
	// result
}

// attach handler to replaceSubstring button with an event listener
document.getElementById('replaceSubstring-button').addEventListener('click', replaceSubstringHandler);

/* looking for a hint?
  too bad!  no hints for this challenge
*/
