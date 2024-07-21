import React, { useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Block from '../../Component/Reusable/Block';
import Inner from '../../Component/Reusable/Inner';

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

  return (
    <div className="h-screen w-screen bg-[#AE04FF]">
      <div className="flex justify-center mb-2 h-[10%]">
        <Block props="Reverse" containerRef={containerRef} navigateTo="/cpp" />
      </div>
      <div className='flex space-x-6 h-[50%] w-screen'>
        <Inner children='Initialization of Map'
          props={
            <div className='w-screen h-[90%]'>
              <SyntaxHighlighter language="cpp" style={materialOceanic}>
                {codeInitialization}
              </SyntaxHighlighter>
            </div>
          }
        />
        <Inner children='Usage'
          props={
            <div>
              <SyntaxHighlighter language="cpp" style={materialOceanic}>
                {codeUsage}
              </SyntaxHighlighter>
            </div>
          }
        />
        <Inner children='Use Through Iterator'
          props={
            <div>
              <SyntaxHighlighter language="cpp" style={materialOceanic}>
                {codeIterator}
              </SyntaxHighlighter>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Map;
