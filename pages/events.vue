<template>
    <div v-for="(event, index) in events" :key="event._id">
        <div :style="'animation-delay: ' + index * 0.1 + 's'" class="animate pop">
            <Event :event="event" />
        </div>
    </div>
</template>
<script setup lang="ts">
const { data: events } = useFetch('/api/events', {
    transform: events => events.map(event => ({ ...event, date: new Date(event.date).toDateString(), })),
    onRequest({ request, options }) {
        const token = useCookie('token');
        // Set the request headers
        options.headers = options.headers || {}
        options.headers.authorization = 'Bearer ' + token.value
    },
})
</script>
<style>
.animate.pop {
    animation-duration: 0.5s;
    animation-name: animate-pop;
    animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
}

@keyframes animate-pop {
    0% {
        opacity: 0;
        transform: scale(0.5, 0.5);
    }

    100% {
        opacity: 1;
        transform: scale(1, 1);
    }
}
</style>