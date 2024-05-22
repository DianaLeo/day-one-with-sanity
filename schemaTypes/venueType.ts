import {defineField, defineType} from "sanity"
import {EarthAmericasIcon} from '@sanity/icons'

export const venueType = defineType({
  name:"venue",
  title:"Venue",
  type:"document",
  icon: EarthAmericasIcon,
  fields:[defineField({
    name:"name",
    type:"string",
  })]
})