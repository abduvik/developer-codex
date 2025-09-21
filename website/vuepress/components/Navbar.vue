<script lang="ts" setup>
import NavbarBrand from "@vuepress/theme-default/lib/client/components/NavbarBrand.vue";
import NavbarItems from "@vuepress/theme-default/lib/client/components/NavbarItems.vue";
import ToggleColorModeButton from "@vuepress/theme-default/lib/client/components/ToggleColorModeButton.vue";
import ToggleSidebarButton from "@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue";
import { computed, ref } from "vue";
import {
  DeviceType,
  useThemeLocaleData,
  useUpdateDeviceStatus,
} from "@vuepress/theme-default/lib/client/composables/index.js";

defineEmits<(e: "toggle-sidebar") => void>();

defineSlots<{
  before?: (props: Record<never, never>) => any;
  after?: (props: Record<never, never>) => any;
}>();

const themeLocale = useThemeLocaleData();

const navbar = ref<HTMLElement | null>(null);
const navbarBrand = ref<HTMLElement | null>(null);

const linksWrapperMaxWidth = ref(0);
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {};
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + "px",
  };
});

const getCssValue = (el: HTMLElement | null, property: string): number => {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
    property
  ];
  const num = Number.parseInt(val, 10);

  return Number.isNaN(num) ? 0 : num;
};

useUpdateDeviceStatus(
  DeviceType.MOBILE,
  (mobileDesktopBreakpoint: number): void => {
    // avoid overlapping of long title and long navbar links
    const navbarHorizontalPadding =
      getCssValue(navbar.value, "paddingLeft") +
      getCssValue(navbar.value, "paddingRight");
    if (window.innerWidth < mobileDesktopBreakpoint) {
      linksWrapperMaxWidth.value = 0;
    } else {
      linksWrapperMaxWidth.value =
        navbar.value!.offsetWidth -
        navbarHorizontalPadding -
        (navbarBrand.value?.offsetWidth || 0);
    }
  }
);
</script>

<template>
  <header ref="navbar" class="navbar flex">
    <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" />

    <span ref="navbarBrand">
      <NavbarBrand />
    </span>

    <div class="navbar-items-wrapper mx-auto">
      <slot name="before" />
      <NavbarItems class="can-hide" />
      <slot name="after" />
      <ToggleColorModeButton
        v-if="themeLocale.colorModeSwitch"
        class="ml-auto"
      />
    </div>
  </header>
</template>
