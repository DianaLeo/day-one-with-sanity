import {defineField, defineType} from "sanity"

export const bannerType = defineType({
    name:"banner",
    title:"Banner",
    type:"document",
    fields:[
        defineField({
            name:"name",
            type:"string",
        }),
        defineField({
            name:"slug",
            type:"slug",
            options:{source:"name"},
            validation:(rule)=>rule.required().error("Required to generate a page on the website"),
            hidden:({document})=>!document?.name
        }),
        defineField({
            name:"pages",
            type:"array",
            of:[
                {
                    type:"reference",
                    to:[{type:"page"}]
                }
            ],
        }),
        defineField({
            name:"assetType",
            type:"string",
            options:{
                list:["image","video"],
                layout:"radio"
            },
            initialValue:"image",
        }),
        defineField({
            name:"mobileImage",
            type:"image",
            hidden:({document})=>document?.assetType === "video"
        }),
        defineField({
            name:"desktopImage",
            type:"image",
            hidden:({document})=>document?.assetType === "video"
        }),
        defineField({
            name:"mobileVideo",
            type:"file",
            options:{
                accept:"application/mp4",
            },
            hidden:({document})=>document?.assetType === "image"
        }),
        defineField({
            name:"desktopVideo",
            type:"file",
            options:{
                accept:"application/mp4",
            },
            hidden:({document})=>document?.assetType === "image"
        }),
    ]
})