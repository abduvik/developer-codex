<template>
  <div class="flex gap-3 mb-16 mt-16 flex-col md:flex-row">
    <div class="md:w-1/2">
      <div>
        <h2 class="font-bold border-0 text-2xl">Quick Summaries</h2>
        <p class="!mt-2">
          Adhering to 80/20 rule with sharing most used tech knowledge
        </p>
      </div>
      <div>
        <h2 class="font-bold border-0 text-2xl">Courses & Newsletter</h2>
        <p class="!mt-2">
          You will find summaries for courses I have learned with valuable
          links. All for free!
          <ul>
            <li>
              <RouterLink to="/courses/">Courses</RouterLink>
            </li>
            <li>
              <RouterLink to="/topics/">Topics summaries</RouterLink>
            </li>
            <li>
              <RouterLink to="/books-summaries/">Books summaries</RouterLink>
            </li>
          </ul>
        </p>
      </div>
      <div>
        <h2 class="font-bold border-0 text-2xl">Updated Content</h2>
        <p class="!mt-2">
          Content is always updated. Make sure to subscribe to my newsletter to
          get new content delivered to your mailbox!
        </p>
      </div>
    </div>
    <div class="md:w-1/2">
      <iframe
        class="w-full h-80 md:h-full"
        frameborder="0"
        scrolling="no"
        src="https://abduvik.substack.com/embed?1"
      ></iframe>
    </div>
  </div>
</template>
<script setup>
</script>