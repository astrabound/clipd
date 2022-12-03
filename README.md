# ClipD

A simple to use persistent clipboard manager.

## Concept

ClipD stores data in json format accross multiple files in the configured
directory.

- Each file represent a clip.
- Each clip can contain multiple pages.
- Each page can contain multiple items

### Clip

A collection of related pages of data.

### Page

A collection of related items to be tracked.

### Item

A single piece of information to be tracked.

## Data structure

```json
{
  "clip_id": "string-uuid",
  "clip_name": "string",
  "clip_description": "string",
  "pages": [
    {
      "page_id": "string-uuid",
      "page_name": "string",
      "page_description": "string",
      "items": [
        {
          "item_id": "string-uuid",
          "item_name": "string",
          "item_data": "string"
        }
      ]
    }
  ]
}
```
