<template>
  <div :class="{ slideer: needSlider }">
    <div ref="slider" :class="{ 'swiper-container': needSlider }">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Swiper from 'swiper'
import { onMounted } from 'vue'

const props = defineProps({
  needSlider: {
    type: Boolean,
    defaault: false
  },
  activeIndex: {
    type: Number,
    default: 0
  },
  sliderSettings: {
    type: Object,
    default: () => ({
      slidesPerView: 'auto',
      loop: false
    })
  }
})

const emit = defineEmits(['slide-change'])

const slider = ref({})
const swiper = ref(null)

onMounted(() => {
  if (props.needSlider) {
    swiper.value = new Swiper(slider.value, props.sliderSettings)
    swiper.value.on('slideChange', () => {
      emit('slide-change', swiper.value.realIndex)
    })
  }
})

const activeIndex = computed(() => props.activeIndex)

watch(activeIndex, (value) => {
  swiper.value.slideTo(value)
})
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
}

.swiper-container {
  overflow: unset !important;

  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  :deep(.swiper-wrapper) {
    position: static !important;
    z-index: unset !important;
    width: unset !important;
    height: unset !important;
    box-sizing: border-box !important;
    transition-property: unset !important;
  }
}
</style>
