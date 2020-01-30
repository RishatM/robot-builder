<template>
<div>
    <div class="header">
        <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
        <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
    </div>
    <!-- Toggleable -->
    <!-- slot section will have data that is between the imported tags on the template
    i.e <CollapsibleContent> content -- will go into slot </CollapsibleContent> -->
    <slot v-if="open">
        <!-- content here will be replace with whatever is between
         <CollapsibleContent></CollapsibleContent> tag -->
    </slot>
</div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return {
      open: true,
    };
  },
};

</script>

<style scoped>
.header{
    background-color: gray;
    padding: 3px;
    cursor: pointer;
}

</style>
