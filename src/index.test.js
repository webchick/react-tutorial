const rewire = require("rewire")
const index = rewire("./index")
const Game = index.__get__("Game")

const calculateWinner = index.__get__("calculateWinner")
// @ponicode
describe("handleClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Anas", "Pierre Edouard"], ["Edmond", "Jean-Philippe", "Pierre Edouard"], ["Pierre Edouard", "Pierre Edouard", "Edmond"]]
        inst = new Game(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleClick(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleClick(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleClick(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleClick(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleClick(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("jumpTo", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "George", "Jean-Philippe"], ["Jean-Philippe", "Michael", "George"], ["Edmond", "Jean-Philippe", "Jean-Philippe"]]
        inst = new Game(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.jumpTo(50)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.jumpTo(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.jumpTo(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.jumpTo(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.jumpTo(4)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.jumpTo(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("calculateWinner", () => {
    test("0", () => {
        let callFunction = () => {
            calculateWinner(["George", "Edmond", "Michael"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            calculateWinner(["Pierre Edouard", "George", "Edmond"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            calculateWinner(["Anas", "Jean-Philippe", "Anas"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            calculateWinner(["Jean-Philippe", "Edmond", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            calculateWinner(["Jean-Philippe", "Michael", "Michael"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            calculateWinner(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
