---
title: Form Submission Encoding
---

# Form Submission Encoding

Form submission encoding refers to the process of formatting and encoding form data before it is sent to the processing
agent (such as a server). The encoding method depends on the content type specified in the form's enctype attribute.

There are two main types of commonly used encoding:

- `application/x-www-form-urlencoded`
  - Simple format and it’s similar to what you see in the query parameters
  - It can be sent in get or post
  - Consists of pairs of keys and values separated by the & symbol
  - Can’t be used to send files

- `multipart/form-data`
  - More complex and covers all types of data that needs to be sent
  - Can be used to send files
  - The encoding separate between different values with a boundary
  - It can be used to upload multiple files using a Content-Type multipart/mixed and creates a separate boundary for it

Read more:

- [W3 Official Documentation on Form submission](https://www.w3.org/TR/html401/interact/forms.html#h-17.13)
