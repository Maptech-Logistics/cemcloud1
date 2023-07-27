<template>
<Transition name = "modal-animation">
    <div v-class = "modal" v-show="show">
        <Transition name="modal-animation-inner">
            <div class="modal-inner" v-show="show">
                <slot/>
                <button @click="close" type="button">Exit</button>
            </div>
        </Transition>
    </div>
</Transition>
</template>

<script lang="js">
export default{
    props: {show: Boolean},
    setup(props, {emit}){
        const close = () => {
            emit("close")
        }
        return {close}
    }
}

</script>

<style>

</style>
