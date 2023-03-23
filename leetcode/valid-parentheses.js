var isValid = function(s) {
    const stack = [];
    //create a hash
    const map = { ")" : "(", "]" : "[", "}" : "{" };

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" 
        || s[i] === "[" 
        || s[i] === "{") {
            stack.push(s[i]);
        } else if (stack[stack.length -1] === map[s[i]]) {
            console.log(stack[stack.length -1], map[s[i]])
            stack.pop();
            console.log("stack", stack);
        } else return false;
    }
    return stack.length ? false : true;
};

isValid("(){}}{");
