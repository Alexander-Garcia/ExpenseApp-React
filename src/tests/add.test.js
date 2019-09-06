
const add = (a, b) => a + b 
const generateGreeting = (name = 'anonymous') => `Hello ${name}!`


test('should add two numbers', () => {
    const result = add(3, 4)
    expect(result).toBe(7)
    }
)

test('Should say hello to you', () => {
    const hello = generateGreeting('Tom') 
    expect(hello).toBe('Hello Tom!')
})

test('Should generate greeting for no name' , () => {
    const result = generateGreeting(); 
    expect(result).toBe('Hello anonymous!')
}
)