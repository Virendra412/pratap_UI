const heading = 'TypeWriter Text'
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
      type: 'Array',
      default: '',
      description: 'Pass the Array of string to animate',
    },
    {
      prop: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Optional CSS class for styling the text.',
    },
    {
      prop: 'cursorClass',
      type: 'String',
      default: 'undefined',
      description: 'Optional CSS class for styling the cursor.',
    },
    {
      prop: 'duration',
      type: `Number`,
      default: '1.5',
      description: 'Duration of animation',
    }
];
  
export {heading,content,propDetails}