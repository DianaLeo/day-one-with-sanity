import {StructureResolver} from 'sanity/structure'
import {CalendarIcon, PinIcon, UserIcon} from '@sanity/icons'

export const structure: StructureResolver = (S)=>
  S
    .list()
    .id("root")
    .title("Content")
    .items([
      S.listItem().title("Upcoming Events").schemaType("event").icon(CalendarIcon)
        .child(S.documentList().title("Coming Events").filter("date > now()")),
      S.listItem().title("Past Events").schemaType("event").icon(CalendarIcon)
        .child(S.documentList().title("Past Events").filter("date <= now()")),
      S.documentTypeListItem("event").title("Events").icon(CalendarIcon),
      S.documentTypeListItem("artist").title("Artists").icon(UserIcon),
      S.documentTypeListItem("venue").title("Venues").icon(PinIcon),
      S.documentTypeListItem("page").title("Pages"),
      S.documentTypeListItem("banner").title("Banners"),
    ])
