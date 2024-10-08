const heading = 'TypeWriter Text'
const content = "The text generates on-screen as if it’s being typed in real-time, creating a dynamic and interactive experience. This effect mimics the action of a typewriter, with each character appearing sequentially, simulating typing speed and rhythm."

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
      default: "['examle text']",
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