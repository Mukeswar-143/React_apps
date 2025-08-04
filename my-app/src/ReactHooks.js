// import React, { useEffect, useState, useRef, useContext, createContext, useMemo, useCallback } from 'react';

// const UserContext = createContext();

// const ReactHooks = () => {

//     const [count, setCount] = useState(0);
//     const [seconds, setSeconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(true);
//   const timerRef = useRef(null);
//   const [result, setResult] = useState();

//   const username = 'Yaswanth'

//     useEffect( () => {
//         console.log(`current count is : ${count}`)
//     }, [count]);

//      useEffect(() => {
//     if (isRunning) {
//       timerRef.current = setInterval(() => {
//         setSeconds((prev) => prev + 1);
//       }, 1000);
//     }
//     return () => {
//       clearInterval(timerRef.current);
//     };
//   }, [isRunning]);

//    const pauseTimer = () => setIsRunning(false);
//   const resumeTimer = () => setIsRunning(true);
//   const resetTimer = () => {
//     clearInterval(timerRef.current);
//     setIsRunning(false);
//     setSeconds(0);
//   };

//   const [number, setNumber] = useState(1);
//   const [show, setShow] = useState(true);

//   const factorial = useMemo(() => {
//     console.log('Calculating factorial...');
//     const calculateFactorial = (n) => {
//       if (n <= 0) return 1;
//       let result = 1;
//       for (let i = 1; i <= n; i++) {
//         result *= i;
//       }
//       return result;
//     };
//     return calculateFactorial(number);
//   }, [number]); 


//   const handleRunCode = async () => {
//   const code = `
//   public class Main {
//     public static void main(String[] args) {
//       System.out.println("Hello from Java!");
//     }
//   }`;

//   const response = await fetch("http://localhost:8080/java", {
//     method: "POST",
//     headers: { "Content-Type": "text/plain" },
//     body: code,
//   });

//   const output = await response.text();
//   console.log("Output:", output);
//   setResult(output);
// };


//   return (
//     <>
// <button onClick={handleRunCode}>submit</button>
// <div>{result}</div>

//    <div style={{ padding: '20px' }}>
//       <h2>React Counter</h2>
//       <p>Current Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>➕ Increase</button>
//       <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>
//         ➖ Decrease
//       </button>
//     </div>

//     <div style={{ padding: '20px' }}>
//       <h2>⏳ Timer Counter</h2>
//       <h3>{seconds} second{seconds !== 1 ? 's' : ''}</h3>

//       <div style={{ marginTop: '10px' }}>
//         {isRunning ? (
//           <button onClick={pauseTimer}>⏸️ Pause</button>
//         ) : (
//           <button onClick={resumeTimer}>▶️ Resume</button>
//         )}
//         <button onClick={resetTimer} style={{ marginLeft: '10px' }}>🔁 Reset</button>
//       </div>
//     </div>

//      <UserContext.Provider value={username}>
//         <div style={{ padding: '20px' }}>
//           <h2>👤 User Info</h2>
//           <DisplayUsername />
//         </div>
//       </UserContext.Provider>

//       <div>
//       <p>Factorial of {number} is <strong>{factorial}</strong></p>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
//         style={{ marginRight: '10px' }}
//       />
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Hide' : 'Show'} Component
//       </button>
//       {show && <p>This is a toggleable component</p>}
//     </div>
//     </>
//   )
// }

// const DisplayUsername = () => {
//   const user = useContext(UserContext);
//   return <p>Welcome, <strong>{user}</strong>!</p>;
// };

// export default ReactHooks





import React, { useState } from "react";

const CodeCompiler = () => {
  const [language, setLanguage] = useState("java"); // java or python
  const [code, setCode] = useState(`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println("Sum: " + (a + b));
    }
}`);
  const [input1, setInput1] = useState("5 3");
  const [input2, setInput2] = useState("10 15");
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRunCode = async () => {
    setLoading(true);
    setResult1("");
    setResult2("");

    try {
      const endpoint = `http://16.171.39.74:8083/${language}`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code,
          testCases: [input1, input2],
        }),
      });

      const outputs = await response.json();

      setResult1(outputs[0] || "No output for Test Case 1");
      setResult2(outputs[1] || "No output for Test Case 2");
    } catch (err) {
      setResult1("Error: " + err.message);
      setResult2("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{language === "java" ? "Java" : "Python"} Online Compiler</h2>

      {/* Language Selector */}
      <div style={{ marginBottom: "10px" }}>
        <label>Select Language: </label>
        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setResult1("");
            setResult2("");

            // Optional: Update default code based on selected language
            if (e.target.value === "java") {
              setCode(`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println("Sum: " + (a + b));
    }
}`);
            } else {
              setCode(`a, b = map(int, input().split())
print("Sum:", a + b)`);
            }
          }}
        >
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={language === "java" ? 12 : 6}
        cols={80}
        placeholder="Enter code here"
        style={{ fontFamily: "monospace", fontSize: "14px", width: "100%" }}
      />

      <div style={{ marginTop: "10px" }}>
        <label>Test Case 1 Input:</label>
        <input
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="e.g., 5 3"
          style={{ width: "300px", marginLeft: "10px" }}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Test Case 2 Input:</label>
        <input
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="e.g., 10 15"
          style={{ width: "300px", marginLeft: "10px" }}
        />
      </div>

      <button onClick={handleRunCode} style={{ marginTop: "20px" }} disabled={loading}>
        {loading ? "Running..." : "Run Code for Both Test Cases"}
      </button>

      <div style={{ marginTop: "20px" }}>
        <h4>Output (Test Case 1):</h4>
        <pre style={{ background: "#f0f0f0", padding: "10px" }}>{result1}</pre>

        <h4>Output (Test Case 2):</h4>
        <pre style={{ background: "#f0f0f0", padding: "10px" }}>{result2}</pre>
      </div>
    </div>
  );
};

export default CodeCompiler;


