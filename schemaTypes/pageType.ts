import {defineField, defineType} from "sanity"
import {UserIcon} from '@sanity/icons'

export const pageType = defineType({
    name:"page",
    title:"Page",
    type:"document",
    icon: UserIcon,
    fields:[defineField({
        name:"name",
        type:"string",
    })]
})