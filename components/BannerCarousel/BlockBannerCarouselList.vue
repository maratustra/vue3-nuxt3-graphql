<template>
  <div class="slider-wrapper">
    <component
      :is="needSlider && !loading ? 'v-slider' : 'div'"
      class="banner-slider"
      :slider-settings="sliderSettings"
      :need-slider="needSlider"
      :active-index="activeIndex"
      @slide-change="(newIndex) => (activeIndex = newIndex)"
    >
      <div :class="{ 'slider swiper-wrapper': needSlider }">
        <template v-if="loading">
          <div v-for="banner in 2" :key="`skeleton-banner-${banner}`" :class="{ 'swiper-slide': needSlider }">
            <div class="image-skeleton"></div>
          </div>
        </template>
        <template v-else>
          <div v-for="banner in banners" :key="banner.id" :class="{ 'swiper-slide': needSlider }">
            <block-banner-carousel-item v-bind="banner" />
          </div>
        </template>
      </div>
    </component>
    <div v-if="!loading" class="pagination-list">
      <button
        v-for="(paginationItem, index) in banners"
        :key="`pagination-item-${paginationItem.id}`"
        type="button"
        class="pagination-list__item"
        :class="{ active: activeIndex === index }"
        @click="activeIndex = index"
      ></button>
    </div>
  </div>
</template>

<script setup>
import BlockBannerCarouselItem from '@/components/BannerCarousel/BlockBannerCarouselItem.vue'

defineProps({
  sliderSettings: {
    type: Object,
    default: () => ({
      sliderPerView: 'auto',
      loop: false,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      }
    })
  },
  banners: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  },
  needSlider: {
    type: Boolean,
    default: true
  }
})

const activeIndex = ref(0)
</script>

<style lang="scss" scoped>
$white: $WHITE;

.slider-wrapper {
  position: relative;
}

.image-skeleton {
  width: 100%;
  animation: pulse-bg 1s infinite;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  @include tablet-desktop {
    height: 48.4rem;
  }

  @include mobile {
    height: 29.6rem;
  }
}

.pagination-list {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  display: flex;
  column-gap: 1rem;
  transform: translateX(-50%);

  &__item {
    width: 2rem;
    height: 2rem;
    border: 0.1rem solid $white;
    border-radius: 50%;
    cursor: pointer;

    &:not(.active) {
      background-color: transparent;
    }

    @include hover {
      transition: background-color 0.3s ease;

      &:hover {
        background-color: rgba($white, 50%);
      }
    }

    &.active {
      background-color: $white;
    }
  }
}
</style>
