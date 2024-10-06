const heading = 'Animated Group'
const content = "A wrapper that adds animated transitions to a group of child elements. It's perfect for creating staggered animations for lists, grids, or any collection of components."

const propDetails = [
    {
     prop: 'Prop',
      type: 'Type',
      default: "Default",
      description: 'Description',
    },
    {
      prop: 'children',
      type: 'String',
      default: '"default text"',
      description: 'Pass the string that you want to animate',
    },
    {
      prop: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Optional CSS class for styling the text.',
    },
    {
      prop: 'wrapperClass',
      type: 'String',
      default: 'undefined',
      description: 'Optional CSS class for styling the wrapper.',
    },
    {
      prop: 'variant',
      type: `"wave" | "scaleOut" | "fadeIn"`,
      default: 'scaleOut',
      description: 'Different animations to apply to the text',
    }
];
  
export {heading,content,propDetails}