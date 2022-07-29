// This function returns a list of projects and it's data

const ProjectDOMElement = (project) => { 

  let outerDivContainer = divElement({
    class: 'item col-md-6 col-lg-4'
  })

  let anchorComponent = anchorElement({
    class: "portfolio-item",
    href: project.href
  })

  let figureComponent = figureElement({
    class: 'portfolio-thumb'
  })

  let imgComponent = imgElement({
    src: project.src,
    alt: project.alt
  })

  let overlayWrapperDivComponent = divElement({
    class: "overlay-wrapper"
  })

  let overlayDivComponent = divElement({
    class: "overlay"
  })
  
  let portfolioInfoDivComponent = divElement({
    class: "portfolio-info"
  })

  let paragraphComponent = paragraphElement({
    class: "cap",
    text: project.type
  })

  let headerComponent = headerThreeElement({
    class: "heading",
    text: project.name
  })



  figureComponent = addElement(figureComponent, imgComponent)
  anchorComponent = addElement(anchorComponent, figureComponent)
  overlayWrapperDivComponent = addElement(overlayWrapperDivComponent, overlayDivComponent)
  portfolioInfoDivComponent = addElement(portfolioInfoDivComponent, paragraphComponent)
  portfolioInfoDivComponent = addElement(portfolioInfoDivComponent, headerComponent)
  overlayWrapperDivComponent = addElement(overlayWrapperDivComponent,portfolioInfoDivComponent)
  anchorComponent = addElement(anchorComponent, overlayWrapperDivComponent)
  outerDivContainer = addElement(outerDivContainer, anchorComponent)

  return outerDivContainer;
}

// function to handle nesting
const addElement = (parent, child) => { 
  parent.appendChild(child)
  return parent
}

// functions to generate elements
const divElement = (props) => { 
  let divEle = document.createElement('div')
  if (props.class) { 
    props.class.split(" ").forEach(className => {
      divEle.classList.add(className)
    });
  }
  return divEle;
}

const anchorElement = (props) => { 
  let anchorComponent = document.createElement('a')
  if (props.class) { 
    props.class.split(" ").forEach(className => {
      anchorComponent.classList.add(className)
    });
  }
  if (props.href) { 
    anchorComponent.setAttribute('href', props.href)
  }
  return anchorComponent;
}

const figureElement = (props) => { 
  let figureComponent = document.createElement('figure')
  if (props.class) { 
    props.class.split(" ").forEach(className => {
      figureComponent.classList.add(className)
    });
  }
  return figureComponent;
}

const imgElement = (props) => { 
  let imgComponent = document.createElement('img')
  if (props.alt) { 
    imgComponent.setAttribute('alt', props.alt)
  }
  if (props.src) { 
    imgComponent.setAttribute('src', props.src)
  }

  return imgComponent;

}

const paragraphElement = (props) => { 
  let paragraphComponent = document.createElement('p')
  if (props.class) { 
    props.class.split(" ").forEach(className => {
      paragraphComponent.classList.add(className)
    });
  }
  if (props.text) { 
    paragraphComponent.textContent = props.text
  }
 
  return paragraphComponent;
}

const headerThreeElement = (props) => { 
  let headerThreeComponent = document.createElement('h3')
  if (props.class) { 
    props.class.split(" ").forEach(className => {
      headerThreeComponent.classList.add(className)
    });
  }
  if (props.text) { 
    headerThreeComponent.textContent = props.text
  }
 
  return headerThreeComponent;
  
}

export default ProjectDOMElement;