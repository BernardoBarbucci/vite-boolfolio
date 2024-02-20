<template>
    <header>
        <section>
            <div>
                <h1>
                    Header Component
                </h1>
            </div>
        </section>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>

<style lang="scss">
@use '../scss/partials/variables';

header {
    background-color: $background-color;
}
</style>