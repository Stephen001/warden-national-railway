<template>
    <div class="stockpile">
        <label for="stockpile-name">Stockpile Name</label>
        <input type="text" name="stockpile-name" id="stockpile-name" readonly="true" />
        <label for="stockpile-code">Stockpile Code</label>
        <input type="text" name="stockpile-code" id="stockpile-code" readonly="true" />
    </div>
</template>

<style scoped>
.stockpile {
    display: grid;
    grid-template-columns:  repeat(2, 2fr);
    grid-template-rows:     repeat(2, 2fr);
}
</style>