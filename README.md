# Patrick Rauls | Code Challenge
## Prompt: Amounts for Checks
Write some code that will accept an amount and convert it to the appropriate string.

### example
Convert number `2523.04` to string `Two thousand five hundred twenty-three and 04/100`
Code should handle up to `1000000.00` with precision to the hundredths.

### assumptions
- Input will be floating point number
- Substring representing decimals must be returned even if 0

## Answer
In `write_checks.js` you'll find my answer provided the above assumptions. Though the prompt asks for "some code", I will assume what is desired is a function that takes one argument and returns a string. Let me know if Javascript is not OK. The answer outputs precision to the hundredth place, but needn't receive that precision as an input. 
