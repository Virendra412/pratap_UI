import React, { useEffect, useState } from 'react'
import PreviewBlock from './PreviewBlock.jsx';
import CompnentSlider from './CompnentSlider.jsx';
import PropDetails from './PropDetails.jsx';
import { Menu, X } from 'lucide-react';
// import Hover from '../componets/uiComponents/Hover.jsx';
const componentNames = ['Example1', 'Example2', 'Example3', 'Example4', 'Example5', 'Example6']; // List all component names
const componentData = [ { title: 'InfiniteSlider', length: 1 },{ title: 'TextEffect', length: 2 },{ title: 'TypeWriter', length: 1 },{title:'AnimateOnView',length:0},{title:'Animated Counter',length:1},{title:'Scramble Text',length:1}]
const codeString=`const Example1 = () => {
  return (
      <div className='max-w-[800px] m-auto'>
          <AnimateOnView animateOnce={false}><AnimatedText wrapperClass='gap-1' variant='scaleOut'>{'hi this is first example'}</AnimatedText></AnimateOnView>
    </div>
  )
}`

const ComponentRenderer = () => {
  const [isOpen,setIsOpen]= useState(false)
  const [activeIndex,setActiveIndex]= useState(0)
  const [importedComponent, setImportedComponent] = useState([]);
  const [desc, setDesc] = useState(null)

  
useEffect(() => {
  const importComponent = async () => {
        const comps=[]
        const description = await import(`../examples/${componentData[activeIndex].title}/Description.js`)
        setDesc({heading:description.heading,content:description.content,propDetails:description.propDetails})
      
        for (let i = 0; i < componentData[activeIndex].length; i++){
        const module = await import(`../examples/${componentData[activeIndex].title}/${componentNames[i]}.jsx`);
        comps.push({comp:<module.default/>,codeString:module.codeString})
      }
      setImportedComponent(comps)
  };

    importComponent();
  }, [activeIndex]);
    

  function changeCategory(index) {
    setActiveIndex(index)
  }
    
  return (<div>
    <div className={`border-b border-zinc-200 dark:border-zinc-800 z-50 sticky bg-white dark:bg-black top-[-1px] sm:hidden`} onClick={()=>setIsOpen(prev=>!prev)}>
      <div className='menu px-2 items-center h-[50px] flex gap-3  '>
        {!isOpen?<Menu />:<X />}
      <span>{ componentData[activeIndex].title}</span>
      </div>
    </div>
    <div className=' flex justify-center  pb-[30px] m-auto px-2 relative gap-5 ' onClick={()=>setIsOpen(false)}>
      <CompnentSlider isOpen={isOpen} setIsOpen={setIsOpen} changeCategory={changeCategory} activeIndex={activeIndex}></CompnentSlider>
      
      <div className={`overflow-auto max-w-[1000px] transition-all mt-3 sm:blur-0 ${isOpen?'blur-md':''}`} >
        {desc&&<h3 className='font-semibold mb-1'>{desc.heading }</h3>}
        {desc&&<h3 className='mb-5 text-zinc-500' style={{wordSpacing:'1.5px'}}>{desc.content }</h3>}
        {importedComponent.length > 0 && importedComponent.map((item, ind) => {
          return (<React.Fragment key ={ind}>
            <h3 className='mb-1 mt-5'>Example {ind + 1}</h3>
            <PreviewBlock codeString={item.codeString}> {item.comp} </PreviewBlock> </React.Fragment>)
        })}
        {desc &&<PropDetails propDetails={desc.propDetails}></PropDetails>}
       </div>
      
     
    </div>
        {/* <Hover></Hover> */}
    </div>
  )
}

export default ComponentRenderer