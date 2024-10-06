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
      default: undefined,
      description: 'The child elements to be animated.',
    },
    {
      prop: 'className',
      type: 'string',
      default: 'undefined',
      description: 'Optional CSS class for styling the wrapper of children.',
    },
    {
      prop: 'direction',
      type: "'horizontal' | 'vertical'",
      default: "'horizontal'",
      description: 'Alignment of slider',
    },
    {
      prop: 'reverse',
      type: 'Boolean',
      default: 'false',
      description: 'direction of slider',
    }
];
  
export { heading, content, propDetails }


// children: React.ReactNode;
//   gap?: number;
//   duration?: number;
//   direction?: 'horizontal' | 'vertical';
//   reverse?: boolean;
//   className?: string;