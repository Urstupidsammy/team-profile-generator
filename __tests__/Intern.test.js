const { exportAllDeclaration } = require("@babel/types");
const { default: test } = require("node:test");
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = "Oregon";
    const e = new Intern("Ed", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () =>{
    const testValue = "Intern";
    const e = new Intern("Ed", 1, "test@test.com", "Oregon");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () =>{
    const testValue = "Oregon";
    const e = new Intern("Ed", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});

