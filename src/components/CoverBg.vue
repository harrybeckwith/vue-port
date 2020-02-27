<template>
    <div class="cover-bg" :style="{ 'background-color': bgColor }"> </div>
</template>
<script>
export default {
    name: 'CoverBg',
    props: {
        bgColor: {
            type: String,
            default: "rgba(0, 0, 0, 0.5)"
        }
    }
}
</script>
<style lang="scss" scoped>
    .cover-bg {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>