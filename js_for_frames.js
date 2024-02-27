// in the HTML 

var frameNamesList = {};

// For each item you want to add
const frame = {
    parentFrameName: 'Screen 1', // Example parent frame name
    name: 'FrameName',
    suggestedTextStyle: 'TextStyle',
    suggestedPaintStyle: 'PaintStyle',
};


// Create an element object
const element = {
    elementName: item.name,
    elementTextSuggestion: item.suggestedTextStyle,
    elementPaintSuggestion: item.suggestedPaintStyle,
};

// Check if the parentFrameName is already in frameNamesList
if (!frameNamesList.hasOwnProperty(frame.parentFrameName)) {
    // If not, create an array for the parentFrameName key and push the element
    frameNamesList[frame.parentFrameName] = [element];
} else {
    // If yes, push the element to the existing array for the parentFrameName key
    frameNamesList[frame.parentFrameName].push(element);
}


for (const name of Object.keys(frameNamesList)) {
    console.log(name);
    const frameItem = document.createElement('li');
    frameItem.className = 'frame';

    const frameName = document.createElement('div');
    frameName.className = 'frame-name';
    frameName.textContent = name;
    frameItem.appendChild(frameName);

    frameItem.addEventListener('click', () => {
        frameNameHit(name, frameNamesList);
    });

    elementList.appendChild(frameItem);
}



// FOR JS FILE 


// Helper function to get the highest parent frame id
function getHighestParentFrameId(element) {
    let currentElement = element;
    let highestParentFrameId = null;

    // Traverse up the hierarchy until a frame is found
    while (currentElement.parent) {
        if (currentElement.parent.type === 'FRAME') {
            highestParentFrameId = currentElement.parent.id;
        }

        currentElement = currentElement.parent;
    }

    return highestParentFrameId;
}

// Helper function to get the highest parent frame name
function getHighestParentFrameName(element) {
    let currentElement = element;
    let highestParentFrameName = null;

    // Traverse up the hierarchy until a frame is found
    while (currentElement.parent) {
        if (currentElement.parent.type === 'FRAME') {
            highestParentFrameName = currentElement.parent.name;
        }

        currentElement = currentElement.parent;
    }

    return highestParentFrameName;
}

