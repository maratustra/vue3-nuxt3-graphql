<template>
  <component :is="url ? 'v-link' : 'div'" class="banner-carousel-item image-wrapper" :url="url">
    <div class="image-wrapper-skeleton"></div>
    <img v-lazy-load :src="image.src" class="image isImageLoading" :alt="image.alt" />
  </component>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    default: ''
  },
  image: {
    type: Object,
    required: true,
    default: () => ({
      src: '',
      alt: ''
    })
  },
  needSlider: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss" scoped>
$white: $WHITE;

.banner-carousel-item {
  &.image-wrapper {
    position: relative;
    width: 100%;

    @include tablet-desktop {
      height: 48.4rem;
    }

    @include mobile {
      height: 29.6rem;
    }

    &:has(> .image.isImageLoading) {
      .image-wrapper-skeleton {
        position: absolute;
        z-index: 2;
        width: 100%;
        animation: pulse-bg 1s infinite;

        @include tablet-desktop {
          height: 48.4rem;
        }

        @include mobile {
          height: 29.6rem;
        }
      }
    }
  }

  .image {
    display: flex;
    width: 100%;
    object-fit: cover;

    @include tablet-desktop {
      height: 48.4rem;
    }

    @include mobile {
      height: 29.6rem;
    }

    &-skeleton {
      width: 100%;
      height: 100%;
      animation: pulse-bg 1s infinite;

      @include tablet-desktop {
        height: 48.4rem;
      }

      @include mobile {
        height: 29.6rem;
      }
    }
  }
}

.section-banner-carousel {
  position: relative;
  padding: 0;

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

  .image {
    display: flex;
    width: 100%;
    object-fit: cover;

    @include tablet-desktop {
      height: 48.4rem;
    }

    @include mobile {
      height: 29.6rem;
    }

    &-skeleton {
      width: 100%;
      animation: pulse-bg 1s infinite;

      @include tablet-desktop {
        height: 48.4rem;
      }

      @include mobile {
        height: 29.6rem;
      }
    }

    &-wrapper {
      position: relative;
      width: 100%;

      @include tablet-desktop {
        height: 48.4rem;
      }

      @include mobile {
        height: 29.6rem;
      }

      &:has(> .image.isImageLoading) {
        .image-wrapper-skeleton {
          position: absolute;
          z-index: 2;
          width: 100%;
          animation: pulse-bg 1s infinite;

          @include tablet-desktop {
            height: 48.4rem;
          }

          @include mobile {
            height: 29.6rem;
          }
        }
      }
    }
  }
}
</style>
