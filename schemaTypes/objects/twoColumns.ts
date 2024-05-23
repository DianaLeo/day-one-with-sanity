import {defineType} from "sanity";

export default defineType({
    name: "twoColumns",
    type: "object",
    fields:[
        {
            name:"left",
            type:"array",
            of:[
                {
                    type:"block",
                    styles:[{title:"Normal",value:"normal"}],
                    lists:[]
                }
            ]
        },
        {
            name:"right",
            type:"array",
            of:[
                {
                    type:"block",
                    styles:[{title:"Paragraph",value:"normal"}],
                    lists:[]
                }
            ]
        },
        {
            name:"style",
            type:"string",
            options:{
                list:[
                    {title: "No Padding", value:"p-0"},
                    {title: "Small Padding", value:"p-6"},
                    {title: "Large Padding", value:"p-12"},
                ]
            }
        }
    ]
})