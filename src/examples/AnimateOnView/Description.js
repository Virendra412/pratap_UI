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
      type: 'ReactNode',
      default: '',
      description: 'The content to animate when in view.',
    },
    {
      prop: 'animateOnce',
      type: 'Boolean',
      default: 'false',
      description: 'Set to "true" if u want to animate content everytime it comes in view',
    },
    {
      prop: 'amount',
      type: 'Number',
      default: '0.2',
      description: 'this is the amount of content animate whwn comes in view',
    },
    {
      prop: 'className',
      type: `String`,
      default: '',
      description: 'Optional! to style the container of content',
    }
];
  
export {heading,content,propDetails}