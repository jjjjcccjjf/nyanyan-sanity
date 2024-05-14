import {defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery-item',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    defineField({
      name: 'caption',
      type: 'string',
    }),
    defineField({
      name: 'category',
      type: 'string',
      initialValue: 'uncategorized',
      options: {
        list: [
          {title: 'Digital Art', value: 'digital-art'},
          {title: 'Pixel Art', value: 'pixel-art'},
          {title: 'Watercolor Art', value: 'watercolor-art'},
          {title: 'Uncategorized', value: 'uncategorized'},
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'number',
      initialValue: 0,
      description: 'Higher priority means it will appear first',
    }),
  ],
})
