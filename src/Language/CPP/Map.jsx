import React, { useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Block from '../../Component/Reusable/Block';
import Inner from '../../Component/Reusable/Inner';
import ParticlesComponent from '../../Component/Particle/particle';

const Map = () => {
  const containerRef = useRef(null);
  const [selectedId, setSelectedId] = useState(null);

  const codeInitialization = `
#include <iostream>
#include <map>

int main() {
    // Initialize a map
    std::map<int, std::string> myMap;

    // Inserting values
    myMap[1] = "One";
    myMap[2] = "Two";
    myMap[3] = "Three";

    // Using insert function
    myMap.insert(std::pair<int, std::string>(4, "Four"));

    // Another way to insert
    myMap.insert(std::make_pair(5, "Five"));

    // Displaying the map
    for (const auto& pair : myMap) {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }

    return 0;
}`;

  const codeUsage = `
#include <iostream>
#include <map>

int main() {
    std::map<int, std::string> myMap;
    myMap[1] = "One";
    myMap[2] = "Two";
    myMap[3] = "Three";

    // Accessing elements
    std::cout << "Element at key 2: " << myMap[2] << std::endl;

    // Size of the map
    std::cout << "Size of map: " << myMap.size() << std::endl;

    // Erasing elements
    myMap.erase(2);
    std::cout << "Size of map after erasing key 2: " << myMap.size() << std::endl;

    return 0;
}`;

  const codeIterator = `
#include <iostream>
#include <map>

int main() {
    std::map<int, std::string> myMap;
    myMap[1] = "One";
    myMap[2] = "Two";
    myMap[3] = "Three";

    // Iterating through the map
    for (std::map<int, std::string>::iterator it = myMap.begin(); it != myMap.end(); ++it) {
        std::cout << it->first << ": " << it->second << std::endl;
    }

    return 0;
}`;
const codeFind = `
#include <iostream>
#include <map>

int main() {
    std::map<int, std::string> myMap;
    myMap[1] = "One";
    myMap[2] = "Two";
    myMap[3] = "Three";

    // Finding an element
    auto it = myMap.find(2);
    if (it != myMap.end()) {
        std::cout << "Found: " << it->first << " => " << it->second << std::endl;
    } else {
        std::cout << "Element not found" << std::endl;
    }

    return 0;
}`;

const codeExistence = `
#include <iostream>
#include <map>

int main() {
    std::map<int, std::string> myMap;
    myMap[1] = "One";
    myMap[2] = "Two";
    myMap[3] = "Three";

    // Checking existence of an element
    if (myMap.count(2) > 0) {
        std::cout << "Element at key 2 exists" << std::endl;
    } else {
        std::cout << "Element at key 2 does not exist" << std::endl;
    }

    return 0;
}`;

  return (
    <div className="h-screen w-screen bg-[#110d16]  flex-col relative ">
      <ParticlesComponent />
      <div className='h-[20%]  flex items-center '>
      <div className="  mb-2 h-[100%] w-[50%] flex justify-center items-center">
        <Block props="Back"  navigateTo="/cpp" />
        {/* <Block props="Home Page"  navigateTo="/" /> */}
      </div>
      <div className=" mb-2  h-[100%] w-[50%] flex justify-center items-center">
        <Block props="Home Page"  navigateTo="/" />
        {/* <Block props="Home Page"  navigateTo="/" /> */}
      </div>
      </div>
      
      <div className='flex flex-wrap justify-center h-[70%] w-screen items-center'>
        <Inner children='Initialization of Map'
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

export default Map;
