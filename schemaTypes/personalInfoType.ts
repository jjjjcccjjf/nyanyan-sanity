import {defineField, defineType} from 'sanity'

export const personalInfoType = defineType({
  name: 'personal-info',
  title: 'Personal Information',
  type: 'document', // Change from 'object' to 'document'
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
  ],
})
