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
      description: 'Optional CSS class for styling the component.',
    },
    {
      prop: 'variants',
      type: '{ container?: Variants; item?: Variants; }',
      default: 'undefined',
      description: 'Custom variants for container and item animations.',
    },
    {
      prop: 'preset',
      type: "'fade' | 'slide' | 'scale' | 'blur' | 'blur-slide'",
      default: 'undefined',
      description: 'Preset animations to apply to the group of elements.',
    }
  ];