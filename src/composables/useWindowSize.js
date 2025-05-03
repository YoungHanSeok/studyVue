import {computed, onMounted, onUnmounted, ref} from "vue";

/**
 * @param {number}
 * @returns {Ref<number>,isSmallScreen:<boolean>}
 */
export function useWindowSize(threshold = 1200){
    const windowWidth = ref(window.innerWidth);

    const handleWidth = () => {
        windowWidth.value = window.innerWidth;
    }
    const isSmallScreen = computed(() => windowWidth.value <= threshold);

    onMounted(() => {
        window.addEventListener('resize',handleWidth);
        handleWidth();
    })

    onUnmounted(() => {
        window.removeEventListener('resize',handleWidth);
    })

    return{
        windowWidth,
        isSmallScreen
    };
}