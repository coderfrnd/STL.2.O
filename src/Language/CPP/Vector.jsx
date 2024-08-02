import React, { useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Block from '../../Component/Reusable/Block';
import Inner from '../../Component/Reusable/Inner';
import ParticlesComponent from '../../Component/Particle/particle';

const Vector = () => {
  const containerRef = useRef(null);
  const [selectedId, setSelectedId] = useState(null);

  const codeInitialization = `
#include <iostream>
#include <vector>

int main() {
    // Initialize a vector
    std::vector<int> myVector;

    // Inserting values
    myVector.push_back(1);
    myVector.push_back(2);
    myVector.push_back(3);

    // Displaying the vector
    for (int i = 0; i < myVector.size(); ++i) {
        std::cout << myVector[i] << std::endl;
    }

    return 0;
}`;

  const codeUsage = `
#include <iostream>
#include <vector>

int main() {
    std::vector<int> myVector = {1, 2, 3};

    // Accessing elements
    std::cout << "Element at index 1: " << myVector[1] << std::endl;

    // Size of the vector
    std::cout << "Size of vector: " << myVector.size() << std::endl;

    // Removing elements
    myVector.pop_back();
    std::cout << "Size of vector after pop_back: " << myVector.size() << std::endl;

    return 0;
}`;

  const codeIterator = `
#include <iostream>
#include <vector>

int main() {
    std::vector<int> myVector = {1, 2, 3};

    // Iterating through the vector
    for (std::vector<int>::iterator it = myVector.begin(); it != myVector.end(); ++it) {
        std::cout << *it << std::endl;
    }

    return 0;
}`;

const codeFind = `
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> myVector = {1, 2, 3};

    // Finding an element
    auto it = std::find(myVector.begin(), myVector.end(), 2);
    if (it != myVector.end()) {
        std::cout << "Found: " << *it << std::endl;
    } else {
        std::cout << "Element not found" << std::endl;
    }

    return 0;
}`;

const codeExistence = `
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> myVector = {1, 2, 3};

    // Checking existence of an element
    if (std::find(myVector.begin(), myVector.end(), 2) != myVector.end()) {
        std::cout << "Element exists" << std::endl;
    } else {
        std::cout << "Element does not exist" << std::endl;
    }

    return 0;
}`;

  return (
    <div className="h-screen w-screen bg-[#110d16] flex-col relative ">
      <ParticlesComponent />
      <div className='h-[20%] flex items-center '>
        <div className="mb-2 h-[100%] w-[50%] flex justify-center items-center">
          <Block props="Back" navigateTo="/cpp" />
        </div>
        <div className="mb-2 h-[100%] w-[50%] flex justify-center items-center">
          <Block props="Home Page" navigateTo="/" />
        </div>
      </div>
      <div className='flex flex-wrap justify-center h-[70%] w-screen items-center'>
        <Inner children='Initialization of Vector'
          props={
            <div className='w-screen h-[90%] '>
              <SyntaxHighlighter language="cpp" style={materialOceanic}>
                {codeInitialization}
              </SyntaxHighlighter>
            </div>
          }
        />
        <Inner children='Usage'
          props={
            <div className='w-screen h-[90%]'>
              <SyntaxHighlighter language="cpp" style={materialOceanic}>
                {codeUsage}
              </SyntaxHighlighter>
            </div>
          }
        />
        <Inner children='Use Through Iterator'
          props={
            <div className='w-screen h-[90%]'>
              <SyntaxHighlighter language="cpp" style={materialOceanic}>
                {codeIterator}
              </SyntaxHighlighter>
            </div>
          }
        />
        <Inner children='Code Existence'
          props={
            <div className='w-screen h-[90%]'>
              <SyntaxHighlighter language="cpp" style={materialOceanic}>
                {codeExistence}
              </SyntaxHighlighter>
            </div>
          }
        />
        <Inner children='Code Find'
          props={
            <div className='w-screen h-[90%]'>
              <SyntaxHighlighter language="cpp" style={materialOceanic}>
                {codeFind}
              </SyntaxHighlighter>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Vector;
