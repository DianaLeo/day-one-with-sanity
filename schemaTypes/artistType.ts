import {defineField, defineType} from "sanity"
import {UserIcon} from '@sanity/icons'

export const artistType = defineType({
  name:"artist",
  title:"Artist",
  type:"document",
  icon: UserIcon,
  fields:[defineField({
    name:"name",
    type:"string",
  })]
})