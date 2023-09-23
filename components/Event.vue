<template lang="">
<div
    class="flex flex-row bg-light-beige flex delay-500 font-sans my-6 mx-auto w-4/5 lg:w-1/2 2xl:w-2/5 bg-gray-100 rounded-3xl shadow-lg p-5">
    <form class="basis-4/5 grow flex flex-col md:px-6">
        <div class="flex flex-row ">
            <h1
                class="block w-12 h-12 text-orange text-center align-middle leading-[48px] font-extrabold bg-light-orange rounded-full">
                {{ event.daysUntilBirthday }}
            </h1>
            <p class="ml-1 h-12 block leading-[48px] text-sm align-middle">days until this event</p>
        </div>
        <div class="text-center w-full text-xl font-bold text-orange md:text-2xl ">
            {{ event.description }}
        </div>
        <div class=" items-baseline mt-4 text-xs">
            {{ event.date }}
        </div>

    </form>
    <div class="basis-1/5 w-12 md:w-24 relative">
        <img src="../assets/svg/party.png" alt="" class="absolute inset-0 m-auto w-16 object-center rounded-lg"
            loading="lazy" />
    </div>
</div>
</template>
<script>
export default {
    props: {
        event: Object
    },
    computed: {
        image() {
            return this.event.daysUntilBirthday
        },
    },
}
</script>
<style lang="">
    
</style>