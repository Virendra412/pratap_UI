const heading = 'Scaramble Text'
const content = "Easily animate text in React with  '<AnimatedText>'  component, offering smooth transitions, dynamic effects, and enhanced user engagement, all with minimal effort and full control over animation behavior."

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